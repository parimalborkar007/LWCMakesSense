import { LightningElement } from 'lwc';

export default class CaseFormWithEvents extends LightningElement {
    objectApiName = 'Case';

    handleSubmit(event) {
        console.log('Form submission initiated.' + JSON.stringify(event.detail));
    }

    handleSuccess(event) {
        alert('Case created with Id: ' + JSON.stringify(event.detail));
    }

    handleError(event) {
        console.error('Error creating case: ' + JSON.stringify(event.detail));
    }

    handleLoad(event) {
        console.log('Form loaded.' + JSON.stringify(event.detail));
    }
}