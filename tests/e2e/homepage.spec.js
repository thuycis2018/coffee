import { test, expect } from '@playwright/test';
test.describe('Home page tests', () => {
  test('Home page has expected title and 3 cards', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Special Coffee Drinks/);

    const cardsSection = await page.locator('#cards');
    await expect(cardsSection).toBeVisible();

    const articles = await cardsSection.locator('article');
    await expect(articles).toHaveCount(3);
  });
});