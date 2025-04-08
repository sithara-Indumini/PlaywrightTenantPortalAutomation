//Import the playwright module
import { test, expect } from '@playwright/test';

//Write a test
test('Test 1',{tag:['@SmokeTesting']}, async ({ page }) =>{
    console.log('Test exectution started...');

    //Go to URL
    await page.goto('https://workspace.google.com/intl/en-US/gmail/');

    //Click on sign in
    await page.getByRole('link', { name: 'Sign into Gmail' }).click()
    await page.getByText('Sign in', { exact: true })

    //Validate the web page title
    await expect(page).toHaveTitle('Gmail');

})
