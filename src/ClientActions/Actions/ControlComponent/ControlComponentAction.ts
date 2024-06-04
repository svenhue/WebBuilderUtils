//@ts-nocheck
import { inject, injectable } from "inversify";
import { GlobalStateProvider } from "../../../Data/StateManagement/GlobalStateProvider.js";
import { IControlComponentActionConfig } from "./IControlComponentActionConfig.js";


@injectable()
export class ControlComponentAction {
    
    private stateProvider: GlobalStateProvider;
    constructor(
        @inject("GlobalStateProvider") stateProvier: GlobalStateProvider,
        
    ){
      
        this.stateProvider = stateProvier;
    }
    override execute(config: IControlComponentActionConfig){
        
        this.config = config;
        const componentState = this.stateProvider.viewContexts.find(vc => vc.viewId == this.config.targetElement)
        console.log(config, componentState)
        if(componentState == undefined){
            throw new Error(`Component ${this.config.targetElement} not found`)
        }
        const method = componentState.localActions?.find(a => a.methodName == this.config.methodName)
        if(method == undefined){
            throw new Error(`Method ${this.config.methodName} not found`)
        }

        method.function();
    }
}