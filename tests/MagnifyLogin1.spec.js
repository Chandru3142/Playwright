const {test}=require("@playwright/test")



//Locators

const email="[id='Email']";

const password="[id='Password']";

const submit="[type='submit']";

const Userpofile="[id='user-Profile']";

const checkbox="[for='chkLWAgreementprivacy']";

const submitbutton="[id='btnSubmit']";


//TestData

const username="chandru3142";

const pass="Chandru#3142";

const mailID="chandru3142@mailinator.com";



//Forgot username locators




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