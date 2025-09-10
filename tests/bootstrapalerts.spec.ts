import test, { expect } from "@playwright/test";

test.only("Verify bootstrap alert",async({page})=>{
    
    const btnLunchModal = page.locator("//button[@data-target='#myModal']")
    const btnCloseModal = page.locator("//button[text()='Save Changes']").nth(0)

    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")

    await btnLunchModal.click()
    await btnCloseModal.click()
})