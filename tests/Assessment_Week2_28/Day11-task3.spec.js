import {test} from '@playwright/test'

test("Test-3",async({page,browserName})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.locator('//input[@id="name"]').fill('Sonakshi');
    await page.locator('//input[@id="email"]').fill('sonakshi@gmail.com');
    await page.locator('//input[@id="password"]').fill('Soankshi@123');
    await page.locator('//button[@type="submit"]').click();
    await page.locator('//input[@id="email"]').fill('sonakshi@gmail.com');
    await page.locator('//input[@id="password"]').fill('Sonakshi@123');
    await page.locator('//button[@type="submit"]').click();

    await page.screenshot({path:`screenshot/task3${browserName}.png`})

})