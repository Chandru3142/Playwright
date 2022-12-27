const{test}=require("@playwright/test")

//locators
const email="[id='Email']";
const password="[id='Password']";
const submit="[type='submit']";
const adminProfile="[id='user-Profile']";

//Test Data
const username="rohit";
const pass="Password#@123"
test('Admin login',async({page})=>
{
    await page.goto("https://rohitk.learn-wize.com/Account/Login");
     await page.pause();
    await page.locator(email).type(username);
    await page.locator(password).clear();
    await page.locator(password).type(pass);
    await page.locator(submit).click();
    await page.locator(adminProfile).waitFor();
    await page.close();
})


