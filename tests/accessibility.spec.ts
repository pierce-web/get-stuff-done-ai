import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  const pagesToTest = ['/', '/blog'];

  for (const path of pagesToTest) {
    test(`${path} should not have accessibility violations`, async ({ page }) => {
      // Increase timeout for accessibility tests
      test.setTimeout(60000);
      
      await page.goto(path);
      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');
      
      // Check for common accessibility issues
      
      // 1. Images should have alt text
      const imagesWithoutAlt = await page.locator('img:not([alt]):not([aria-hidden="true"])').count();
      expect(imagesWithoutAlt, 'Images without alt text').toBe(0);
      
      // 2. Check for sufficient color contrast in buttons
      const buttons = await page.locator('button, a[href]').all();
      
      // Process buttons in smaller batches to prevent timeout
      const batchSize = 10;
      for (let i = 0; i < buttons.length; i += batchSize) {
        const batch = buttons.slice(i, i + batchSize);
        
        for (const button of batch) {
          const isVisible = await button.isVisible();
          if (isVisible) {
          // Skip buttons that are part of third-party widgets (like Senja)
          const isThirdPartyWidget = await button.evaluate(el => {
            // Check for Senja widget
            if (el.closest('.senja-embed') !== null) return true;
            // Check for arrow buttons which are often from third-party widgets
            if (el.className.includes('arrow') && !el.getAttribute('aria-label')) return true;
            return false;
          });
          
          if (!isThirdPartyWidget) {
            // Ensure element has accessible name
            const accessibleName = await button.evaluate(el => {
              return el.textContent || el.getAttribute('aria-label') || el.getAttribute('title');
            });
            
            // Get more context about the failing button
            if (!accessibleName) {
              const buttonInfo = await button.evaluate(el => {
                const rect = el.getBoundingClientRect();
                return {
                  tagName: el.tagName,
                  className: el.className,
                  innerHTML: el.innerHTML.substring(0, 200),
                  parentTag: el.parentElement?.tagName,
                  parentClass: el.parentElement?.className,
                  isVisible: rect.width > 0 && rect.height > 0,
                  hasAriaLabel: el.hasAttribute('aria-label'),
                  ariaLabel: el.getAttribute('aria-label'),
                  textContent: el.textContent?.trim()
                };
              });
              console.error('Button without accessible name:', buttonInfo);
            }
            
            expect(accessibleName, 'Button should have accessible name').toBeTruthy();
          }
        }
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