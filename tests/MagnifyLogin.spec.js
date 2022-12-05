const {test}=require("@playwright/test")
const dataset=JSON.parse(JSON.stringify(require("../Utils/MagnifyTestData.json")));

test('Login to Magnify', async({page})=>
{   const URL="https://rohitk.learn-wize.com/Account/Login";
    const Register="[id='CreateBUUser']"
    const language="select[id='LanguageId']";;
    const firstname="[id='FirstName']";
    const lastname="[id='LastName']";
    const username="[id='UserName']";
    const email="[id='EmailAddress']";
    const password="[id='Password']";
    const ConfirmPass="[id='ConfirmPassword']";
    const checkbox='[class="custom-label"]';
    const captcha="[role='presentation']";
    const submit='[id="saveRegisteredUser"]';
    const Backtologin='[class="login-btns"]';
    // const country="xpath=(//select[@class='form-control'])[1]";
    // const state="xpath=(//select[@class='form-control'])[2]";
    // const city="xpath=(//input[@class='form-control'])[1]";
    // const pincode="(//input[@class='form-control'])[2]";
    // const Address="textarea[class='form-control']";

    
    await page.goto(URL);//URL of the login page
    await page.pause();
    await page.locator(Register).click();
    //await page.locator(language).click();
    //await page.locator(language).selectOption('English');
    await page.locator(firstname).type("Rohit1");
    await page.locator(lastname).type("Sharma2");
    await page.locator(username).type("RohitSharma1");
    await page.locator(email).type("testing13123@mailinator.com")
    await page.locator(password).type("Rohit@sharma#1234");
    await page.locator(ConfirmPass).type("Rohit@sharma#1234");
    //await page.locator(checkbox).waitFor()
    await page.locator(checkbox).click();
    await page.locator(captcha).click();
    await page.locator(submit).click();
    await page.locator(Backtologin).waitFor();
    await page.locator(Backtologins).click();
})