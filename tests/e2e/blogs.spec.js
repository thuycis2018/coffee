import { test, expect } from '@playwright/test';
test.describe('Blogs page tests', () => {
    test('Blogs page has expected title and section', async ({ page }) => {
        await page.goto('/blogs');
        const blogsHeader = await page.getByRole('heading', { name: 'Blogs' });
        await expect(blogsHeader).toBeVisible();

        const section = await page.locator('#blogs');
        await expect(section).toBeVisible();
    });
});