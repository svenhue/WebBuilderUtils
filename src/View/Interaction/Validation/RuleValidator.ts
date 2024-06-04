import { IValidationRule } from './IValidationRule.js';
import { ValueResolver } from '../../../CodeExecution/ValueResolver.js';
import { IExecutionContextProvider } from 'src/CodeExecution/IExecutionContextProvider.js';

export function validateRules
    (
        contextProvider: IExecutionContextProvider, 
        contextid: number, 
        rules: Array<IValidationRule>
    ) {

    if(rules == undefined || rules.length == 0){
        return []
    }
    // rules.forEach(rule => {
    //     return new Promise((resolve) => {
    //         const trueOrFalse = ValueResolver(contextProvider, contextid, rule.rule);
    //         if(trueOrFalse == true){
    //             resolve(true);
    //         }else if(trueOrFalse == false && rule.errorMessage == undefined){
    //             resolve(rule.errorMessage);
    //         }else{
    //             console.log('Validation failed', rule);
    //             return rule.errorMessage;
    //         }
    //     }
    // )});
    return rules.map(rule => {
        return () => ValueResolver(contextProvider, contextid, rule.rule) || rule.errorMessage;
    })
}