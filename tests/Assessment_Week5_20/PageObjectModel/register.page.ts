import {Page} from "@playwright/test"

export class RegisterPage{
    constructor(public page: Page){}
 
   async register(user) {
    
    await this.page.click('//button[text()="Signup"]')
    await this.page.fill('input[data-qa="signup-name"]', user.name);
    await this.page.fill('input[data-qa="signup-email"]', user.email);
    await this.page.click('button[data-qa="signup-button"]');

      if (user.title === 'Mr') {
      await this.page.check('#id_gender1');
    } else {
      await this.page.check('#id_gender2');
    }

    await this.page.fill('//input[@id="password"]', user.password);
    await this.page.selectOption('//select[@id="days"]',user.address.day);
    await this.page.selectOption('//select[@id="months"]',user.address.month);
    await this.page.selectOption('//select[@id="years"]',user.address.year);

    await this.page.fill('#first_name', user.address.firstName);
    await this.page.fill('#last_name', user.address.lastName);
    await this.page.fill('#company', user.address.company);
    await this.page.fill('#address1', user.address.address1);
    await this.page.fill('#address2', user.address.address2);

    await this.page.selectOption('#country', user.address.country);

    await this.page.fill('#state', user.address.state);
    await this.page.fill('#city', user.address.city);
    await this.page.fill('#zipcode', user.address.zipcode);
    await this.page.fill('#mobile_number', user.address.mobile);

    // await this.page.click('//button[text()="Create Account"]');
    await this.page.click('//a[text()="Continue"]');
  }
}