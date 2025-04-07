//Import the playwright module
import { test, expect } from '@playwright/test';

//Write a test
test('Multiple browsers /tans playwright typescript', async ({ page, browser }) => {
    console.log('Test exectution started...');

    //Go to URL
    await page.goto('https://workspace.google.com/intl/en-US/gmail/');

    //Click on sign in
    await page.getByRole('link', { name: 'Sign into Gmail' }).click()
    await page.getByText('Sign in', { exact: true })

    //Validate the web page title
    await expect(page).toHaveTitle('Gmail');

    //Create new broser session

    const context2 = await browser.newContext();
    const page2 = await context2.newPage();
    
        //Go to URL
        await page2.goto('https://workspace.google.com/intl/en-US/gmail/');
    
        //Click on sign in
        await page2.getByRole('link', { name: 'Sign into Gmail' }).click()
        await page2.getByText('Sign in', { exact: true })
    
        //Validate the web page title
        await expect(page2).toHaveTitle('Gmail');

        //create new tabs
        const newTab = await context2.newPage();
        await newTab.goto('https://workspace.google.com/intl/en-US/gmail/');
    
        //Click on sign in
        await newTab.getByRole('link', { name: 'Sign into Gmail' }).click()
        await newTab.getByText('Sign in', { exact: true })
    
        //Validate the web page title
        await expect(newTab).toHaveTitle('Gmail');

})
