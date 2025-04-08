import { test, expect } from '@playwright/test';

test('Locators in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {
        await page.goto('https://github.com/BakkappaN');

        //getByRole (link,button,menu)
        await page.getByRole('link', { name: 'Sign in' }).click()

        //getByLabel
        await page.getByLabel('Homepage', { exact: true }).first().click();

        //getByAltText
        await page.getByAltText("View BakkappaN's full-sized avatar").click();


        //getByTestId
       // await page.getByTestId("repositories").first().click();

        //getByText
       // await page.getByText("Sign up").click()

        //getByPlaceholder, xpath, CssSelectors
        //await page.goto('https://www.youtube.com/@testerstalk');
        //await page.getByPlaceholder('Search').fill('testers talk');
        //await page.locator('//input[@name="search_query"]').fill('testers talk')
        //await page.locator('input[name="search_query"]').fill('testers talk')

        //getByTitle
        //await page.goto('https://www.google.com/');
        //await page.getByTitle('Search').fill('cats');





    });

});
