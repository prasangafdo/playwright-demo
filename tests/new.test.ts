import test, { chromium } from "@playwright/test"
import { assert } from "console"


test("Login test demo",async()=>{
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//li[@class='nav-item dropdown dropdown-hoverable']//span[@class ='title' and normalize-space()='My account']")
    await page.click("//span[normalize-space()='Login']")
    await assert()

})