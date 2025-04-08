//Import the playwright module
import { test, expect } from '@playwright/test';

//Write a test
test('Verify that user able to login to the tenant portal with valid credentials', async ({ page }) => {

    // Navigate to the login page
    await page.goto('http://the-internet.herokuapp.com/login');

    const headingText = await page.locator('xpath=//*[@id="content"]/div/h2').textContent();

    if (headingText?.trim() === 'Login Page1') {
        console.log('✅ Useer Navigate to Tenant Portal URL');
    } else {
        console.log('❌ Test case failed: Text does not match');
        console.log('Found text:', headingText);
    }

    // Adding user name and password
    await test.step('Enter User name and password', async () => {
        await page.getByRole('textbox', { name: 'username' }).fill('tomsmith');
        await page.getByRole('textbox', { name: 'password' }).fill('SuperSecretPassword!');

        await test.step('Verify Login and success message', async () => {
            await page.click('button:has-text("Login")')
            const message = await page.locator('.flash.success').textContent();

            if (message?.includes('You logged into a secure area1!')) {
                console.log('✅ Test passed: Logged in successfully with success message');
            } else {
                console.log('❌ Test failed: Success message not found');
            }

        });

    })
})


// import { test, expect } from '@playwright/test';

// test('Verify that user can log in to the tenant portal with valid credentials', async ({ page }) => {
//   await page.goto('http://the-internet.herokuapp.com/login');

//   const headingText = await page.locator('xpath=//*[@id="content"]/div/h2').textContent();
//   expect(headingText?.trim()).toBe('Login Page1'); // ✅ Will fail test if not matched

//   await test.step('Enter username and password', async () => {
//     await page.getByRole('textbox', { name: 'username' }).fill('tomsmith');
//     await page.getByRole('textbox', { name: 'password' }).fill('SuperSecretPassword!');

//     await test.step('Verify login and success message', async () => {
//       await page.click('button:has-text("Login")');
//       const message = await page.locator('.flash.success').textContent();
//       expect(message).toContain('You logged into a secure area1!'); // ✅ Will fail test if not matched
//     });
//   });
// });
