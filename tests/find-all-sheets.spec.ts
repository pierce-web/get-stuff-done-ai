import { test } from '@playwright/test';

test('Find all Sheet triggers', async ({ page }) => {
  await page.goto('/');
  
  // Find all buttons with aria-haspopup="dialog"
  const sheetTriggers = await page.locator('button[aria-haspopup="dialog"]').all();
  
  console.log(`Found ${sheetTriggers.length} sheet triggers`);
  
  for (let i = 0; i < sheetTriggers.length; i++) {
    const trigger = sheetTriggers[i];
    const triggerInfo = await trigger.evaluate((el, index) => {
      const rect = el.getBoundingClientRect();
      return {
        index,
        className: el.className,
        innerHTML: el.innerHTML.substring(0, 200),
        ariaLabel: el.getAttribute('aria-label'),
        title: el.getAttribute('title'),
        textContent: el.textContent?.trim(),
        isVisible: rect.width > 0 && rect.height > 0,
        parent: {
          tagName: el.parentElement?.tagName,
          className: el.parentElement?.className
        }
      };
    }, i);
    
    console.log(`Sheet trigger ${i}:`, JSON.stringify(triggerInfo, null, 2));
  }
});