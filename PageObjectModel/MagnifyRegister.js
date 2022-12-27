class Magnify
{

    constructor(page)
    {
        this.page=page;
        //
     this.Register="[id='CreateBUUser']";
     this.language="select[id='LanguageId']";
    this.firstname="[id='FirstName']";
    this.lastname="[id='LastName']";
    this.username="[id='UserName']";
    this.email="[id='EmailAddress']";
    this.password="[id='Password']";
    this.ConfirmPass="[id='ConfirmPassword']";
    this.checkbox='[class="custom-label"]';
    this.captcha="[role='presentation']";
    this.submit='[id="saveRegisteredUser"]';
    this.Backtologin='[class="login-btns"]';
    }

    async Registration(fs,ls,user,emailID,pass)
    {
        //await page.goto(URL);//URL of the login page
       // await this.page.pause();
        await this.page.locator(this.Register).click();
        //await page.locator(language).click();
        //await page.locator(language).selectOption('English');
        await this.page.locator(this.firstname).waitFor();
        await this.page.locator(this.firstname).type(fs);
        await this.page.locator(this.lastname).type(ls);
        await this.page.locator(this.username).type(user);
        await this.page.locator(this.email).type(emailID)
        await this.page.locator(this.password).type(pass);
        await this.page.locator(this.ConfirmPass).type(pass);
        //await page.locator(checkbox).waitFor()
        await this.page.locator(this.checkbox).click();
        await this.page.locator(this.captcha).click();
        await this.page.locator(this.submit).click();
        await this.page.locator(this.Backtologin).waitFor();
        await this.page.locator(this.Backtologins).click();
    }
    
}module.exports={Magnify};