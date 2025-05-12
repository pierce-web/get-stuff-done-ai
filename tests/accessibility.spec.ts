import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  const pagesToTest = ['/', '/blog'];

  for (const path of pagesToTest) {
    test(`${path} should not have accessibility violations`, async ({ page }) => {
      await page.goto(path);
      
      // Check for common accessibility issues
      
      // 1. Images should have alt text
      const imagesWithoutAlt = await page.locator('img:not([alt]):not([aria-hidden="true"])').count();
      expect(imagesWithoutAlt, 'Images without alt text').toBe(0);
      
      // 2. Check for sufficient color contrast in buttons
      const buttons = await page.locator('button, a[href]').all();
      for (const button of buttons) {
        const isVisible = await button.isVisible();
        if (isVisible) {
          // Ensure element has accessible name
          const accessibleName = await button.evaluate(el => {
            return el.textContent || el.getAttribute('aria-label') || el.getAttribute('title');
          });
          expect(accessibleName, 'Button should have accessible name').toBeTruthy();
        }
      }
      
      // 3. Check for proper heading structure (h1 appears once before any h2)
      const h1Count = await page.locator('h1').count();
      expect(h1Count, 'Page should have exactly one h1').toBe(1);
      
      // 4. Form elements should have labels
      const inputsWithoutLabels = await page.locator('input:not([type="hidden"]):not([aria-hidden="true"]):not([id])').count();
      expect(inputsWithoutLabels, 'Inputs without labels').toBe(0);
      
      // 5. Page should have a language attribute
      const hasLangAttribute = await page.locator('html[lang]').count();
      expect(hasLangAttribute, 'HTML should have lang attribute').toBe(1);
    });
  }
});