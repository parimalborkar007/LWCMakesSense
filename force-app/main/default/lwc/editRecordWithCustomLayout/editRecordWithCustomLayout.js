import { LightningElement, api } from 'lwc';

export default class EditRecordWithCustomLayout extends LightningElement {

    @api recordId;
    objectApiName = 'Case';

    handleFormSuccess(event){
        console.log('Success called and invoked');
        const formElement = this.template.querySelector('lightning-record-edit-form');
        console.log(formElement);
        formElement.reset();
    }
}
