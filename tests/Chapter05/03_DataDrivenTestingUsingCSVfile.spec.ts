
// Import playwright module
import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Skill1: string,
    Skill2: string
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skipEmptyLines: true
    }
) as TestRecords[];

for (const record of records) {

    test(`Data Driven Testing Using csv file in playwright: ${record.Skill1}`, async ({ page }) => {
       // Go to URL
        await page.goto('https://www.youtube.com/');

         //searching
        await page.getByPlaceholder('Search', { exact: true }).first().fill(record.Skill1);
        await page.getByPlaceholder('Search', { exact: true }).press('Enter');

         //Assertion
        await expect(page).toHaveTitle(record.Skill1+' - YouTube');



    })
    
}

