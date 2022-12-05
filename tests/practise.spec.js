const{test,expect}=require('@playwright/test')

test('validations test', async({page})=>
{
    await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");
   // await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   // await page.goBack();//navigate back
    //await page.goForward();//navigate forward
    //await page.locator("text=Element Displayed Example").waitFor();
    //text box hide and show
//    console.log( await page.locator('#displayed-text').isVisible());
//    await page.locator("#hide-textbox").click();
//    console.log( await page.locator('#displayed-text').isHidden());
//    await page.locator('#show-textbox').click();
//    console.log( await page.locator('#displayed-text').isVisible());
//Radio button
//await page.pause();
   // await page.locator("[value='radio1'] ").click();
   // await page.locator("[value='radio2'] ").click();
   // await page.locator("[value='radio3']").click();

//     //alert
//     await page.pause();
//     page.on('dialog',dialog=>dialog.dismiss());
//     await page.locator("#confirmbtn").click();
//     await page.locator("#alertbtn").click();
//     page.on('dialog',dialog=>dialog.accept());

//         // Mouse Over
         // await page.locator("#mousehover").hover();
    //dropdown
   
//    await page.locator("select[id='dropdown-class-example']").selectOption('option2')
//    await page.locator('select[name="dropdown-class-example"]').selectOption('option3');
//    await page.locator('select[name="dropdown-class-example"]').selectOption('option1');
//    await page.locator('select[name="dropdown-class-example"]').selectOption({index:0});
    // checkbox
    // await page.locator("#checkBoxOption1").check();
    // await page.check("#checkBoxOption2");
    // await page.locator("#checkBoxOption3").click();

    // await page.locator("#checkBoxOption1").uncheck();
    // await page.uncheck("#checkBoxOption2");
    // await page.locator("#checkBoxOption3").click();

    //Switch between windows
   // await page.pause();
    // await page.locator('#openwindow').click();
    // await newpage.getByRole('link', { name: 'Home' }).click();

    // Switching betwen tabs
    // await page.pause();
    // await page.locator("[class='btn-style class1 class2']").click();
    // await Promise.all([
    //     page.waitForNavigation(),
    // ])
   // switching between frames
//     const frame1= page.frameLocator("id#courses-iframe");
//    // await frame1.click("li a[href*='learning']:visible");
//     await frame1.locator("li a[href*='learning']").first().click();
//     console.log(await frame1.locator(" [class='inner-box'] h1").textContent());

//     const framesPage = page.frameLocator("id#courses-iframe");
//     await framesPage.locator("li a[href*='lifetime-access']:visible").click();
//    // await framesPage.click();
//     const textCheck =await framesPage.locator(".text h2").textContent();
//     console.log(textCheck.split(" ")[1]);
// await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'NEW Learning paths' }).click();
// await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'NEW All Access plan' }).click()

});

test('screenshot',async({page})=>
{
   await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");
    //text box hide and show
   console.log( await page.locator('#displayed-text').isVisible());
   await page.locator("#hide-textbox").click();
   await page.screenshot({path:'Scr.png'});
   console.log( await page.locator('#displayed-text').isHidden());
   await page.locator('#show-textbox').click();
   console.log( await page.locator('#displayed-text').isVisible());
})

test.only('visual screenshot comparison',async({page})=>
{
   await page.goto("https://www.google.co.in/");
   expect(await page.screenshot()).toMatchSnapshot("compare.png");
})