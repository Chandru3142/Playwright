const {test,expect}= require("@playwright/test");

test('Zara App',async({page})=>
{
    const email="chandru531421@gmail.com";
    const password="Xpyz#2208";
    const productName="ZARA COAT 3";



    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").fill(password);
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    const prod=await page.locator("xpath=(//button[@class='btn w-10 rounded'])[1]").click();
   // await page.pause();
   // const titles= await page.locator(".card-body b").allTextContents();
//    console.log(titles);
//    const count = await products.count();
//    for(let i =0; i < count; ++i)
//    {
//    if(await products.nth(i).locator("b").textContent() === productName)
//    {
//        //add to cart
//        await products.nth(i).locator("text= Add To Cart").click();
//        break;
//     }
//    }
    await page.locator("[routerlink*='/cart']").click();
    await page.locator("div li").first(1).waitFor();
    console.log(await page.locator("h3:has-text('zara coat 3')").isVisible());
    await page.locator("text=Checkout").click();

    // Selcet country name
    await page.locator("[class='payment']").waitFor();
    const country=await page.locator("[placeholder='Select Country']").type("ind",{delay:100});
   // await page.type(country,"Ind",{delay:100});
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
    for(let i =0;i< optionsCount; ++i)
    {
       const text =  await dropdown.locator("button").nth(i).textContent();
        if(text === " India")
        {
           await dropdown.locator("button").nth(i).click();
           break;
        }
    }
    await page.locator("text=Place Order").click();
    console.log(await page.locator("[class='hero-primary']").textContent());
    const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);
//My orders page
    await page.locator("[routerlink*='myorders']").first().click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");


for(let i =0; i<await rows.count(); ++i)
{
   const rowOrderId =await rows.nth(i).locator("th").textContent();
   if (orderId.includes(rowOrderId))
   {
       await rows.nth(i).locator("button").first().click();
       break;
   }
}

await page.locator("text= Sign Out ").click();

// Add Card details
// const date=await page.locator("xpath=(//select[@class='input ddl'])[1]").click();
// await page.locator('select').first().selectOption('06');
// await page.locator('select').nth(1).selectOption('23');
// await page.locator("[class='input txt']").first().type("123");
// await page.locator("[class='input txt']").nth(1).type("abcd");







})