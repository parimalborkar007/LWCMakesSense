import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = ["Parimal", "Rohit", "Saurabh", "Rohit", "Saurabh", "Rohit", "Saurabh", "Rohit", "Saurabh"];

    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.color = 'red';
        console.log(elem.innerText);

        const userElem = this.template.querySelectorAll('p');
        Array.from(userElem).forEach(item => {
            console.log(item.innerText);
        });
    }

}