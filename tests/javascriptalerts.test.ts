import test, { expect } from "@playwright/test";

test("Verify Javascript alert message", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    let txtAlert:any
    page.on("dialog",async(alert)=>{
        txtAlert = alert.message()
        console.log(txtAlert)
        await alert.accept()
    }) //We should include alert listner and related function before we trigger the alert.

    await page.getByRole('button', { name: 'Click Me' }).first().click() //.first() identifies the first element
    expect(txtAlert).toBe("I am an alert box!")
})

test("Verify the button click", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    let txtAlert:any
    let dialogAction : 'accept'|'dismiss' ='accept'

    page.on("dialog",async(alert)=>{
        txtAlert = alert.message()
        console.log(txtAlert)
        if (dialogAction == "accept"){
            await alert.accept()
        }
        else if (dialogAction == "dismiss"){
            await alert.dismiss()
        }
    })

    await page.getByRole('button', { name: 'Click Me' }).nth(1).click()
    expect(txtAlert).toBe("Press a button!")

    let expectedResult = 'You pressed OK!'
    let actualResult = await page.locator("//p[@id='confirm-demo']").textContent()

    expect(actualResult).toBe(expectedResult)

    dialogAction = 'dismiss'
    await page.getByRole('button', { name: 'Click Me' }).nth(1).click()
    expectedResult = 'You pressed Cancel!'
    actualResult = await page.locator("//p[@id='confirm-demo']").textContent()
    expect(actualResult).toBe(expectedResult)
})
