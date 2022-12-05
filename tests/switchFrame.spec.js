const {test,expect}=require("@playwright/test")

test.only('swithcing between windows', async({page})=>
{
    await page.goto("https://www.rahulshettyacademy.com/AutomationPractice/");

const [page1] = await Promise.all([
    page.waitForEvent('popup'),
   // page.getByRole('button', { name: 'Open Window' }).click()
   page.locator("xpath=//button[@id='openwindow']").click()
  ]);
  await page1.locator(".collapse.navbar-collapse > ul > li:nth-of-type(2) > a").click();
  //await page1.getByRole('link', { name: 'Home' }).click();
  await expect(page1).toHaveURL('https://www.rahulshettyacademy.com/');
})

test('Switch between tabs', async ({ page }) => {
    await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
     // page.getByRole('link', { name: 'Open Tab' }).click()
     page.locator("xpath=//a[@id='opentab']").click()
    ]);
    //await page1.getByRole('link', { name: 'Courses' }).click();
    await page1.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck =await page1.locator(".text h2").textContent();
    //await expect(page1).toHaveURL('https://courses.rahulshettyacademy.com/courses');
    console.log(textCheck);
  });

test('switching between frames', async ({ page }) => {
  await page.goto('https://www.rahulshettyacademy.com/AutomationPractice/');
//   await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'NEW Learning paths' }).click();
//   await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'Mentorship' }).click();
//   await page.getByPlaceholder('Enter Your Name').click();
//   await page.getByPlaceholder('Enter Your Name').fill('abc');
await page.pause();

  const header=page.frameLocator("id#courses-iframe").locator(".text h2").textContent();
    console.log(header);
});

test('switching between frames222', async ({ page }) => {
    await page.goto('https://londonfreelancer.org/course/frames/index.html');
    // await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'NEW Learning paths' }).click();
    // await page.frameLocator('iframe[name="iframe-name"]').getByRole('link', { name: 'Mentorship' }).click();
    // await page.getByPlaceholder('Enter Your Name').click();
    // await page.getByPlaceholder('Enter Your Name').fill('abc');
    const header=page.frameLocator("frame[name='main']").locator("h2").textContent();
    console.log(header);
  });