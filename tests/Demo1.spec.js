const {test, selectors, expect}= require('@playwright/test')

const loginURL='https://rahulshettyacademy.com/loginpagePractise/';
const username='rahulshettyacademy'
const password='learning'
let Selectors={
    UserLocate:'input#username',
    PassLocate:'input[type="password"]',
    RadioButton:'.radiotextsty',
    popUp:'#okayBtn',
    dropdown:'.form-control',
    submitBut:'input[type="submit"]',
    link:'[href*="document"]'
}
test('login to rrahul shetty academy', async ({page})=>
{
//     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
//     const username=await page.locator('input#username');
//     await page.username.type("rahulshettyacademy");
//     await page.locator('input[type="password"]').type("learning");

//     await page.locator('.radiotextsty').last().click();
//     await page.locator('#okayBtn').click();
//     await page.locator('.form-control').selectOption("teach");
//     await page.pause();
//     await page.locator('input[type="submit"]').click();
//     console.log(await page.locator('p[class="error"]').textContent()) ;
//    console.log(await page.locator(".card-body a").first().textContent());
//     console.log(await page.locator(".card-body a").nth(2).textContent());
//    console.log(await cardTitles.allTextContents());

   await page.goto(loginURL);
   await page.fill(Selectors.UserLocate,username);
   await page.fill(Selectors.PassLocate,password);
   await page.locator('.radiotextsty').last().click();
   await page.locator('#okayBtn').click();
   const drop= await page.locator('select.form-control');
        await drop.selectOption("teach");
   console.log(await page.locator('.radiotextsty').last().isChecked());
   await expect(page.locator('.radiotextsty').last()).toBeChecked();
   const Dlink= page.locator("[href*='document']");
   await expect(Dlink).toHaveAttribute("class","blinkingText");
  // await page.click(Selectors.submitBut);
//await page.locator('input[type="submit"]').click();
    const allTitles= await page.locator('.card-body a').allTextContents();
    console.log(allTitles);


}
)

//const {chromium}= require("playwright");
 

test.only('Check box test', async({page})=>
{   //const browser= await chromium.launch({headless:false});
    //const context=await browser.newContext();
    //const page =await context.newPage();
   // const checkbox=page.locator('label>input[id="isAgeSelected"]');
    await page.goto("https://demo.seleniumeasy.com/basic-checkbox-demo.html");
    //await page.locator('label>input[id="isAgeSelected"]').click();
   // await page.locator('label>input[id="isAgeSelected"]').check();
    //await page.check('label>input[id="isAgeSelected"]');
//     const checkbox=page.locator('label>input[id="isAgeSelected"]');
//     await page.click('label>input[id="isAgeSelected"]');
//    console.log(await page.locator('div[id="txtAge"]').textContent());
//     //await page.textContent("div[style*='block']");
//     await expect(page.locator('div[id="txtAge"]')).toContainText('Success');
//     console.log("The checkbox is checked successfully");
//     //await page.locator('label>input[id="isAgeSelected"]').uncheck(); 
//     //await page.uncheck('label>input[id="isAgeSelected"]');
//     await page.uncheck('label>input[id="isAgeSelected"]');
//     console.log("The checkbox is unchecked successfully");
await page.getByLabel('Option 1').check();
console.log(await page.getByLabel('Option 1').isChecked());
//await page.getByLabel('Option 2').isChecked();
await page.locator('div:nth-of-type(2) > label > .cb1-element').check();
//await page.getByLabel('Option 3').check();
await page.locator('div:nth-of-type(3) > label > .cb1-element').check();
await page.getByLabel('Option 4').check();


await page.getByLabel('Option 2').uncheck();
await page.getByLabel('Option 4').uncheck();
});