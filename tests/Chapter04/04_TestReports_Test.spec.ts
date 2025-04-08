// Import playwright module
import { test, expect } from '@playwright/test';

/**
 * Author Testers Talk
 */
test.describe('SmokeTesting', () => {
    // Write a test
    test('Test 1', async ({ page }) => {
        // Go to URL
        //Go to URL
        await page.goto('https://workspace.google.com/intl/en-US/gmail/');

        //Click on sign in
        await page.getByRole('link', { name: 'Sign into Gmail' }).click()
        await page.getByText('Sign in', { exact: true })

        //Validate the web page title
        await expect(page).toHaveTitle('Gmail');
    });
});

/**
 * Author Testers Talk
 */
test.describe('RegressionTesting', () => {
    // Write a test
    test('Test 2', async ({ page }) => {
        //Go to URL
        await page.goto('https://workspace.google.com/intl/en-US/gmail/');

        //Click on sign in
        await page.getByRole('link', { name: 'Sign into Gmail' }).click()
        await page.getByText('Sign in', { exact: true })

        //Validate the web page title
        await expect(page).toHaveTitle('Gmail');
    });

    // Write a test
    test('Test 3', async ({ page }) => {
        // Go to URL
        //Go to URL
        await page.goto('https://workspace.google.com/intl/en-US/gmail/');

        //Click on sign in
        await page.getByRole('link', { name: 'Sign into Gmail' }).click()
        await page.getByText('Sign in', { exact: true })

        //Validate the web page title
        await expect(page).toHaveTitle('Gmail');
    });

    // test('Test 4', async ({ page }) => {
    //     //Go to URL
    //     await page.goto('https://workspace.google.com/intl/en-US/gmail/');

    //     //Click on sign in
    //     await page.getByRole('link', { name: 'Sign into Gmail' }).click()
    //     await page.getByText('Sign in', { exact: true })

    //     //Validate the web page title
    //     await expect(page).toHaveTitle('Gmail5');
    // });
});