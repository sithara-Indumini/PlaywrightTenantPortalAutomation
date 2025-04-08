import { test, expect } from '@playwright/test';

test('Handling keyboard actions in playwright', async ({ page }) => {
  await test.step('Navigating to URL', async () => {
    await page.goto('https://www.google.com/')

    //Enter action from keyboard
    await page.getByLabel('Search', { exact: true }).first().click();
    await page.getByLabel('Search', { exact: true }).first().fill('Playwright by testers talk');
    await page.getByLabel('Search', { exact: true }).first().press('Enter');

    // // Selecting and deleting from the keyboard
    // await page.getByLabel('Search', { exact: true }).first().click();
    // await page.getByLabel('Search', { exact: true }).first().fill('Playwright by testers talk');
    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Delete')

    // //Press TAB and Enter
    // await page.getByLabel('Search', { exact: true }).first().click();
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter')
    // await page.waitForTimeout(2000);


  });
})
