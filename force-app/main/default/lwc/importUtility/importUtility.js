import { LightningElement } from 'lwc';
import MYLOGO from '@salesforce/resourceUrl/SMS_Logo';
import SHOWINPROD from '@salesforce/label/c.Show_in_Prod';
import SVGVECTOR from '@salesforce/resourceUrl/svgvect';
import USER_INFO from '@salesforce/user/Id';
import HASCUSTOMPERMISSION from '@salesforce/userPermission/ViewDeveloperName';
import DEVICE_INFO from '@salesforce/client/formFactor';
import LANG from '@salesforce/i18n/lang';
import LOCALE from '@salesforce/i18n/locale';
import CURRENCY from '@salesforce/i18n/currency';

export default class ImportUtility extends LightningElement {
    src = MYLOGO;

    svgExample = SVGVECTOR;

    userId = USER_INFO;

    deviceInfo = DEVICE_INFO;

    language = LANG;

    userLocale = LOCALE;

    userCurrency = CURRENCY;

    get showInProd(){
        return SHOWINPROD == "true" ? true : false;
    }

    get hasPermission(){
        return HASCUSTOMPERMISSION;
    }
}