import { test, expect } from '@playwright/test';

test('GET https://api.github.com returns 200', async ({ request }) => {
  const response = await request.get('https://api.github.com');

  expect(response.status()).toBe(200);
});
