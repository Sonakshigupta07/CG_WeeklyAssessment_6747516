import { test, expect } from "@playwright/test";
import user from "./utilities/user.json";
import { HomePage } from "./PageObjectModel/homePage.page";

test("Common: Search product", async ({ page }) => {

  const home = new HomePage(page);

  await page.goto(user.url);
  await page.click('text=Products');
  await home.searchProduct(user);

  await expect(page.locator('.productinfo').first()).toBeVisible();
  await page.screenshot({path:"screenshot/normalScenario2-task.png"});
});