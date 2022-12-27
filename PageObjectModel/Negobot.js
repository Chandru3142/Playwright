class Negobot {

    constructor(page) {
        this.page = page;
        this.username = "[id='email']";
        this.password = "[id='password']";
        this.loginBtn = "[type='submit']";
        this.RFQManager = "xpath=//a[@href='/rfq-manager']";
        this.category = "xpath=//li[@rowkey='6f5d0852d2fb490296b7cde970d79d58']";
        this.createRFQBtn = "xpath=//button[@type='button']";
        this.PrdouctCategory = "xpath=(//span[@class='ant-select-arrow'])[2]";
        this.Quantity = "xpath=//div[@style='padding-right: 24px;']";
        this.EnterQuantity = "xpath=//input[@id='baseline_quantity']";
        this.NextBtn = "//span[text()='Next']";
        this.OfferPercentage = "xpath=//input[@id='parameter.rfq_target_saving']";
        this.SelectDate1 = "xpath=(//input[@placeholder='Select date'])[1]";
        this.Date = "//div[text()='23']";
        this.OK = "//a[text()='Ok']";
        this.SelectDate2 = "xpath=(//input[@placeholder='Select date'])[2]";
        this.enterDate = "xpath=//input[@class='ant-calendar-input ']";
        this.SelectDate3 = "xpath=(//input[@placeholder='Select date'])[3]";
        this.SelectDate4 = "xpath=(//input[@placeholder='Select date'])[4]";
        this.SelectDate5 = "xpath=(//input[@placeholder='Select date'])[5]";
        this.nextBtn2 = "(//span[text()='Next'])[2]";
        this.Supplier1 = "xpath=//input[@id='f953de6bc5004d3d3c07d19656a05725']";
        this.Supplier2 = "xpath=//input[@id='14aabb6aa95b345368197eb2e588900f']";
        this.SaveBtn = "//span[text()='Save & Review']";
        this.ProceedBtn = "//span[text()='Proceed']";
        this.PublishRFQBtn = "//span[text()='Publish RFQ']";
    }

    async Login() {
        await this.page.goto("https://dev.app.negobot.co/")
        await this.page.locator(this.username).type("nbhardwares@mailinator.com");
        await this.page.locator(this.password).type("123456");
        await this.page.locator(this.loginBtn).click();
    }

    async goTORfqManager() {
        await this.page.locator(this.RFQManager).click();
        await this.page.locator(this.category).click();
    }
    async RFQCreation()
    {
        await this.page.locator(this.createRFQBtn).click();
        await this.page.locator(this.PrdouctCategory).click();
        await this.page.getByRole('option', { name: 'Chair' }).click();
        await this.page.locator(this.Quantity).click();
        await this.page.locator(this.EnterQuantity).type("100");
        await this.page.locator(this.NextBtn);
    }
    async RFQ_2nd_step()
    {
        await this.page.locator(this.OfferPercentage).type("10");
        await this.page.locator(this.NextBtn);
    }
    async RFQ_3rd_step()
    {
        await this.page.locator(this.SelectDate1).click();
        await this.page.locator(this.Date).click();
        await this.page.locator(this.OK);

        await this.page.locator(this.SelectDate2).click();
        await this.page.locator(this.SelectDate2).click();
        await this.page.locator(this.enterDate).clear();
        await this.page.locator(this.enterDate).type("2022-12-23 17:00");
        await this.page.locator(this.OK);

        await this.page.locator(this.SelectDate3).click();
        await this.page.locator(this.SelectDate3).click();
        await this.page.locator(this.enterDate).clear();
        await this.page.locator(this.enterDate).type("2022-12-23 17:10");
        await this.page.locator(this.OK);

        await this.page.locator(this.SelectDate4).click();
        await this.page.locator(this.SelectDate4).click();
        await this.page.locator(this.enterDate).clear();
        await this.page.locator(this.enterDate).type("2022-12-23 17:20");
        await this.page.locator(this.OK);

        await this.page.locator(this.SelectDate5).click();
        await this.page.locator(this.SelectDate5).click();
        await this.page.locator(this.enterDate).clear();
        await this.page.locator(this.enterDate).type("2022-12-23 17:30");
        await this.page.locator(this.OK);

        await this.page.locator(this.nextBtn2).click();
    }
    async RFQ_4th_step()
    {
        await this.page.locator(this.Supplier1).click();
        await this.page.locator(this.Supplier2).click();
        await this.page.locator(this.SaveBtn).click();
        await this.page.locator(this.ProceedBtn).click();
        await this.page.locator(this.PublishRFQBtn).click();
    }


}
module.exports = { Negobot };