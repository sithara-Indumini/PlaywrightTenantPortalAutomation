import { test, expect } from '@playwright/test';

test('Handling Mouse actions in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {
        await page.goto('https://www.bing.com/search?q=playwright+by+testers+talk');

        //Left click
        await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ - YouTube' }).click({ button: 'left' });

        //Middle click
        await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ - YouTube' }).click({ button: 'middle' });

        //Right click
        await page.getByRole('link', { name: 'Playwright by Testers Talk☑️ - YouTube' }).click({ button: 'right' });

        //Mouse hover in playwright

        await page.getByLabel('Search using voice').hover();

        //double click
        await page.getByLabel('Search using voice').dblclick();


    });
})
