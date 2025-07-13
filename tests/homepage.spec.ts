import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('has correct title and meta description', async ({ page }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });

    // Check page title
    await expect(page).toHaveTitle(/GSD at Work/);

    // Check meta description exists
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription?.length).toBeGreaterThan(0);
  });

  test('displays hero section', async ({ page }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });

    // Verify hero section exists
    const heroSection = await page.locator('div.pt-20').first();
    await expect(heroSection).toBeVisible();
  });

  test('displays services section', async ({ page }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });

    // Verify services section is present
    const servicesSection = await page.locator('.py-8').first();
    await expect(servicesSection).toBeVisible();
  });

  test('navigation menu is present', async ({ page, isMobile }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });

    if (isMobile) {
      // On mobile, check for mobile navigation button
      const mobileNavButton = await page.locator('button[data-testid="mobile-nav-button"]');
      await expect(mobileNavButton).toBeVisible();
    } else {
      // On desktop, check for nav element
      const nav = await page.locator('nav').first();
      await expect(nav).toBeVisible();
    }
  });

  test('has footer with contact information', async ({ page }) => {
    await page.goto('/', { 
      waitUntil: 'domcontentloaded',
      timeout: process.env.CI ? 60000 : 30000 
    });

    // Verify footer exists
    const footer = await page.locator('footer');
    await expect(footer).toBeVisible();
  });
});