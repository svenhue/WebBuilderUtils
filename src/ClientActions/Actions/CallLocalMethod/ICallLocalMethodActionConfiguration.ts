import { IActionConfiguration } from "../../IActionConfiguration.js";

export interface ICallLocalMethodActionConfiguration extends IActionConfiguration {
    methodName: string;
    parameters: object;
}