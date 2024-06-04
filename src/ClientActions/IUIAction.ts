import { IActionConfiguration } from "./IActionConfiguration.js";
import { IEventInvoker } from "./EventHandler/IEventInvoker.js";
import { IUIEvent } from "./EventHandler/IUIEvent.js";
import { UIActionTypes } from "./UIActionTypes.js";

export interface IUIAction{
  id: number,
  config: IActionConfiguration
  name: string;
  identifier: string;
  type: UIActionTypes
  targetElement?: string // publicIdentifier of target component
  method?: string // method to call on target component
  execute: (sender: IEventInvoker, event: IUIEvent, args: Array<object>) => void;
}
