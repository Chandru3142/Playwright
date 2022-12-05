const {test}=require("@playwright/test")
const { Magnify } = require("../PageObjectModel/MagnifyLogin")
//const {data}=require("../Utils/MagnifyTestData.json")
//const dataset=JSON.parse(JSON.stringify(data))
const dataset=JSON.parse(JSON.stringify(require("../Utils/MagnifyTestData.json")));

test('Magnify Registration',async({page})=>
{
   await page.goto("https://rohitk.learn-wize.com/Account/Login");
    const Login=new Magnify(page);
    await Login.Registration(dataset.fs,dataset.ls,dataset.user,dataset.emailID,dataset.pass);
})
