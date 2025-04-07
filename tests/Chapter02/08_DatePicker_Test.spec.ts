import { test, expect } from '@playwright/test';

test('Selecting Date value in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {

        await page.goto('https://jqueryui.com/datepicker/');
        const iframe = page.frameLocator('[class="demo-frame"]');

        // Hardcoded date
        await iframe.locator('[id="datepicker"]').fill('03/15/2025');

        //Selecting dynamic date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('.ui-datepicker-today').click();

        //Selecting past date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('[title="Prev"]').click();
        await iframe.locator('text="15"').click();

        //Selecting Future date
        await iframe.locator('[id="datepicker"]').click();
        await iframe.locator('[title="Next"]').click();
        await iframe.locator('text="10"').click();





    });
})
