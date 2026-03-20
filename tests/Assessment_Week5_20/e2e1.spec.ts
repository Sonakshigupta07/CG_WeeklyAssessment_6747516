import {test,expect} from "@playwright/test"
import user from "./utilities/user.json";
import {RegisterPage} from "./PageObjectModel/register.page.ts"
import { LoginPage } from "./PageObjectModel/loginPage.page.ts"
import { HomePage } from "./PageObjectModel/homePage.page.ts"
import { ProductPage } from "./PageObjectModel/productPage.page.ts"
import { CartPage } from "./PageObjectModel/cartPage.page.ts"

test("E2E-1",async({page})=>{
    let register = new RegisterPage(page);
    let login = new LoginPage(page);
    let home = new HomePage(page)
    let product = new ProductPage(page)
    let cart = new CartPage(page)

    await page.goto(user.url)
    await page.click('//i[@class="fa fa-lock"]')
    // await register.register(user);
    await login.login(user)

    await page.click('text=Products');
    await home.searchProduct(user);
    await product.addProductToCart();
    await cart.proceedToPay()
    await page.screenshot({path:"screenshot/e2e1-task.png"});

})