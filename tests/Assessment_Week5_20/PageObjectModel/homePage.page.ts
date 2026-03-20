import {Page} from "@playwright/test"

export class HomePage{
    constructor(public page : Page){}

    submitBtn = '//button[@id="submit_search"]';

    async searchProduct(user){
        await this.page.fill('//input[@id="search_product"]',user.product)
        await this.page.click(this.submitBtn);
    }
}