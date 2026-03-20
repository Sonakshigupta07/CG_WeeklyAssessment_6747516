import { Page } from "@playwright/test";

export class CartPage {
  constructor(public page: Page) {}

  checkoutBtn = '//a[@class="btn btn-default check_out"]';

  async proceedToPay() {
    await this.page.click(this.checkoutBtn);
  }

  async getCartProductName() {
    return await this.page.locator('.cart_description a').first().textContent();
  }

  async getCartProductPrice() {
    return await this.page.locator('.cart_price p').first().textContent();
  }

  async getCartQuantity() {
    return await this.page.locator('.cart_quantity button').first().textContent();
  }
}