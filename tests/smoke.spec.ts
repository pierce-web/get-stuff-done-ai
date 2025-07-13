import { test, expect } from '@playwright/test';

// These tests run against production to ensure basic functionality works
// They are tagged with @smoke and run via: npm run test:production

test.describe('Production Smoke Tests @smoke', () => {
  test('homepage loads successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBeLessThan(400);
    
    // Check critical elements exist
    await expect(page).toHaveTitle(/AI Implementation Services|Get Stuff Done/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navigation is accessible', async ({ page }) => {
    await page.goto('/');
    
    // Desktop navigation should be visible on desktop
    const desktopNav = page.locator('nav').first();
    await expect(desktopNav).toBeVisible();
  });

  test('critical pages are accessible', async ({ page }) => {
    const criticalPages = [
      '/',
      '/ai-action-workshop',
      '/ai-tooling-report',
      '/blog',
      '/cases'
    ];
    
    for (const path of criticalPages) {
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);
    }
  });

  test('contact methods work', async ({ page }) => {
    await page.goto('/');
    
    // Check phone link exists
    const phoneLink = page.locator('a[href^="tel:"]').first();
    await expect(phoneLink).toBeVisible();
    
    // Check calendly button exists
    const bookButton = page.getByText('Book a Strategy Call').first();
    await expect(bookButton).toBeVisible();
  });
});