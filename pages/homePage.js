// page is non-angular
browser.ignoreSynchronization = true;
import { element } from 'protractor';
var EC = protractor.ExpectedConditions;

class HomePage {
    constructor() {
        this.contactusButton = element(by.id('contact-link'));
        this.womenMenu = element(by.linkText('Women'));
        this.tshirtsSubmenu = element(by.xpath("//li[1]//a[@title='T-shirts']"));
    }
    getwindowTitle(){
       // browser.wait(EC.presenceOf(browser.getTitle()), 5000);
        return browser.getTitle();
    }
    clickContactusButton(){
        return this.contactusButton.click();
    }
    clickWomenMenu(){
        return browser.actions().mouseMove(this.womenMenu).perform();
    }
    clickTshirtsSubmenu(){
        browser.wait(tshirtsSubmenu, 2000, 'Submenu should display within 2 seconds');
        return this.tshirtsSubmenu.click();
    }
}
export default new HomePage();