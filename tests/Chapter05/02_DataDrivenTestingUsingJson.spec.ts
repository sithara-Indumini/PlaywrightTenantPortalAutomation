// Import playwright module
import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/testdata.json'

type TestData = {
    TestDataSet1: {

        Skill1: string,
        Skill2: string
    },

    TestDataSet2: {

        Skill1: string,
        Skill2: string
    }
}

const typeTestData = testData as TestData;

for (const dataSetName in typeTestData) {

    const Skill = typeTestData[dataSetName as keyof TestData];

    test(`Data Driven Testing Using JSON file in playwright: ${Skill.Skill2}`, async ({ page }) => {

        // Go to URL
        await page.goto('https://www.youtube.com/');

        //searching
        await page.getByPlaceholder('Search', { exact: true }).first().fill(Skill.Skill2);
        await page.getByPlaceholder('Search', { exact: true }).press('Enter');

        //Assertion
        await expect(page).toHaveTitle(Skill.Skill2+' - YouTube');


    })
}