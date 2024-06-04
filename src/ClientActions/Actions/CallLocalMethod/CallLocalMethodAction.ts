
//@ts-nocheck
import { IUIAction } from "../../IUIAction.js";
import { UIAction } from "../../UIAction.js";
import { ICallLocalMethodActionConfiguration } from "./ICallLocalMethodActionConfiguration.js";
import { SimpleNameValueCollection } from "../../../Data/SimpleNameValueCollection.js";
import { injectable } from "inversify";

@injectable()
export class CallLocalMethodAction extends UIAction<ICallLocalMethodActionConfiguration> implements IUIAction{

    constructor(config: ICallLocalMethodActionConfiguration) {
        super(config);
    }
    
    override execute(targetInstance: VoidFunction, args: SimpleNameValueCollection) {
        
        if (typeof targetInstance[this.config.methodName] === 'function') {
            targetInstance[this.config.methodName](args)
        }else{
            throw new Error(`Method ${this.config.methodName} does not exist on ${targetInstance.constructor.name}`)
        }
    }
}