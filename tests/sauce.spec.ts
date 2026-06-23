import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";

let loginPage : LoginPage
let productPage : ProductPage

test.describe("Login Tests", async () => {

  test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");
  })


  test("should display an error message when logging in with empty credentials", async ({
    page,
  }) => {
    
    await loginPage.loginButton.click();

    await expect(loginPage.error).toBeVisible();
    await expect(loginPage.error).toHaveText("Epic sadface: Username is required");

    await page.waitForTimeout(3000);
  });

  test("should display an error message when logging in with an invalid username", async ({
    page,
  }) => {

    await loginPage.login("komal","secret_sauce");

    await expect(loginPage.error).toBeVisible;
    await expect(loginPage.error).toHaveText("Epic sadface: Username and password do not match any user in this service");

    await page.waitForTimeout(3000);
  });

  test("should successfully login with valid credentials", async ({ page }) => {
  
    const dataList = page.locator('[data-test="inventory-container"]');

    await loginPage.login("standard_user","secret_sauce");
    // await loginPage.loginButton.click();

    const url = await page.url();

    await expect(dataList).toBeVisible();

    await page.waitForTimeout(3000);

    await expect(url).toBe("https://www.saucedemo.com/inventory.html");
  });
});

// Products Page
// should display six products after successful login
// should display the correct product name and price for Sauce Labs Backpack
// should allow users to sort products from A to Z
// should allow users to sort products from Z to A
// should allow users to sort products by price low to high
// should allow users to sort products by price high to low

test.describe("Products Page", async () => {

    test.beforeEach(async ({page})=>{
      productPage = new ProductPage(page);

      await page.goto("https://www.saucedemo.com/");
    })

  test("should display six products after successful login", async ({
    page,
  }) => {

    
    await productPage.login("standard_user","secret_sauce");

    await expect(productPage.products).toHaveCount(6);
  });

  test("should display the correct product name and price for Sauce Labs Backpack", async ({
    page,
  }) => {

    await productPage.login("standard_user","secret_sauce");
    await page.waitForTimeout(3000);

    await expect(productPage.productName.first()).toBeVisible;
    await expect(productPage.productName.first()).toHaveText("Sauce Labs Backpack");

    await expect(productPage.prices.first()).toHaveText("$29.99");
  });

  test("should allow users to sort products from A to Z", async ({
    page,
  }) => {

    await productPage.login("standard_user","secret_sauce");

    await page.waitForTimeout(3000);
    await productPage.sort.selectOption('az');

    const text = await productPage.productName.allTextContents()
    console.log(text)

    await page.waitForTimeout(3000);

    const correctArray = [...text].sort( (a,b)=> a.localeCompare(b) )

    expect(text).toStrictEqual(correctArray)


  });
  test("should allow users to sort products from Z to A", async ({page})=>{

    await productPage.login("standard_user","secret_sauce");
    
    await page.waitForTimeout(3000);
    await productPage.sort.selectOption('za');

    const text = await productPage.productName.allTextContents()
    console.log(text)

    await page.waitForTimeout(3000);

    const correctArray = [...text].sort( (a,b)=> b.localeCompare(a) )

    expect(text).toStrictEqual(correctArray)
  })

  test("should allow users to sort products by price low to high", async ({page})=>{

    await productPage.login("standard_user","secret_sauce");
    
    await page.waitForTimeout(3000);
    await productPage.sort.selectOption('lohi');

    const actualPrices = await productPage.prices.allTextContents()
    console.log(actualPrices)

    await page.waitForTimeout(3000);

    const sortedPrices = [...actualPrices].sort((a, b) => a - b)

    expect(actualPrices).toStrictEqual(sortedPrices)

  })

  test("should allow users to sort products by price high to low",async({page})=>{

    await productPage.login("standard_user","secret_sauce");

    await page.waitForTimeout(3000);
    await productPage.sort.selectOption('hilo');

    const actualPrices = await productPage.prices.allTextContents()
    console.log(actualPrices)

    await page.waitForTimeout(3000);

    const sortedPrices = [...actualPrices].sort((a, b) => b - a)

    expect(actualPrices).toStrictEqual(sortedPrices)
  })
});
