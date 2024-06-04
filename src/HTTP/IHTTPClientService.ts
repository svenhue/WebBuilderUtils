import { IService } from '../Services/IService.js';
import { AxiosResponse } from 'axios';
import { IExternalNetworkConfiguration } from './IExternalNetworkConfiguration.js';

export interface IHTTPClientService extends IService{
    sendRequest<T>(config: any): Promise<AxiosResponse<T>>; 
    createClient: (config: IExternalNetworkConfiguration) => void;
}