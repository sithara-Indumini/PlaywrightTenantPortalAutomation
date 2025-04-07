import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class PlayListPage {
    readonly page: Page;
   

    constructor(page: Page) {
        this.page = page;

    }

    //Methods
   
    async validatPageTitle(title: string) {
      await expect(this.page).toHaveTitle(title);

    }
}