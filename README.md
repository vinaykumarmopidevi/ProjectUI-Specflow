# ProjectUI-Specflow




 see [reference](https://playwright.dev/docs/test-cli) to learn about playwright commands.

```sh
npx playwright test --project=chromium --headed --workers=4
```
![](todo.png)

```js
test('Login to application', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.close();
});

```

* **Steps**


- CodeceptJS requires Node.js version `12+` or later. 

