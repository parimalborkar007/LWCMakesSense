import { LightningElement } from 'lwc';

export default class OwnerComponent extends LightningElement {
    
    productList = [
        {id: '1', name: 'Product 1', price: 100, rating: 4},
        {id: '2', name: 'Product 2', price: 200, rating: 5},
        {id: '3', name: 'Product 3', price: 300, rating: 3}    
    ];

    callChildMethod(){
        this.template.querySelector('c-container-component').handleParentCall();
    }
}