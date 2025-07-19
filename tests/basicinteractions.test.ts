import test, { expect } from "@playwright/test";

test("Test name",async({page})=>
    {
        await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
        let message = "Test user message"
        const txtMessage = page.locator("//input[@id='user-message']") //Same as findelementby in Selenium
        await txtMessage.scrollIntoViewIfNeeded()
        txtMessage.fill(message)
        console.log(await txtMessage.inputValue()) //Logging the existing value of the available value of the text field.
        await page.click("#showInput")

        let messageDisplay = page.locator("//p[@id='message']")

        console.log(await messageDisplay.textContent())
    }
)