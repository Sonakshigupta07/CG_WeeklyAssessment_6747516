import { Page } from '@playwright/test';

export class MultipleProductPage {

  constructor(public page: Page) {}

  productCard = '.product-image-wrapper';
  continueShopping = 'text=Continue Shopping';
  viewCart = 'text=View Cart';

  async addMultipleProducts(count: number) {

    for (let i = 0; i < count; i++) {

      const product = this.page.locator(this.productCard).nth(i);
      const addBtn = product.locator('a.add-to-cart').first();

      await product.hover();
      await addBtn.scrollIntoViewIfNeeded();
      await addBtn.waitFor({ state: 'visible' });
      await addBtn.click({ force: true });

      if (i < count - 1) {
        await this.page.locator(this.continueShopping).click();
      } else {
        await this.page.locator(this.viewCart).click();
      }
    }
  }
}