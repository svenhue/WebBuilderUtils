//@ts-nocheck

import { defineStore } from 'pinia';
import { useApplicationStore } from './useApplicationStore.js';
import { IDataContainer } from '../Container/IDataContainer.js';
import { ref } from 'vue';
import { IBOInstance } from '../Data/IBOInstance.js';
export const useDataStore = defineStore('data', () => {

    const containers = ref(new Array<IDataContainer>())
    const boTypes = useApplicationStore().boDeclarations?.boTypes
   
    function AddContainer(container: IDataContainer){
        let id = 1
        if(containers.value.length > 0){
            id = containers.value.map(c => c.id).reduce((a,b) => a > b ? a : b) + 1;
        }
        container.id = id;
        containers.value.push(container)
    }
    function GetBosByContext(boName: string, contextId: number): Array<IBOInstance>{
        return containers.value.find(c => c.contextid === contextId && c.boType.name == boName)?.value
    }
    function GetBoInstancePropertysByField(boName: string, contextId: number, field: string, value: string){
        const bos = containers.value.find(c => c.contextid === contextId && c.boType.name == boName)?.value
        const bo = bos.find(b => b[field] === value)
        if(bo == undefined){
            return []
        }
        return Object.entries(bo)
    }
    function FindByField(boName: string, contextId: number, field: string, value: string){
        return containers.value.find(c => c.contextid === contextId && c.boType.name == boName)?.value.find(b => b[field] === value)
    }
    return {
        containers,
        boTypes,
        AddContainer,
        GetBosByContext,
        GetBoInstancePropertysByField,
        FindByField
    }
})