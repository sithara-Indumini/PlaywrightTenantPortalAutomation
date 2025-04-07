//Import the playwright module
import { test, expect } from '@playwright/test';

//Write a test
test('Timeouts in playwright', async ({ page }) =>{
    // priority goes to this than config configuration
   // test.setTimeout(1*60*100);
    console.log('Test exectution started...');

    //Go to URL
    await page.goto('https://workspace.google.com/intl/en-US/gmail/');

    //Click on sign in

    await page.getByRole('link', { name: 'Sign into Gmail1' }).click({timeout:5000})
    await page.getByText('Sign in', { exact: true })

    //Validate the web page title
    //(since assertion value is set in the config file)
    await expect(page).toHaveTitle('Gmail',{timeout:5000});
   // await page.waitForTimeout(60000);

})