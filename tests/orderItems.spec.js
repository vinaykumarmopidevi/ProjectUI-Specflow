import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
  console.log("Browser opened");

});

test.beforeEach('launch the applicatio', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});



test('Add Item to cart', async ({ page }) => {

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});
test('Remove Item from cart', async ({ page }) => {

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
});

test.afterEach('Logout to application', async ({ page }) => {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
  await page.close();
});

test.afterAll(async () => {
  
  console.log("Browser closed")
});


