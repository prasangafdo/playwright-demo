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

Notes: Type and fill are two commonly used functions to enter a value to a text field. Type sends characters one by one and fill directly passes all the values at once.
