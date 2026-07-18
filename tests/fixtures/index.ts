import { test as base } from '@playwright/test';
import { PlaywrightHomePage } from '../pages/playwrightHomePage';

export type PlaywrightFixtures = {
  playwrightHomePage: PlaywrightHomePage;
};

export const test = base.extend<PlaywrightFixtures>({
  playwrightHomePage: async ({ page }, use) => {
    const playwrightHomePage = new PlaywrightHomePage(page);
    await use(playwrightHomePage);
  },
});

export { expect } from '@playwright/test';
