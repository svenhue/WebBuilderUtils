import { BusinessObject } from '../Data/BusinessObject.js';
import { IBOInstance } from '../Data/IBOInstance.js';

import { IDataContainer } from './IDataContainer.js';

export class BODataContainer implements IDataContainer{
    id: number;
    value: Array<IBOInstance>
    boType: BusinessObject

    constructor(boType?: BusinessObject, value?: Array<IBOInstance> ){
        this.value = value;
        this.boType = boType;
    }

    public GetValueType(): string{
        return typeof this.value;
    }

}