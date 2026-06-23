import { Locator, Page } from "@playwright/test";

export class LoginPage {
    username : Locator;
    password : Locator;
    loginButton : Locator;
    error : Locator;

    constructor(page : Page){
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.error = page.locator('[data-test="error"]');
    }

    async login(username : string , password : string){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginButton.click()
    }

}