import { test, expect } from '@playwright/test';

test('test', async ({ page }) => { //Page is a fixture here
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("//img[@alt='profile picture']/parent::span").click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.locator("//img[@alt='profile picture']/parent::span").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});