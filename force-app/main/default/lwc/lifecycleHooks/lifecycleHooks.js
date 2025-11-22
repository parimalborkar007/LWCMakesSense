import { LightningElement } from 'lwc';

export default class LifecycleHooks extends LightningElement {
    userName = 'Parimal';

    handleNameChange(){
        this.userName = 'Borkar';
    }

    constructor(){
        super();
        //console.log('Constructor called');
    }

    connectedCallback(){
        //console.log('Connected Callback called');
    }

    renderedCallback(){
        //console.log('Rendered Callback called');
    }

    disconnectedCallback(){
        //console.log('Disconnected Callback called');
    }

    errorCallback(error, stack){
        //console.log('Error Callback called');
        //console.error('Error: ', error);
        //console.error('Stack: ', stack);
    }
}