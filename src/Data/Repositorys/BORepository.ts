//@ts-nocheck
import 'reflect-metadata'

import { inject, injectable } from 'inversify';
import { useDataStore } from '../../stores/useDataStore.js';
import { IBOInstance } from '../IBOInstance.js';
import { BusinessObject } from '../BusinessObject.js';
import { BODataContainer } from '../../Container/BODataContainer.js';
import { IDataAdapter } from '../DataAdapters/IDataAdapter.js';
import { StateChangeTypes } from './StateChangeTypes.js';
import { IRepository } from './IRepository.js';
import { SimpleNameValueCollection } from '../SimpleNameValueCollection.js';
import { set } from 'lodash-es'
import { Expression } from 'typescript';
import { DataContextManager } from '../StateManagement/DataContextManager.js';
import { IDataContainer } from '../Container/IDataContainer.js';
import { Pinia } from 'pinia';

@injectable()
export class BORepository implements IRepository{
      
        private store: ReturnType<useDataStore>
        private subscribers: Array<IDataAdapter> = []
        private contextManager: DataContextManager;
        private BOIds: Array<number> = []
        private pinia : Pinia;
        constructor(
            @inject('DataContextManager') contextManager: DataContextManager,
            @inject('Pinia') pinia: Pinia   
        ){
            this.contextManager = contextManager;
            this.pinia = pinia;
            this.store = useDataStore(pinia)
        }
    
        public Create(value: IBOInstance, persistslocalStore = false, contextid: number = null){
                this.Publish(value.id, value, StateChangeTypes.create, contextid, undefined, undefined, true)

                if(contextid == null){
                        const contextid = this.contextManager.NewContext();
                        value.contextid = contextid.contextid;
                }

                if(persistslocalStore == true){
                        

                        let containerId = this.store.containers.find(c => c.boType?.name == value.boName)?.id;

                        if(containerId == undefined){
                                containerId = this.CreateContainer(value, contextid);
                        }

                        this.store.$patch((state) => {
                                state.containers.find(c => c.id == containerId).value.push(value);
                                
                        })
                }
                this.Publish(value.id, value, StateChangeTypes.create, contextid, undefined, undefined, false)
                return value;
        }

