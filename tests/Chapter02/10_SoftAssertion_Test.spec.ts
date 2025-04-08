
import { test, expect } from '@playwright/test';

test('Soft Assertions in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {
        console.log('Test exectution started...');

        await page.goto('https://www.youtube.com/');

        //Visible
        await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeVisible();
        //Invalid one:  await expect(page.getByPlaceholder('Search1',{exact:true}).first()).toBeVisible();

        //editable
        await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEditable();
        //enabled
        await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEnabled();
        //empty
        await expect(page.getByPlaceholder('Search', { exact: true }).first()).toBeEmpty();


        //verify URL, page title, text, count
        await page.getByPlaceholder('Search', { exact: true }).first().click();
        await page.getByPlaceholder('Search', { exact: true }).first().fill('Playwright by testers talk');
        await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
        await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+testers+talk');

        await expect.soft(page).toHaveTitle('Playwright by testers talk - YouTube');

        await expect(page.locator('span[id="title"]').first()).toHaveText('People also watched');

        await expect(page.locator('span[id="title"]')).toHaveCount(2);
       // await expect(page.locator('span[id="title"]')).toBeDisabled();




    });
})
