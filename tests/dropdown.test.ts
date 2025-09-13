import test from "@playwright/test";

test("Verify select drop down",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo",{
        value:"Wednesday"
    })

}),

test("Verify multi select drop down",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#multi-select", [
        { value: "Florida" },
        { index: 6 },
        { label: "New York" }
    ])
    await page.waitForTimeout(3000)
})




// test("Verify multi select drop down",async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
//     await page.selectOption("#multi-select",{
//         {value:"Florida"}
//     {index:3}
//        {label:"Texas"}
//     })

// })