import { test, expect } from '@playwright/test';

test('Locators in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {

        const isVisible = await page.goto('https://www.facebook.com/');
        await page.getByAltText("facebook").isVisible();
        if (isVisible) {
            console.log("The element is visible.");
        } else {
            console.log("The element is not visible.");
        }

        await page.getByRole('button', { name: 'Create new account' }).click();


        //Select dropdown using value
        await page.getByLabel('Month').selectOption('4');

        //Select dropdown using visible text
        await page.getByLabel('Month').selectOption('Aug');
        await page.getByLabel('Month').selectOption('Oct');

        //Validate the all the options in dropdown

        await expect(page.locator('#month>option')).toHaveText(['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']);


    });

});
