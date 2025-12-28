import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Parimal Borkar";
    title = "Hello World Component";

    changeHandler(event){
        this.fullName = event.target.value;
    }

    @track address = {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }

    trackChangeHandler(event){
        this.address.city = event.target.value;
    }

    users = ["Parimal", "Ajay", "Sanket", "Amol", "Ramesh", "Sagar"];

    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0];
    }

    get multiplication(){
        return this.num1 * this.num2;
    }
}