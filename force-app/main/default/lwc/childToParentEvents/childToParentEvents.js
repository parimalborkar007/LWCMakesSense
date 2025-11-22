import { LightningElement } from 'lwc';

export default class ChildToParentEvents extends LightningElement {

    showFinalValue = {};

    eventReceived = false;

    handleProductSelection(event){
        this.eventReceived = true;
        this.showFinalValue = event.detail;
    }
}