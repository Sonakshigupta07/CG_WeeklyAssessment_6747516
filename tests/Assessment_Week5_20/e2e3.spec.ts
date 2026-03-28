import { test, expect } from "@playwright/test";
import user from "./utilities/user.json";

import { RegisterPage } from "./PageObjectModel/register.page";
import { ProductPage } from "./PageObjectModel/productPage.page";
import { CartPage } from "./PageObjectModel/cartPage.page";
import { DeleteAccount } from "./PageObjectModel/deleteAccount.page";
import { LoginPage } from "./PageObjectModel/loginPage.page.ts"

test("E2E-3", async ({ page }) => {

  const register = new RegisterPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);
  const del = new DeleteAccount(page);
   let login = new LoginPage(page);

  await page.goto(user.url);

  await page.click('text=Signup / Login');
  await login.login(user)

  await page.click('text=Products');

  await product.openFirstProductDetails();

  await product.writeReview(user);

  await page.click('text=Products');

  await product.addProductToCart();

  await cart.removeProduct();

  await del.deleteAccount();
  await expect(page.locator('text=Account Deleted')).toBeVisible();
});