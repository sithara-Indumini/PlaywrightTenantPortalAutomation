import { test, expect } from '@playwright/test';

// Running before all tests, only once
test.beforeAll(async () => {
    console.log('Running before all tests...');
    //console.log(`Number of workers: ${process.env.CI ? process.env.CI : 1}`);
});

test.beforeEach(async ({page}) => {
    console.log("Running Before Each tests...");
    await page.goto('https://github.com/');
});
test.afterEach(async () => {
    console.log("Running After Each tests...");
    //console.log(`Number of workers: ${process.env.CI ? process.env.CI : 1}`);
});

// Running after all tests, only once
test.afterAll(async () => {
    console.log("Running after all tests...");
   // console.log(`Number of workers: ${process.env.CI ? process.env.CI : 1}`);
});

test('Test 1', async ({ page }) => {
    console.log('Test 1 execution started....');

   // await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testertalk');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Tester@123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});

test('Test 2', async ({ page }) => {
    console.log('Test 2 execution started....');
   // await page.goto('https://github.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).click();
    await page.getByRole('textbox', { name: 'Username or email address' }).fill('testertalk');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Tester@123');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});
