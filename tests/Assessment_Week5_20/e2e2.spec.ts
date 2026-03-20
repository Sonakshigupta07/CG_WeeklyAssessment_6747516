import { test, expect } from "@playwright/test";
import user from "./utilities/user.json";

import { RegisterPage } from "./PageObjectModel/register.page";
import { MultipleProductPage } from "./PageObjectModel/multipleProduct.page";
import { CartPage } from "./PageObjectModel/cartPage.page";
import { CheckoutPage } from "./PageObjectModel/checkout.page";
import { LoginPage } from "./PageObjectModel/loginPage.page.ts"

test("E2E: Signup → Add Multiple Products → View Cart → Proceed to Pay", async ({ page }) => {

  const register = new RegisterPage(page);
  const product = new MultipleProductPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
   let login = new LoginPage(page);

  await page.goto(user.url);

  await page.click('text=Signup / Login');
  await login.login(user)

  await page.click('text=Products');
  await product.addMultipleProducts(2);

  await cart.proceedToPay();
  await checkout.placeOrder(user)
   await page.screenshot({path:"screenshot/e2e2-task.png"});
});