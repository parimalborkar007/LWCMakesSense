import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';

import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';
import PRIORITY_FIELD from '@salesforce/schema/Case.Priority';

export default class CustomCaseCreator extends LightningElement {

    subject = '';
    description = '';
    priority = '';
    recordTypeId = '';

    @wire(getObjectInfo, { objectApiName: CASE_OBJECT })
    caseRecord({ data, error }) {
        if (data) {
            const recordTypes = Object.values(data.recordTypeInfos);

            const rt = recordTypes.find(rt => 
                rt.developerName === 'SMS_Community_Cases'
            );

            if (rt) {
                this.recordTypeId = rt.recordTypeId;
                console.log('Record Type Found:', this.recordTypeId);
            } else {
                console.error('Record Type not found!');
            }
        }

        if (error) {
            console.error('Error fetching Case Record Type Info:', error);
        }
    }

    get priorityOptions() {
        return [
            { label: 'Low', value: 'Low' },
            { label: 'Medium', value: 'Medium' },
            { label: 'High', value: 'High' },
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

        if (!this.recordTypeId) {
            console.error('Record Type ID is missing!');
            return;
        }

        const fields = {};

        fields[SUBJECT_FIELD.fieldApiName] = this.subject;
        fields[DESCRIPTION_FIELD.fieldApiName] = this.description;
        fields[PRIORITY_FIELD.fieldApiName] = this.priority;
        fields['RecordTypeId'] = this.recordTypeId;

        const recordInput = {
            apiName: CASE_OBJECT.objectApiName,
            fields
        };

        try {
            const record = await createRecord(recordInput);
            alert('Case created successfully with Id: ' + record.id);
        } catch (error) {
            console.error('Error creating case:', error.body?.message);
        }
    }
}