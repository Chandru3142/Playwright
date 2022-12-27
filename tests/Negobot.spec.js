const {test}=require("@playwright/test")

test('Negobot procurement admin login',async({page})=>
{
    await page.goto("https://dev.app.negobot.co/");
    await page.pause();
    await page.locator("[id='email']").type("nbhardwares@mailinator.com");
    await page.locator("[id='password']").type("123456");
    await page.locator("[type='submit']").click();

    // to create RFQ
    await page.locator("xpath=//a[@href='/rfq-manager']").click();
    //await page.getByRole('link', { name: 'icon: file RFQ manager' }).click();
    await page.locator("xpath=//li[@rowkey='6f5d0852d2fb490296b7cde970d79d58']").click();
    await page.locator("xpath=//button[@type='button']").click();
    await page.locator("xpath=(//span[@class='ant-select-arrow'])[2]").click();
    await page.getByRole('option', { name: 'Chair' }).click();
    await page.locator("xpath=//div[@style='padding-right: 24px;']").click();
    await page.locator("xpath=//input[@id='baseline_quantity']").type("100");
    await page.locator("//span[text()='Next']").waitFor();
    await page.locator("//span[text()='Next']").click();
    await page.locator("xpath=//input[@id='parameter.rfq_target_saving']").type("10");
    await page.locator("//span[text()='Next']").waitFor();
    await page.locator("//span[text()='Next']").click();
    await page.locator("xpath=(//input[@placeholder='Select date'])[1]").click();
    await page.locator("//div[text()='23']").click();
    await page.locator("//a[text()='Ok']").click();
    //console.log(Date());
    
   
    await page.locator("xpath=(//input[@placeholder='Select date'])[2]").click();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").clear();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").type("2022-12-23 15:00");
    await page.locator("//a[text()='Ok']").click();

    await page.locator("xpath=(//input[@placeholder='Select date'])[3]").click();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").clear();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").type("2022-12-23 15:10");
    await page.locator("//a[text()='Ok']").click();

    await page.locator("xpath=(//input[@placeholder='Select date'])[4]").click();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").clear();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").type("2022-12-23 15:20");
    await page.locator("//a[text()='Ok']").click();

    await page.locator("xpath=(//input[@placeholder='Select date'])[5]").click();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").clear();
    await page.locator("xpath=//input[@class='ant-calendar-input ']").type("2022-12-23 15:30");
    await page.locator("//a[text()='Ok']").click();
    
    //await page.locator("//a[text()='Ok']").click();

    await page.locator("(//span[text()='Next'])[2]").click();

    await page.locator("xpath=//input[@id='f953de6bc5004d3d3c07d19656a05725']").click();
   // await page.locator("xpath=(//span[@class='ant-checkbox-inner'])[3]").click();
    await page.locator("xpath=//input[@id='14aabb6aa95b345368197eb2e588900f']").click();
    await page.locator("//span[text()='Save & Review']").click();
    await page.locator("//span[text()='Proceed']").click();
    //await page.locator("//span[text()='Save & Review']").click();
    await page.locator("//span[text()='Publish RFQ']").click();
})
