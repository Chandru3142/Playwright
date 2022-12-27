const { test, expect } = require("@playwright/test")
//Locators
const email = "[id='email']";
const password = "[id='password']";
const hidepass = "[class='MuiSvgIcon-root']";
const loginButton = "[type='submit']";
const forgotPassword = '//a[text()="Forgot Password?"]';
const usernotfound = "//li[text()='User not found']";
const IncorrectErrorMessag = "//li[text()='Incorrect username or password']";


//Test Data
const ValidUsername = "admin@example.com";
const Validpassword = "By009$10"
const InvalidUsername = "abcd@zingalala.com"
const InvalidPassword = "1234567890"

test('Scenario1: Byjus CRM Successfull Login', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(ValidUsername);
    await page.locator(password).type(Validpassword);
    await page.locator(hidepass).click();
    await page.locator(loginButton).click();
})
test('Texfields are editable or not', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    console.log("The username field is editable   " + await page.locator(email).isEditable());
    console.log("The password field is editable  " + await page.locator(password).isEditable());
    await page.screenshot({path:'ByjusScreenshots/Scr1.png'});
})

test('Forgot Password ', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(forgotPassword).click();
    await page.locator(email).type(ValidUsername);
    await page.locator(loginButton).click();

})
test.only('Forgot Password with invalid username', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(forgotPassword).click();
    await page.locator(email).type(InvalidUsername);
    await page.locator(loginButton).click();
    const errorMessage = await page.locator(usernotfound).textContent();
    await expect(errorMessage).toBe("User not found");
    await page.screenshot({path:'ByjusScreenshots/Scr2.png'});
})
test('Byjus login with invalid username and password', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(InvalidUsername);
    await page.locator(password).type(InvalidPassword);
    await page.locator(loginButton).click();
    const errorMessage = await page.locator(IncorrectErrorMessag).textContent();
    await expect(errorMessage).toBe("Incorrect username or password");
    console.log(errorMessage);
    await page.screenshot({path:'ByjusScreenshots/Scr3.png'});

})

test('Byjus login with valid username and invalid password', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(ValidUsername);
    await page.locator(password).type(InvalidPassword);
    await page.locator(loginButton).click();
    const errorMessage = await page.locator(IncorrectErrorMessag).textContent();
    await expect(errorMessage).toBe("Incorrect username or password");
    console.log(errorMessage);
    await page.screenshot({path:'ByjusScreenshots/Scr4.png'});
})

test('Byjus login with invalid username and valid password', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(InvalidUsername);
    await page.locator(password).type(Validpassword);
    await page.locator(loginButton).click();
    const errorMessage = await page.locator(IncorrectErrorMessag).textContent();
    await expect(errorMessage).toBe("Incorrect username or password");
    console.log(errorMessage);
    await page.screenshot({path:'ByjusScreenshots/Scr5.png'});
})

test('Byjus login with only entering valid password and email field is empty', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(password).type(Validpassword);
    console.log("login button is disabled  " + await page.locator(loginButton).isDisabled());
    await page.screenshot({path:'ByjusScreenshots/Scr6.png'});
})

test('Byjus login with only entering valid email and password field is empty', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(ValidUsername);
    console.log("login button is disabled  " + await page.locator(loginButton).isDisabled());
    await page.screenshot({path:'ByjusScreenshots/Scr7.png'});
})

test('Byjus login with both mail and password fileds empty', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    console.log("Login button is disabled" + await page.locator(loginButton).isDisabled());
    await page.screenshot({path:'ByjusScreenshots/Scr8.png'});
})

test('Byjus login with invalid mail id domain', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");
    await page.locator(email).type(InvalidUsername);
    await page.locator(password).type(Validpassword);
    await page.locator(loginButton).click();
    const errorMessage = await page.locator(IncorrectErrorMessag).textContent();
    await expect(errorMessage).toBe("Incorrect username or password");
    await page.screenshot({path:'ByjusScreenshots/Scr9.png'});
})

test('Login by providing the password less than 5 digits', async ({ page }) => {
    await page.goto("https://dev-leadcrm.byjusorders.com/");

    await page.locator(email).type(ValidUsername);
    const pass = "1234"
    await page.locator(password).type(pass);
    if (pass.length < 5) {
        console.log(await page.locator(loginButton).isDisabled());
        await page.locator("[class='MuiBox-root jss123 jss11']").click();
        const error = await page.locator("[id='password-helper-text']").textContent();
        await expect(error).toBe("Password must be at least 5 characters");
        await page.screenshot({path:'ByjusScreenshots/Scr10.png'});

    }
    else {
        console.log(await page.locator(loginButton).isEnabled());
        await page.screenshot({path:'ByjusScreenshots/Scr11.png'});

    }



})



