import { test, expect } from '@playwright/test';
import exampleData from './data/exampleData.json';

test('uses data from a separate JSON file', async ({ page }) => {
  await page.goto(exampleData.url);

  await expect(page).toHaveTitle(new RegExp(exampleData.expectedTitle, 'i'));
});
