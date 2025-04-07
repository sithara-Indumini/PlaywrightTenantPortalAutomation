import { test, expect } from '@playwright/test';

test('Capture screenshots in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {
        await page.goto('https://www.youtube.com/@testerstalk');
        //await expect(page.getByRole('heading', { name: 'Testers Talk', exact: true }).locator('span')).toBeVisible();
        //await page.getByLabel('#1 Playwright Automation').getByRole('link', { name: '#1 Playwright Automation' }).click();

        //Element screenshot
await page.locator('#page-header-container').screenshot({path:'./Screenshots/ElementScreenshot.png'})


        // page screenshot
        await page.screenshot({path:'./Screenshots/PageScreenshot.png'});
        //full page screenshot
        await page.screenshot({path:'./Screenshots/FullPageScreenshot.png',fullPage:true});
    });

});
