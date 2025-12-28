import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {

    carList = ["Ford", "Chevrolet", "Toyota", "Honda", "BMW", "Audi", "Mercedes"];

    ceoList = [
        {id: 1, name: 'Elon Musk', company: 'Tesla'},
        {id: 2, name: 'Tim Cook', company: 'Apple'},
        {id: 3, name: 'Sundar Pichai', company: 'Google'},
        {id: 4, name: 'Satya Nadella', company: 'Microsoft'},
        {id: 5, name: 'Mark Zuckerberg', company: 'Meta'}
    ];
}