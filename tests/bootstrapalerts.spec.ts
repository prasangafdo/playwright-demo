import test, { expect } from "@playwright/test";

test("Verify bootstrap alert",async({page})=>{
    
    const btnLunchModal = page.locator("//button[@data-target='#myModal']")
    const btnCloseModal = page.locator("//button[text()='Save Changes']").nth(0)

    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")

    await btnLunchModal.click()
    await btnCloseModal.click()
})

test.only("Verify additional bootstrap alert",async({page})=>{
    
    const btnLunchModal = page.locator("//button[@data-target='#myMultiModal']")
    const btnLunchSecondModal = page.locator("//button[@data-target='#mySecondModal']")
    const btnCloseModal = page.locator("//button[text()='Save Changes']").nth(1)
    const btnCloseSecondModal = page.locator("//button[text()='Save Changes']").nth(2)

    page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")

    await btnLunchModal.click()
    await btnLunchSecondModal.click()
    await btnCloseSecondModal.click()
    await btnCloseModal.click()
})