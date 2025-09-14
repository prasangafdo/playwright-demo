# playwright-demo
Playwright demo based on Lambda Test tutorials.
Cloned the repo

Can be executed with any of below commands.

npx playwright test

npm test

But to run with "npm test" command, we need to ad the following code block to package.json file.

  "scripts": {
    "test": "npx playwright test" 
  },

  If you want to specify a test (spec) file, you can use "npx playwright test tests/test-file-name.ts" ( Replace "test-file-name" with your actual file name)

Notes: Type and fill are two commonly used functions to enter a value to a text field. Type sends characters one by one and fill directly passes all the values at once. Additionally, fill removes the existing data and enter the new data at once.
When we have multiple elements on the same name, we can use ".nth(0)"
We should include alert listner and alert related function before we trigger the alert.
String format using TS -> `You pressed ${txtAlert}!`

We can select inner elements this way.
await page.locator("ul#select2-country-results").locator("li",{
            hasText: "India"
        }).click()
