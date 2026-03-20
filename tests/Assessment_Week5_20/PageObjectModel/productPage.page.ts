import { Page } from '@playwright/test';

export class ProductPage {
  constructor(public page: Page) {}

  productCard = '.product-image-wrapper';
  viewCartBtn = 'text=View Cart';

  async addProductToCart() {
    const product = this.page.locator(this.productCard).first();
    const addBtn = product.locator('a.add-to-cart').first();

    await product.hover();
    await addBtn.click({ force: true });

    await this.page.click(this.viewCartBtn);
  }

  async getFirstProductName() {
    return await this.page.locator('.productinfo p').first().textContent();
  }

  async getFirstProductPrice() {
    return await this.page.locator('.productinfo h2').first().textContent();
  }

  async addFirstProductToCart() {
    await this.addProductToCart(); 
  }
}