import test, { chromium } from "@playwright/test"


test("Login test demo",async()=>{
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto("https://ecommerce-playground.lambdatest.io/")
})