import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('Homepage loads within performance budget', async ({ page }) => {
    // Enable performance metrics
    await page.goto('/');
    
    // Get performance timing metrics
    const performanceTimings = await page.evaluate(() => {
      const perfEntries = performance.getEntriesByType('navigation');
      return perfEntries.length > 0 ? perfEntries[0] : null;
    });
    
    if (performanceTimings) {
      // Log performance metrics
      console.log('DOM Content Loaded:', performanceTimings.domContentLoadedEventEnd - performanceTimings.domContentLoadedEventStart, 'ms');
      console.log('Total page load time:', performanceTimings.loadEventEnd - performanceTimings.startTime, 'ms');
      console.log('Time to first byte:', performanceTimings.responseStart - performanceTimings.requestStart, 'ms');
      
      // Test performance expectations
      // These thresholds should be adjusted based on your performance goals
      expect(performanceTimings.domContentLoadedEventEnd - performanceTimings.domContentLoadedEventStart).toBeLessThan(300);
      expect(performanceTimings.loadEventEnd - performanceTimings.startTime).toBeLessThan(5000);
    } else {
      console.log('Performance metrics not available');
    }
    
    // Check for Largest Contentful Paint (approximate using a simple test)
    const lcpCandidate = await page.evaluate(() => {
      // Wait a bit for LCP to occur
      return new Promise(resolve => {
        setTimeout(() => {
          // Get all large elements that could be LCP candidates
          const candidates = Array.from(document.querySelectorAll('img, svg, video, canvas, [role="img"], div')).filter(el => {
            const rect = el.getBoundingClientRect();
            return rect.width * rect.height > 50000; // Large elements
          });
          
          resolve(candidates.length > 0);
        }, 1000);
      });
    });
    
    expect(lcpCandidate).toBeTruthy();
    
    // Test if page becomes interactive quickly
    const isInteractive = await page.evaluate(() => {
      return new Promise(resolve => {
        // Check if page responds to events
        window.addEventListener('click', () => resolve(true), { once: true });
        setTimeout(() => {
          document.body.click();
        }, 100);
        
        // Fallback in case click doesn't trigger
        setTimeout(() => resolve(false), 1000);
      });
    });
    
    expect(isInteractive).toBeTruthy();
  });
});