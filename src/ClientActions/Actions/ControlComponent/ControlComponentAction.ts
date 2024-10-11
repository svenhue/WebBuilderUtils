//@ts-nocheck
import { inject, injectable } from "inversify";
import { GlobalStateProvider } from "../../../Data/StateManagement/GlobalStateProvider.js";
import { IControlComponentActionConfig } from "./IControlComponentActionConfig.js";
import { IEventInvoker } from "../ClientActions/EventHandler/IEventInvoker.js";
import { IEventReceiver } from "../ClientActions/EventHandler/IEventReceiver.js";
import { EventBus } from "../EventHandler/EventBus.js";


@injectable()
export class ControlComponentAction {
    
    private eventBus: EventBus

    constructor(
  @inject('EventBus') eventBus
        
    ){
      this.eventBus = eventBus
       
    }
    override execute(config: IControlComponentActionConfig){
        
        this.config = config;
        console.log(config)
        const receiver = this.eventBus.events.find(e => e.handler?.identifier == config.targetlement)?.handler
        console.log(receiver, this.eventBus.events)
        if(typeof receiver[config.methodName] != 'function'){
            throw new Error("NO function todo")
        }

        receiver[config.methodName]();
    }
}