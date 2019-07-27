import homePage from '../pages/homePage';
import CategoryPage from '../pages/categoryPage';

describe ('Non-Angular Login', () => {
    beforeEach(async () => {
        await browser.get("");
    });

    it('Verify Add to cart button is working', async () => {
        expect(homePage.getwindowTitle()).toContain('My Stor');
        await homePage.clickContactusButton();
        await contactusPage.enterMessage("Hello World");
        await browser.sleep(5000);
        //await loginPage.login('invalid_user', 'invalid_password');
       // expect(await loginPage.errorMessage.isDisplayed()).toBe(true);
    });
});