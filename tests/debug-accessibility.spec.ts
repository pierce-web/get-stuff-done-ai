import { test } from '@playwright/test';

test('Debug accessibility - find buttons without labels', async ({ page }) => {
  await page.goto('/');
  
  // Find all buttons that are visible in mobile viewport
  const buttons = await page.locator('button').all();
  
  console.log(`Found ${buttons.length} buttons`);
  
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const isVisible = await button.isVisible();
    
    if (isVisible) {
      const buttonInfo = await button.evaluate((el, index) => {
        const rect = el.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(el);
        return {
          index,
          tagName: el.tagName,
          className: el.className,
          id: el.id,
          innerHTML: el.innerHTML.substring(0, 200),
          textContent: el.textContent?.trim(),
          ariaLabel: el.getAttribute('aria-label'),
          title: el.getAttribute('title'),
          isVisible: rect.width > 0 && rect.height > 0,
          display: computedStyle.display,
          visibility: computedStyle.visibility,
          parentElement: {
            tagName: el.parentElement?.tagName,
            className: el.parentElement?.className,
            id: el.parentElement?.id
          }
        };
      }, i);
      
      const hasAccessibleName = buttonInfo.textContent || buttonInfo.ariaLabel || buttonInfo.title;
      
      if (!hasAccessibleName) {
        console.log('Button without accessible name:', JSON.stringify(buttonInfo, null, 2));
      }
    }
  }
});