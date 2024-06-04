//@ts-ignore
import { injectable } from "inversify";
import { IStateProvider } from "./IStateProvider.js";
import { IStateSetter } from "./IStateSetter.js";

@injectable()
export class GlobalStateProvider{

    viewContexts: Array<{
        viewId: number,
        stateProvider?: Array<IStateProvider>,
        stateSetter?: Array<IStateSetter>,
        localActions?: Array<{methodName: string, function: () => void}>
    }>
    constructor(){
        this.viewContexts = []
    }   
    AddViewContext(viewContext: {
        viewId: number,
        stateProvider?: Array<IStateProvider>,
        stateSetter?: Array<IStateSetter>,
        localActions?: Array<{methodName: string, function: () => void}>
    }){
        this.viewContexts.push(viewContext)
    }
    RemoveViewContext(viewId: number){
        const i = this.viewContexts.findIndex(vc => vc.viewId == viewId)
        if(i >= 0){
            this.viewContexts.splice(i, 1)
        }
        
    }
}