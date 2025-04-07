import { Locator, Page } from "playwright";

export class HomePage {
    readonly page: Page;
    readonly searchTexbox: Locator;

    constructor(page: Page) {
        this.page = page;

        //Elements
        this.searchTexbox = page.getByPlaceholder('Search')
    }

    //Methods
    async goToURL() {
        await this.page.goto(`${process.env.YT_URL}`);
    }

    async searchWithKeywords(keyword: string) {
        await this.searchTexbox.waitFor({ state: 'visible' });
        await this.searchTexbox.click();
        await this.searchTexbox.fill(keyword);
        await this.searchTexbox.press('Enter');


    }
}