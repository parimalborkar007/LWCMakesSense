import { LightningElement } from 'lwc';

export default class ChildEventTrigger extends LightningElement {

    selectedProduct = {};

    handleFiringEvent(){
        this.selectedProduct = {
            Id: '123',
            Name: 'Smart Watch',
            Price: '150 USD',
            Rating: '4.5/5'
        };

        const event = new CustomEvent('sendproductselected',{
            detail: this.selectedProduct
        });

        this.dispatchEvent(event);
    }
}