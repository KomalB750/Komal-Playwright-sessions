import { Locator , Page} from "@playwright/test";

export class ProductPage{
    username : Locator;
    password : Locator;
    loginButton : Locator;
    products : Locator ;
    productName : Locator ;
    prices : Locator ;
    sort : Locator ;

    constructor(page : Page){
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.products = page.locator('[data-test="inventory-item"]');
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.prices = page.locator('[data-test="inventory-item-price"]');
        this.sort = page.locator('[data-test="product-sort-container"]');
    }

    async login(username : string , password : string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }
}