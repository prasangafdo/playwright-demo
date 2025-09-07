import test from "@playwright/test";

test("Verify Javascript alert message", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    page.on("dialog",async(alert)=>{
        const text = alert.message()
        console.log(text)
        await alert.accept()
    }) //We should include alert listner and related function before we trigger the alert.

    await page.getByRole('button', { name: 'Click Me' }).first().click() //.first() identifies the first element

})