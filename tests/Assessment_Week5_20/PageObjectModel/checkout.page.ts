import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(public page: Page) {}

  placeOrderBtn = 'text=Place Order';
  payBtn = 'button[data-qa="pay-button"]';

  async placeOrder(user) {

    await this.page.click(this.placeOrderBtn);

    await this.page.fill('input[data-qa="name-on-card"]', user.payment.cardName);
    await this.page.fill('input[data-qa="card-number"]', user.payment.cardNumber);
    await this.page.fill('input[data-qa="cvc"]', user.payment.cvc);
    await this.page.fill('input[data-qa="expiry-month"]', user.payment.expiryMonth);
    await this.page.fill('input[data-qa="expiry-year"]', user.payment.expiryYear);
    
    await this.page.click(this.payBtn);
  }
}