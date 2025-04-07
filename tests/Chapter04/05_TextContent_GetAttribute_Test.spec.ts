// Import playwright module
import { test, expect } from '@playwright/test'

test('Get Text & Get attribute value in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/BakkappaN');

    // Get element text & assert
   
   //const name= await page.locator('[itemprop="name"]').textContent();
   const name = await page.locator('[itemprop="name"]').innerText();
   //removing the spaces
   const finalName=name?.trim();
   console.log(`Name is: ${finalName}`);

   //Assertion
   expect(finalName).toBe('Testers Talk');

    // Get attribute value
    const attributeValue =  await page.getByTestId('repositories').first().getAttribute('data-selected-links');
    console.log(`Attribute value is : ${attributeValue}`);
  
});