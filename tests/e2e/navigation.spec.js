import { test, expect } from '@playwright/test';

test.describe('Navigation bar tests', () => {
    test('should display Home and Blogs in the navigation', async ({ page }) => {
        await page.goto('/');

        const homeNav = await page.locator('nav a:text("Home")');
        await expect(homeNav).toBeVisible();

        const blogsNav = await page.locator('nav a:text("Blogs")');
        await expect(blogsNav).toBeVisible();
    });

    test('should display Home and Blogs in the navigation and navigate correctly', async ({ page }) => {
        await page.goto('/');

        const blogsNav = await page.locator('nav a:text("Blogs")');
        await expect(blogsNav).toBeVisible();
        await blogsNav.click();
        await page.waitForLoadState('networkidle');

        // Verify the URL is correct (with or without a trailing slash)
        await expect(page).toHaveURL(/\/blogs\/?$/);
    });

    test('should display Blogs page and navigate back to home page correctly', async ({ page }) => {
        await page.goto('/blogs');

        const homeNav = await page.locator('nav a:text("Home")');
        await expect(homeNav).toBeVisible();

        await homeNav.click();
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveURL(/\/$/);

    });
});
