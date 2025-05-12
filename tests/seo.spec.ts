import { test, expect } from '@playwright/test';

// Define key pages to test
const pagesToTest = [
  { path: '/', expectedTitleContent: 'Get Stuff Done' },
  { path: '/blog', expectedTitleContent: 'Professional Insights' },
];

test.describe('SEO Tests', () => {
  for (const { path, expectedTitleContent } of pagesToTest) {
    test(`${path} has basic SEO requirements`, async ({ page }) => {
      await page.goto(path);

      // 1. Check page has a title
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title).toContain(expectedTitleContent);

      // 2. Check for description meta tag
      const metaDescription = await page.locator('meta[name="description"]').first();
      await expect(metaDescription).toBeTruthy();

      const descriptionContent = await metaDescription.getAttribute('content');
      expect(descriptionContent?.length).toBeGreaterThan(10);

      // 3. Check viewport meta tag
      const viewportMeta = await page.locator('meta[name="viewport"]').first();
      await expect(viewportMeta).toBeTruthy();

      // 4. Check for canonical URL
      const canonicalLink = await page.locator('link[rel="canonical"]').first();
      const canonicalHref = await canonicalLink.getAttribute('href');
      expect(canonicalHref).toBeTruthy();
      expect(canonicalHref).toContain('gsdat.work');

      // 5. Check for some Open Graph tags (minimal set)
      const ogTitle = await page.locator('meta[property="og:title"]').first();
      await expect(ogTitle).toBeTruthy();

      const ogType = await page.locator('meta[property="og:type"]').first();
      await expect(ogType).toBeTruthy();

      // 6. Verify the page doesn't have a robots noindex tag
      const robotsNoindex = await page.locator('meta[name="robots"][content*="noindex"]').count();
      expect(robotsNoindex).toBe(0);
    });
  }
});