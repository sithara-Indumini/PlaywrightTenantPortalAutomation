// Import playwright module
import { test } from "../../src/fixture/TestFixture";

test('Optimized Page Object Model Test in Playwright', async ({ page, homepage, resultpage, playlistpage }) => {

    // Go to URL & Search with keywords
    await homepage.goToURL();
    await homepage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Click on playlist
    await resultpage.clickOnPlayList(`${process.env.SEARCH_KEYWORDS}`)

    // Validate web page title
    await playlistpage.validatPageTitle(`${process.env.SEARCH_KEYWORDS}` + ' - YouTube')
});