import { test, expect } from '@playwright/test';

const searchKeywords = ['Playwright By Testers Talk', 'Cypress By testers talk', 'API Testing by testers talk'];

for (const searchKeyword of searchKeywords) {
    test(`Parameterize tests in playwright - ${searchKeyword}`, async ({ page }) => {
        await test.step('Navigating to URL', async () => {
            console.log('Test execution started...');

            await page.goto('https://www.youtube.com/');

            // Verify URL, page title, text, count
            await page.getByPlaceholder('Search', { exact: true }).first().fill(searchKeyword);
            await page.getByPlaceholder('Search', { exact: true }).first().press('Enter');
        });
    });
}
