const {test}=require("@playwright/test")
const { Magnify } = require("../../PageObjectModel/MagnifyRegister")
//JSON>>string>>javascript
const dataset=JSON.parse(JSON.stringify(require("../../Utils/MagnifyTestData.json")))
// for(const data of dataset)
// {
test('Magnify Registration for',async({page})=>
{
   await page.goto("https://rohitk.learn-wize.com/Account/Login");
    const Login=new Magnify(page);
    await Login.Registration(dataset.fs,dataset.ls,dataset.user,dataset.emailID,dataset.pass);
// console.log(dataset);
})//}