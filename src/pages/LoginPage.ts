import { Locator, Page } from "playwright";

export class LoginPage {
    readonly page: Page;
    readonly searchTexbox: Locator;

    constructor(page: Page) {
        this.page = page;

        //Elements
        this.searchTexbox = page.getByPlaceholder('Search')
    }

    //Methods
    async goToURL() {
        await this.page.goto(`${process.env.TP_URL}`);
    }

    async searchWithKeywords(keyword: string) {
        await this.searchTexbox.waitFor({ state: 'visible' });
        await this.searchTexbox.click();
        await this.searchTexbox.fill(keyword);
        await this.searchTexbox.press('Enter');


    }
}