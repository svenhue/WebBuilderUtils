

import { IApplicationModule } from './Application/IApplicationModule.js';
export class UtilityModule implements IApplicationModule{
    
    name: string = "UtilityModule"
    ressources = []
    components: []
   
    constructor(){
    }
    InitializeServices(): void {
        
    }


}