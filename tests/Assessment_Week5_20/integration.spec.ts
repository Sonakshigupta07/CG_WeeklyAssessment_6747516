import { test, expect } from "@playwright/test";
import user from "./utilities/user.json";

import { LoginPage } from "./PageObjectModel/loginPage.page";
import { HomePage } from "./PageObjectModel/homePage.page";
import { ProductPage } from "./PageObjectModel/productPage.page";
import { CartPage } from "./PageObjectModel/cartPage.page";

test("Integration: Verify Product Name, Price & Quantity in Cart", async ({ page }) => {

  const login = new LoginPage(page);
  const home = new HomePage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  await page.goto(user.url);

  await page.click('text=Signup / Login');
  await login.login(user);
  await expect(page.locator('text=Logged in as')).toBeVisible();

  await page.click('text=Products');
  await home.searchProduct(user);

  const productName = await product.getFirstProductName();
  const productPrice = await product.getFirstProductPrice();

  console.log("Product Name:", productName);
  console.log("Product Price:", productPrice);
  await product.addFirstProductToCart();

  const cartName = await cart.getCartProductName();
  const cartPrice = await cart.getCartProductPrice();
  const quantity = await cart.getCartQuantity();

  console.log("Cart Name:", cartName);
  console.log("Cart Price:", cartPrice);
  console.log("Quantity:", quantity);

  await expect(cartName?.trim()).toContain(productName?.trim());
  await expect(cartPrice?.trim()).toBe(productPrice?.trim());
  await expect(quantity?.trim()).toBe("1");
  await page.screenshot({path:"screenshot/integration-task.png"});
});