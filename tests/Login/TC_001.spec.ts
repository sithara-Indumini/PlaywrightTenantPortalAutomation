//Import the playwright module
import { test, expect } from '@playwright/test';

//Write a test
test('[1317] Verify that user able to login to the tenant portal with valid credentials', { tag: ['@PlaywrightWithAzureDevOpsPipeline'] },async ({ page }) => {

    // Navigate to the login page
    await page.goto('http://the-internet.herokuapp.com/login');

    const headingText = await page.locator('xpath=//*[@id="content"]/div/h2').textContent();

    if (headingText?.trim() === 'Login Page') {
        console.log('✅ Useer Navigate to Tenant Portal URL');
    } else {
        console.log('❌ Test case failed: Text does not match');
        console.log('Found text:', headingText);
    }

    // Adding user name and password
    await test.step('Enter User name and password', async () => {
        await page.getByRole('textbox', { name: 'username' }).fill('tomsmith');
        await page.getByRole('textbox', { name: 'password' }).fill('SuperSecretPassword!');

    //Login and success message

        await test.step('Verify Login and success message', async () => {
            await page.click('button:has-text("Login")');
            const message = await page.locator('.flash.success').textContent();

            if (message?.includes('You logged into a secure area!')) {
                console.log('✅ Test passed: Logged in successfully with success message');
            } else {
                console.log('❌ Test failed: Success message not found');
            }

        });

    })
})

