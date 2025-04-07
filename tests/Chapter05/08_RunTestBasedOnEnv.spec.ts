// Import playwright module
import { test } from "../../src/fixture/TestFixture";

test('Optimized Page Object Model Test in Playwright', async ({ page, homepage, resultpage, playlistpage, testData }) => {

    // Go to URL & Search with keywords
    await homepage.goToURL();
    await homepage.searchWithKeywords(String(testData.Module1TestData?.Skill1));

    // Click on playlist
    await resultpage.clickOnPlayList(String(testData.Module1TestData?.Skill1))

    // Validate web page title
    await playlistpage.validatPageTitle(String(testData.Module1TestData?.Skill1) + ' - YouTube')

    console.log(`Skill : ${String(testData.Module1TestData?.Skill1)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill2)}`);
    console.log(`Skill : ${String(testData.Module1TestData?.Skill3)}`);
//     console.log(`Skill : ${String(testData.Module1TestData?.Skill4)}`);
//     console.log(`Skill : ${String(testData.Module1TestData?.Skill5)}`);
//     console.log(`Skill : ${String(testData.Module1TestData?.Skill6)}`);
//     console.log(`Skill : ${String(testData.Module1TestData?.Skill7)}`);
 });