// Import playwright module
import { test, expect } from '@playwright/test';
//Write a test
test('Read ENV file config in playwright', async ({ page }) =>{
    console.log('Test exectution started...');

    //Go to URL
    await page.goto(`${process.env.GOOGLE_URL}`);

    //Click on sign in
    await page.getByRole('link', { name: 'Sign into Gmail' }).click()
    await page.getByText('Sign in', { exact: true })

    //Validate the web page title
    await expect(page).toHaveTitle('Gmail');

})
