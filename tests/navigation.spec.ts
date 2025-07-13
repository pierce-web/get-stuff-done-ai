import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigation elements are present', async ({ page }) => {
    await page.goto('/');

    // Check that navigation exists
    const nav = await page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Check that there are navigation links
    const navLinks = await page.locator('nav a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('mobile viewport shows appropriate navigation', async ({ page, isMobile }) => {
    // Only set viewport if not already mobile
    if (!isMobile) {
      await page.setViewportSize({ width: 390, height: 844 });
    }
    await page.goto('/');
    
    // Wait for the page to load and responsive CSS to apply
    await page.waitForLoadState('networkidle');

    // Verify mobile-specific elements are present
    const mobileNavButton = await page.locator('button[data-testid="mobile-nav-button"]');
    await expect(mobileNavButton).toBeVisible();
  });

  test('footer exists and has content', async ({ page }) => {
    await page.goto('/');

    // Scroll to footer
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    // Check footer exists
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();

    // Check footer has content
    const footerContent = await footer.textContent();
    expect(footerContent?.trim().length).toBeGreaterThan(0);
  });
});