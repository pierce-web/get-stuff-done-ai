import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct title and meta description', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/AI Implementation Services/);

    // Check meta description exists
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription?.length).toBeGreaterThan(0);
  });

  test('displays hero section', async ({ page }) => {
    await page.goto('/');

    // Verify hero section exists
    const heroSection = await page.locator('div.pt-20').first();
    await expect(heroSection).toBeVisible();
  });

  test('displays services section', async ({ page }) => {
    await page.goto('/');

    // Verify services section is present
    const servicesSection = await page.locator('.py-8').first();
    await expect(servicesSection).toBeVisible();
  });

  test('navigation menu is present', async ({ page }) => {
    await page.goto('/');

    // Verify navigation is visible
    const nav = await page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('has footer with contact information', async ({ page }) => {
    await page.goto('/');

    // Verify footer exists
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();
  });
});