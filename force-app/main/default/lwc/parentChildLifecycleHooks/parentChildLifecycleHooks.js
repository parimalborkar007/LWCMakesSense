import { LightningElement } from 'lwc';

export default class ParentChildLifecycleHooks extends LightningElement {

    constructor(){
        super();
        console.log('Parent - Constructor called');
    }

    connectedCallback(){
        console.log('Parent - Connected Callback called');
    }

    renderedCallback(){
        console.log('Parent - Rendered Callback called');
    }

    disconnectedCallback(){
        console.log('Parent - Disconnected Callback called');
    }

    errorCallback(error, stack){
        console.log('Parent - Error Callback called');
        console.error('Error: ', error);
        console.error('Stack: ', stack);
    }
}