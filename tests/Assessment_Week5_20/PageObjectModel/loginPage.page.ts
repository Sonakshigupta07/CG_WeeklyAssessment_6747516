import {Page} from "@playwright/test"

export class LoginPage{
    constructor(public page : Page){}

    async login(user){
    await this.page.fill('input[data-qa="login-email"]', user.email);
    await this.page.fill('input[data-qa="login-password"]', user.password);
    await this.page.click('button[data-qa="login-button"]');
    }
 

}