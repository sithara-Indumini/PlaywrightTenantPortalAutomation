import { Locator, Page } from "playwright";

export class ResultPage {
    readonly page: Page;
   

    constructor(page: Page) {
        this.page = page;
       
    }

    //Methods
   
    async clickOnPlayList(link: string) {
      await this.page.getByRole('link',{name:link}).first().click();

    }
}