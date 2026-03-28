import { Page } from "@playwright/test";

export class DeleteAccount {
  constructor(public page: Page) {}

  async deleteAccount() {
    await this.page.click('text=Delete Account');
    await this.page.click('text=Continue');
  }
}