const {test}=require("@playwright/test")

//Locators
const email="[id='Email']";
const password="[id='Password']";
const submit="[type='submit']";
const Userpofile="[id='user-Profile']";
const checkbox="[for='chkLWAgreementprivacy']";
const submitbutton="[id='btnSubmit']";
const forgotusername="xpath=//a[text()='Forgot Username?']";
const backlogin="xpath=//a[text()='Back to Log-In']"
const passwordlink="xpath=//a[text()='Forgot Password?']";
const username1="[id='UserName']";
//TestData
const username="chandru3142";
const pass="Chandru#3142";
const mailID="chandru3142@mailinator.com";

test('User login',async({page})=>
{
    await page.goto("https://rohitk.learn-wize.com/Account/Login");
    await page.pause();
    await page.locator(email).type(username);
    await page.locator(password).clear();
    await page.locator(password).type(pass);
    await page.locator(submit).click();
   // await page.locator(checkbox).click();//agreement for first login
   // await page.locator(submitbutton).click();//agreement for first login
    await page.locator(Userpofile).waitFor();//user profile
})

test('Login using forgot username',async({page})=>
{   
     await page.goto("https://rohitk.learn-wize.com/Account/Login");
     await page.pause();
    await page.locator(forgotusername).click();
    await page.locator(email).type(mailID);
    await page.locator(submit).click();
    await page.locator(backlogin).click();

    
})
test.only('login using forgot password',async({page})=>
{  
await page.goto("https://rohitk.learn-wize.com/Account/Login");
await page.pause();
await page.locator(passwordlink).click();
await page.locator(username1).type(username);
await page.locator(submit).click();
await page.locator(backlogin).click();
});