import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;
    name = '';

    handleClick(){
        this.isVisible = !this.isVisible;
    }

    handleChange(event){
        this.name = event.target.value;
    }

    get helloMethod(){
        return this.name === "Hello";
    }

    // Falsy Values in JavaScript:
    // false
    // 0
    // ""
    // null
    // undefined
    // NaN
}