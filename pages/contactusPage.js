// page is non-angular
browser.ignoreSynchronization = true;
import { element } from 'protractor';

class ContactusPage {
    constructor() {
        this.messageTextbox = element(by.id('message'));
    }
    
    enterMessage(message){
        return this.messageTextbox.sendKeys(message);
    }
}
export default new ContactusPage();