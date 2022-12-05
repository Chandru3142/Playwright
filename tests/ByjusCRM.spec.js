const {test}=require("@playwright/test")


//Locators
const email="[id='email']";
const password="[id='password']";
const hidepass="[class='MuiSvgIcon-root']";
const loginButton="[type='submit']";

//Test Data
const username="admin@example.com";
const password1="By009$10"
test('Byjus CRM Login',async({page})=>
{
    await page.goto("https://crm-byjus.goave.ga/");
    await page.pause();
    await page.locator(email).type(username);
    await page.locator(password).type(password1);
    await page.locator(hidepass).click();
    await page.locator(loginButton).click();
})