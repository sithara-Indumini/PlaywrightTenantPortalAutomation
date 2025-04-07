
import { test} from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/ResultPage';
import { PlayListPage } from '../../src/pages/PlayListPage';



test('Implementing fixtures in Playwright', async ({ page }) => {
    console.log('Test execution started..')

    // Create object of homepage
    const homePage = new HomePage(page);
    await homePage.goToURL();
    await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of resultpage
    const resultPage = new ResultPage(page);
    await resultPage.clickOnPlayList(`${process.env.SEARCH_KEYWORDS}`)

    // Create object of playlistpage
    const playlistPage = new PlayListPage(page);
    await playlistPage.validatPageTitle(`${process.env.SEARCH_KEYWORDS}` +' - YouTube')
    console.log('Test execution ended..')
});