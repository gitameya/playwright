import { test as baseTest, expect as baseExpect } from '@playwright/test';
import { test as fixtureTest, expect as fixtureExpect } from './fixtures';

baseTest('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.getByRole('link', { name: 'Get started' }).click();

  await baseExpect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

fixtureTest('uses the page object model for the same flow', async ({ playwrightHomePage }) => {
  await playwrightHomePage.goto();
  await playwrightHomePage.openGetStarted();
  await playwrightHomePage.expectInstallationVisible();

  await fixtureExpect(playwrightHomePage.installationHeading).toBeVisible();
});
