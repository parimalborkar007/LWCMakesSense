import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class CustomCaseCreator extends LightningElement {

    subjecr = '';
    description = '';
    priority = '';

    get priorityOptions() {
        return [
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
        ];
    }

    populateSubject(event) {
        this.subject = event.target.value;
    }

    populateDescription(event) {
        this.description = event.target.value;
    }

    populatePriority(event) {
        this.priority = event.target.value;
    }

    async createCase() {

        const fields = {};

        fields[SUBJECT_FIELD.fieldApiName] = this.subject; 
        fields[DESCRIPTION_FIELD.fieldApiName] = this.description;
        fields[PRIORITY_FIELD.fieldApiName] = this.priority;

        let recordInput = {apiName: CASE_OBJECT.objectApiName, fields};
        await createRecord(recordInput)
        .then(record => {
            alert('Case created successfully with Id: ' + record.id);
        })
        .catch(error => {
            console.error('Error creating case:' + error.body.message);
        })

    }

}