const { test, expect } = require("@playwright/test")
const loginUrl = 'https://bromley-dev.optionsplay.com/login';
const loginEmbeddedurl = 'https://bromley-dev.optionsplay.com/portfolio';
const userName = 'sangam.goyal@goavega.com';
const invalidUserName = 'prashantk.testing@gmail.com';
const invalidPassword = 'Goavega1@#';
const passWord = 'Sgg1234';

let selectors =
{
    //URL: 'https://bromley-dev.optionsplay.com/login',
    //URL1: 'https://bromley-dev.optionsplay.com/portfolio',
    usernameSelector: '//input[@name="Login"]',
    passwordSelector: '//input[@name="Password"]',
    // username: 'sangam.goyal@goavega.com',
    // password: 'Sgg1234',
    loginSelector: '//span[text()="Login"]',
    missingUserNameMessageSelector: '//p[@id="mui-2-helper-text" or text() = "Username is required"]',
    missingPasswordMessageSelector: '//p[@id="mui-3-helper-text" or text() = "Password is required"]',
    userNameIsInvalidMessageSelector: '//p[@id="mui-2-helper-text" or text() = "Username is Invalid"]',
    passwordIsInvalidMessageSelector: '//p[@id="mui-3-helper-text" or text() = "Password is Invalid"]',
    invalidUsernamePasswordMessageSelector: '//p[text() = "You have entered an invalid email or password."]',
    tradeideasSelector: '//div[@id="js-open-trade-ideas"]',
    tradeideastablinkSelector: '//button[@role="tab"]//span[text() = "Trade Ideas"]',
}

jest.setTimeout(10000 * 10000);

describe('OP > Login > Login Scenarios', () => {
    beforeAll(async () => {
        context = await global.browser.newContext();
    })

    test.only('successful login', async ({page}) => 
    {
        await page.goto(loginUrl)
        //await page.goto(loginEmbeddedurl)
        await page.fill(selectors.usernameSelector, userName);
        await page.fill(selectors.passwordSelector, passWord);
        await page.click(selectors.loginSelector);
        await page.locator(selectors.tradeideasSelector).waitFor();
        await page.click(selectors.tradeideasSelector);
        await page.locator(selectors.tradeideastablinkSelector).waitFor();
    })

    test('missing username and password login', async () => {
        await page.goto(loginUrl)
        await page.fill(selectors.usernameSelector, '');
        await page.fill(selectors.passwordSelector, '');
        await page.click(selectors.loginSelector);
        userNameMissing = await page.innerText(selectors.missingUserNameMessageSelector);
        await expect(userNameMissing).toBe("Username is required");
        passwordMissing = await page.innerText(selectors.missingPasswordMessageSelector);
        await expect(passwordMissing).toBe("Password is required");
        expect(await page.isVisible(selectors.loginSelector));
    })

    test('login with missing username and valid password', async () => {
        await page.goto(loginUrl)
        await page.fill(selectors.usernameSelector, '');
        await page.fill(selectors.passwordSelector, passWord);
        await page.click(selectors.loginSelector);
        userNameMissing = await page.innerText(selectors.missingUserNameMessageSelector);
        await expect(userNameMissing).toBe("Username is required");
        expect(await page.isVisible(selectors.loginSelector));
    })

    test('login with missing password and valid username', async () => {
        await page.goto(loginUrl)
        await page.fill(selectors.usernameSelector, userName);
        await page.fill(selectors.passwordSelector, '');
        await page.click(selectors.loginSelector);
        passwordMissing = await page.innerText(selectors.missingPasswordMessageSelector);
        await expect(passwordMissing).toBe("Password is required");
        expect(await page.isVisible(selectors.loginSelector));
    })

    test('login with invalid username and missing password', async () => {
        await page.goto(loginUrl)
        await page.fill(selectors.usernameSelector, invalidUserName);
        await page.fill(selectors.passwordSelector, '');
        await page.click(selectors.loginSelector);
        userNameInvalid = await page.innerText(selectors.userNameIsInvalidMessageSelector);
        await expect(userNameInvalid).toBe("Username is Invalid");
        passwordMissing = await page.innerText(selectors.missingPasswordMessageSelector);
        await expect(passwordMissing).toBe("Password is required");
        expect(await page.isVisible(selectors.loginSelector));
    })

    test('login with invalid username and password', async () => {
        await page.goto(loginUrl)
        await page.fill(selectors.usernameSelector, invalidUserName);
        await page.fill(selectors.passwordSelector, invalidPassword);
        await page.click(selectors.loginSelector);
        invalidUsernamePassword = await page.innerText(selectors.invalidUsernamePasswordMessageSelector);
        await expect(invalidUsernamePassword).toBe("You have entered an invalid email or password.");
        /*passwordInvalid = await page.innerText(selectors.passwordIsInvalidMessageSelector);
        await expect(passwordInvalid).toBe("Password is Invalid");*/
        expect(await page.isVisible(selectors.loginSelector));
    })
})
