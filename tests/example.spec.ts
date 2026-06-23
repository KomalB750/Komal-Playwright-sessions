// import { test, expect } from '@playwright/test';

// // test('has title', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Expect a title "to contain" a substring.
// //   await expect(page).toHaveTitle(/Playwright/);
// // });

// // test('get started link', async ({ page }) => {
// //   await page.goto('https://playwright.dev/');

// //   // Click the get started link.
// //   await page.getByRole('link', { name: 'Get started' }).click();

// //   // Expects page to have a heading with the name of Installation.
// //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// // });


// // test("", async({page}) => {

// // await page.setViewportSize({width : 500, height : 500})
// // await page.goto("https://demoqa.com/text-box")
// // await page.waitForTimeout(1000)

// // await page.reload()
// // await page.waitForTimeout(1000)

// // await page.screenshot({ path : './Screenshots/image.png'})
// // await page.waitForTimeout(1000)

// // const title = await page.title()
// // const url = await page.url()
// // const vp = await page.setViewportSize

// // console.log(title)
// // console.log(url)

// // })

// // test("get", async({page}) => {

// // await page.goto("https://playwright.dev/docs/api/class-page#page-viewport-size")
// // await page.waitForTimeout(3000)

// // const imgLoc = await page.getByAltText('logo')alt = key
// // const url = await imgLoc.getAttribute('src')

// // const githubIcon = await page.getByLabel('GitHub repository')when key = aria-label then we used .getByLabel()method
// // const githubURL = await githubIcon.getAttribute('href')

// // console.log(url)
// // console.log(githubURL)

// // await page.goto("https://demoqa.com/text-box")
// // await page.waitForTimeout(3000)

// // const emailInput = await page.getByPlaceholder("name@example.com")
// // await emailInput.fill("komal@gmail.com")
// // await page.waitForTimeout(3000)

// // const headingLoc = await page.getByRole('heading',{ name : "Text Box"}).isVisible()
// // const buttonLoc = await page.getByRole('button',{ name : "Submit"}).isVisible()

// // console.log(headingLoc)
// // console.log(buttonLoc)

// // })
// test("actions", async({page}) => {

// // await page.goto("https://demoqa.com/login")
// // await page.waitForTimeout(3000)

// // const loc1 = await page.getByPlaceholder('userName')
// // console.log(await loc1.count())

// // const loc2 = await page.locator("input[id = 'userName']")
// // await loc2.fill("komalBaseshankar")
// // await page.waitForTimeout(3000)

// // const locpassword = await page.locator("input[id = 'password']")
// // await locpassword.fill("komal@123")
// // await page.waitForTimeout(3000)

// await page.goto("https://demoqa.com/automation-practice-form")
// await page.waitForTimeout(3000)

// // const texts = await page.locator("Label").allTextContents()
// // console.log(texts)

// // const text = await page.locator("Label").textContent()
// // console.log(text)

// // const label = await page.locator("Label[id = 'userEmail-label']").textContent()
// // console.log(label)

// const nameLoc = await page.getByPlaceholder("First name")
// await nameLoc.fill("Komal")
// await page.waitForTimeout(3000)

// const value = await nameLoc.inputValue()
// console.log(value)

// await nameLoc.clear()
// await page.waitForTimeout(3000)

// const labels = await page.locator('label')
// const labelsText = await labels.allTextContents()
// const text1 = await labels.first().textContent()
// const textlast = await labels.last().textContent()
// const text2 = await labels.nth(1).textContent()

// console.log(labels)
// console.log(labelsText)
// console.log(text1)
// console.log(textlast)
// console.log(text2)

// // const btn = await page.locator("button [id = 'submit']")
// const checkbox = await page.locator("input [id = 'hobbies-checkbox-1']")
// // await btn.click()
// // await btn.dblclick()

// await checkbox.check()
// await page.waitForTimeout(3000)

// await checkbox.uncheck()

// })