const {test}= require('@playwright/test');


test('login to Gmail', async({browser})=>
{
    const context=await browser.newContext();//we can provide saved cookies onside the context method
    const page = await context.newPage();//newPage will load new empty page
    await page.goto("https://accounts.google.com");//navigate to the specified url
    
    await page.locator('input[type="email"]').type("chandru531421@gmail.com");
    await page.locator('div[id="identifierNext"]').click();
    await page.locator('input[type="password"]').type("1234abcd");
    await page.locator('div[id="passwordNext"]').click();
    
});