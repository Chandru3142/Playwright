const {test, expect} = require('@playwright/test');// importing the playwrite libraries

// to launch browser using context method
test('Login test with context method', async({browser})=>     //browser is a inbuilt method which will helps to load browser
{
    const context=await browser.newContext();//we can provide saved cookies onside the context method
    const page = await context.newPage();//newPage will load new empty page
    await page.goto("https://www.amazon.in");//navigate to the specified url
});

test('Login test using page', async({page})=>
{
    await page.goto("https://www.google.com");// launches the browser
    await page.title();// gives the title of the page
    console.log(page.title());//prints the title of the page
    await expect(page).toHaveTitle("Google");
}
)


