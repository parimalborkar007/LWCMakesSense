import { LightningElement, api } from 'lwc';

const FIELDS = ['CaseNumber', 'Subject', 'Status', 'Priority', 'Description'];

export default class EditRecordUsingRecordForm extends LightningElement {

    @api recordId;

    fields = FIELDS;
}