        public Get(boName: string, expression?: Expression, contextid: number = null){
                let container: IDataContainer;
                if(contextid == null){
                        container = this.store.containers.find(c => c.boType.name == boName);
                }else{
                        container = this.store.containers.find(c => c.boType.name == boName && c.contextid == contextid);
                }
                if(container == undefined){
                        return [];
                }
                if(expression == undefined){
                        return container.value;
                }
              
                return container.value.filter(expression);
        }
        public Update(id: number, newValue: IBOInstance, persistslocalStore = false, contextid: number = null, oldValue){
                if(persistslocalStore == false){
                        this.Publish(id, newValue, StateChangeTypes.update, contextid, undefined, oldValue, true)
                }
                if(persistslocalStore == true){

                        const i = this.store.containers.find(c => c.boType.name == newValue.boName)?.value?.findIndex(v => v.id == id);
                        
                        if(i == undefined){
                                throw new Error('No BO with id ' + id + ' found');
                        }
                        
                        if (oldValue == undefined){
                                oldValue = this.store.$state.containers.find(c => c.boType.name == newValue.boName).value[i];
                        }

                        this.Publish(id, newValue, StateChangeTypes.update, contextid, undefined, oldValue, true)

                        this.store.$patch((state) => {
                                state.containers.find(c => c.boType.name == newValue.boName).value[i] = newValue;
                                
                        })
                }
                this.Publish(id, newValue, StateChangeTypes.update, contextid, undefined, oldValue, false)
                return newValue;
        }
        public Delete(value: IBOInstance, persistslocalStore = false, contextid: number = null){
                
                this.Publish(value.id, value, StateChangeTypes.delete, contextid, undefined, undefined, true)

                if(persistslocalStore == true){
                        const i = this.store.containers.findIndex(c => c.value.findIndex(v => v.id == value.id) != -1);

                        if(i == -1){
                                throw new Error('No BO with id ' + value.id + ' found');
                        }
                        this.store.$patch((state) => {
                                state.containers[i].value.splice(state.containers[i].value.findIndex(v => v.id == value.id), 1);
                        })
                }
                this.Publish(value.id, value, StateChangeTypes.delete, contextid, undefined, undefined, false)
        
        }
        public UpdatePartial(id:number, newValues: SimpleNameValueCollection, persistLocalStorage = false, contextid: number = null, optionalBoName: string, oldValue?: IBOInstance){
                
                if(persistLocalStorage == false){
                        this.Publish(id, newValues, StateChangeTypes.updatePartial, contextid, optionalBoName, oldValue, true)
                }
              

                if(persistLocalStorage == true){
                        
                        let i = this.store.containers.findIndex(c => c.value.findIndex(v => v.id == id) != -1);
                        const bo = this.store.containers[i].value.find(v => v.id == id);
                        if(i == -1){
                                throw new Error('No BO with id ' + id + ' found');
                        }
                        if (oldValue == undefined){
                                oldValue = this.store.$state.containers.find(c => c.boType.name == bo.boName).value[i];
                        }
                        this.Publish(id, newValues, StateChangeTypes.updatePartial, contextid, optionalBoName, oldValue, true)


                        this.store.$patch(() => {
                                for(const newValue of newValues.keyValuePairs){
                                        set(bo, newValue.key, newValue.value)
                                }
                        })

                }
                this.Publish(id, newValues, StateChangeTypes.updatePartial, contextid, optionalBoName, oldValue, false)
                
               
                

        }
        private async Publish(id:number, value: IBOInstance | SimpleNameValueCollection, changeType: StateChangeTypes, contextid: number = null, optinalBoName?: string, oldValue?: IBOInstance, before: boolean = false){
                for(const subscriber of this.subscribers){
                        if(contextid == null ){
                                if((value.boName == subscriber.options.boType.name || optinalBoName == subscriber.options.boType.name ) && !this.AdapterIsBOOwner(subscriber, value)){
                                        this.NotifySubscriber(subscriber, id, value, changeType, oldValue, before);
                                }
                        }else if(contextid == subscriber.contextid){
                                if((value.boName == subscriber.options.boType.name || value.boName == null) && !this.AdapterIsBOOwner(subscriber, value)){
                                        this.NotifySubscriber(subscriber, id, value, changeType, oldValue, before);
                                }
                        }
                        
                }
        }
        private AdapterIsBOOwner(subscriber: IDataAdapter, value: IBOInstance): boolean{
                return subscriber.ownsIds.includes(value.id) ? true : false;
        }
        private async NotifySubscriber(adapter: IDataAdapter, id:number, value, changeType: StateChangeTypes, oldValue, before: boolean){
                if(before == true){
                        adapter?.HandleBeforeStateChange(id, value, changeType, oldValue);
                        return;
                }else{
                        adapter?.HandleStateChange(id, value, changeType, oldValue);
                }
        }
        public Subscribe(subscriber: IDataAdapter){
                subscriber.id = this.subscribers.length+1;
                this.subscribers.push(subscriber);
        }
        public Unsubscribe(subscriber: IDataAdapter){
                this.subscribers = this.subscribers.filter(s => s.id == subscriber.id);
        }
        private CreateContainer(value: IBOInstance, contextid?:number){

                let boType: BusinessObject;
                if(value.boType == undefined && value.boName != undefined){
                        boType = new BusinessObject({
                                name: value.boName,
                                propertys: []
                        })
                }else if (value.boType != undefined){
                        boType = value.boType;
                }
                const container = new BODataContainer(boType, [])
                container.contextid = contextid;
                this.store.AddContainer(container);
                return container.id;                
        }
        
}