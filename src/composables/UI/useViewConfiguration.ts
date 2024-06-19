import { ViewConfiguration } from '../../View/ViewConfiguration.js';
import { MaybeRefOrGetter, inject } from 'vue';
import { IViewConfiguration } from '../../View/IViewConfiguration.js';

export function useViewConfiguration(contextid: number, viewIdentifier: number, view: IViewConfiguration) : {view: MaybeRefOrGetter<IViewConfiguration>, children: MaybeRefOrGetter<Array<ViewConfiguration>>} {
  
    if(view != undefined){
        return {view: view, children: view.children}
    }

    const getter = inject('viewGetter_' + contextid ) as (viewId: number) => { view: MaybeRefOrGetter<IViewConfiguration>, children: MaybeRefOrGetter<Array<ViewConfiguration>>}
    
    if(getter == undefined){
        throw new Error('ViewGetter not found')
    }
    return getter(viewIdentifier);
}