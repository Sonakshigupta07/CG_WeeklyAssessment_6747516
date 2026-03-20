import { test, expect } from "@playwright/test";
import user from "./utilities/user.json";
import { LoginPage } from "./PageObjectModel/loginPage.page";

test("Common: Login functionality", async ({ page }) => {

  const login = new LoginPage(page);

  await page.goto(user.url);
  await page.click('text=Signup / Login');
  await login.login(user);

  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

  await page.screenshot({path:"screenshot/normalScenario1-task.png"});

});