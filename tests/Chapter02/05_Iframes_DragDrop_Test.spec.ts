import { test, expect } from '@playwright/test';

test('Handling iFrames Drag and Drop element in playwright', async ({ page }) => {
    await test.step('Navigating to URL', async () => {

        await page.goto('https://jqueryui.com/droppable/');


        const iframe = page.frameLocator('[class="demo-frame"]');
        //drag element,drop element
        const dragElement = iframe.locator('[id="draggable"]');
        const dropElement = iframe.locator('[id="droppable"]');

        await dragElement.dragTo(dropElement);



    });
})
