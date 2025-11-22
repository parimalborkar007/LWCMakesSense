import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import CASE_NUMBER from '@salesforce/schema/Case.CaseNumber';
import CASE_ORIGIN from '@salesforce/schema/Case.Origin';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_STATUS from '@salesforce/schema/Case.Status';

export default class LoadRecordWithoutOFField extends LightningElement {
    @api recordId;

    fields = [CASE_NUMBER, CASE_ORIGIN, CASE_PRIORITY, CASE_SUBJECT, CASE_STATUS];

    @wire(getRecord, { recordId: '$recordId', fields: '$fields' })
    caseVar;

    get caseNumber() {
        return getFieldValue(this.caseVar.data, CASE_NUMBER);
    }

    get caseOrigin() {
        return getFieldValue(this.caseVar.data, CASE_ORIGIN);
    }

    get casePriority() {
        return getFieldValue(this.caseVar.data, CASE_PRIORITY);
    }

    get caseSubject() {
        return getFieldValue(this.caseVar.data, CASE_SUBJECT);
    }

    get caseStatus() {
        return getFieldValue(this.caseVar.data, CASE_STATUS);
    }
}
