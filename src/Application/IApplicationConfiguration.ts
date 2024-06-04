import { IViewConfiguration } from '../View/IViewConfiguration.js';
import { ApplicationModes } from './ApplicationModes.js';
import { ApplicationDeploymentModes } from './ApplicationDeploymentModes.js';
import { IApplicationModule } from './IApplicationModule.js';
import { IPageConfiguration } from '../View/IPageConfiguration.js';
import { IApplicationStyleSheets } from './Stylesheets/IApplicationStyleSheets.js';
import { IGlobalApplicationVariables } from './Variables/IGlobalApplicationVariables.js';
import { IExternalNetworkConfiguration } from '../HTTP/IExternalNetworkConfiguration.js';
import { IAuthenticationConfiguration } from './Authentication/IAuthenticationConfiguration.js';
import { IInternationalization } from './Localization/IInternationalization.js';

export interface IApplicationConfiguration{
        
    id: number;
    name: string;
    rootComponent?: IViewConfiguration;
    mode?: ApplicationModes
    //selector?: string;
    modules?: Array<IApplicationModule>
    isProduction: boolean;
    deploymentMode: ApplicationDeploymentModes
    pages?: Array<IPageConfiguration>
    stylesheets?: IApplicationStyleSheets
    globalVariables?: IGlobalApplicationVariables
    networkConfigs?: Array<IExternalNetworkConfiguration>
    authentication?: IAuthenticationConfiguration
    initialize?(): void;
    internationalization: IInternationalization
}