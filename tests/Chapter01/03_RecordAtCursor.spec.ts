//Import the playwright module
import { test, expect } from '@playwright/test'

//Write a test
test('Record at cursor test', async ({ page }) => {

    //Go to URL
    await page.goto('https://workspace.google.com/intl/en-US/gmail/');

    //Click on sign in
    await page.getByRole('link', { name: 'Sign into Gmail' }).click()
    await page.getByText('Sign in', { exact: true })

    //Validate the web page title
    await expect(page).toHaveTitle('Gmail');


    await expect(page.getByText('to continue to Gmail', { exact: true })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email or phone' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Forgot email?' })).toBeVisible();
 await expect(page.getByRole('button', { name: 'Create account' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();

})
