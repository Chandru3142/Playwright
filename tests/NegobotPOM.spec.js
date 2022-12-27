const {test}=require("@playwright/test");
const {Negobot}=require("../PageObjectModel/Negobot");

test('Negot', async({page})=>
{
   // await page.goto("https://dev.app.negobot.co/")
   // await page.pause();

    const Nego=new Negobot(page);
    await Nego.Login();
    await Nego.goTORfqManager();
    await Nego.RFQCreation();
    await Nego.RFQ_2nd_step();
    await Nego.RFQ_3rd_step();
    await Nego.RFQ_4th_step();
})