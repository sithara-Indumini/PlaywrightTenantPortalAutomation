// pages/BasePage.ts
import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  async typeText(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string> {
    return await locator.textContent() || '';
  }

  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async assertElementVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

}

