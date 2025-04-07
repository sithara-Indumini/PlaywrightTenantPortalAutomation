import { test, expect } from '@playwright/test'

/*test('Visual comparison in playwright', async ({ page }) => {

  await page.goto('https://github.com/login');
  await expect(page).toHaveScreenshot('GitHubLoginPage.png', { threshold: 0.1 });
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('playwright with typescript');
  await expect(page).toHaveScreenshot('GitHubLoginPage.png', { threshold: 0.1 });*/




  test('Element Visual comparison in playwright2', async ({ page }) => {

    await page.goto('https://github.com/login');
    
    //  await page.getByRole('textbox', { name: 'Username or email address' }).fill('playwright with typescript');
    // await expect(page).toHaveScreenshot('GitHubLoginPage.png', { threshold: 0.1 });
    await expect(page).toHaveScreenshot('GitHubLoginPage.png', { threshold: 0.2 });
    const element = page.locator('[class="auth-form-body mt-3"]');
    await expect(element).toHaveScreenshot('GitHubLoginForm.png', { threshold: 0.1 });
    await page.locator('#login_field').fill('Playwright with typescript');
    await expect(element).toHaveScreenshot('GitHubLoginForm.png', { threshold: 0.1 });

  });


//});


