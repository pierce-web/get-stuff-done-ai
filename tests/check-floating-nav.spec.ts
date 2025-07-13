import { test } from '@playwright/test';

test('Check FloatingNavigation accessibility', async ({ page }) => {
  await page.goto('/ai-tooling-report');
  
  // Wait for the page to load and scroll to show floating navigation
  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(500);
  
  // Find the floating navigation button
  const floatingNavButton = await page.locator('button.bg-secondary.shadow-lg').first();
  
  if (await floatingNavButton.isVisible()) {
    const buttonInfo = await floatingNavButton.evaluate(el => {
      const attributes = {};
      for (const attr of el.attributes) {
        attributes[attr.name] = attr.value;
      }
      
      return {
        tagName: el.tagName,
        className: el.className,
        attributes,
        innerHTML: el.innerHTML.substring(0, 200),
        textContent: el.textContent,
        hasAriaLabel: el.hasAttribute('aria-label'),
        ariaLabel: el.getAttribute('aria-label'),
        title: el.getAttribute('title')
      };
    });
    
    console.log('FloatingNavigation button:', JSON.stringify(buttonInfo, null, 2));
  } else {
    console.log('FloatingNavigation button not visible');
  }
});