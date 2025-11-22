import { LightningElement } from 'lwc';

export default class ChildLifecycle extends LightningElement {

    constructor(){
        super();
        console.log('Child - Constructor called');
    }

    connectedCallback(){
        console.log('Child - Connected Callback called');
    }

    renderedCallback(){
        console.log('Child - Rendered Callback called');
    }

    disconnectedCallback(){
        console.log('Child - Disconnected Callback called');
    }

    errorCallback(error, stack){
        console.log('Child - Error Callback called');
        console.error('Error: ', error);
        console.error('Stack: ', stack);
    }
}