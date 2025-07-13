import { test } from '@playwright/test';

test('Debug mobile navigation button', async ({ page }) => {
  await page.goto('/');
  
  // Look specifically for the mobile navigation button
  const mobileNavButton = page.locator('button.md\\:hidden').first();
  
  // Wait for it to be visible
  await mobileNavButton.waitFor({ state: 'visible' });
  
  // Get detailed information about the button
  const buttonInfo = await mobileNavButton.evaluate(el => {
    const attributes = {};
    for (const attr of el.attributes) {
      attributes[attr.name] = attr.value;
    }
    
    return {
      tagName: el.tagName,
      className: el.className,
      attributes,
      innerHTML: el.innerHTML,
      textContent: el.textContent,
      hasAriaLabel: el.hasAttribute('aria-label'),
      ariaLabel: el.getAttribute('aria-label'),
      title: el.getAttribute('title'),
      // Check parent elements
      parent: {
        tagName: el.parentElement?.tagName,
        className: el.parentElement?.className
      }
    };
  });
  
  console.log('Mobile navigation button details:', JSON.stringify(buttonInfo, null, 2));
  
  // Check if it's actually the MobileNavigation component
  const hasSvgMenu = await mobileNavButton.locator('svg.lucide').count() > 0;
  console.log('Has menu SVG icon:', hasSvgMenu);
  
  // Check for sr-only text
  const srOnlyText = await mobileNavButton.locator('.sr-only').textContent();
  console.log('SR-only text:', srOnlyText);
});