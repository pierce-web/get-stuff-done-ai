# Testing Guide for Get Stuff Done AI

This document provides information about the testing infrastructure and how to run and write tests for the project.

## Test Types

The project includes several types of tests:

1. **Functional Tests**: Basic tests for page content and navigation
2. **SEO Tests**: Validate SEO metadata and requirements
3. **Accessibility Tests**: Check for basic a11y compliance
4. **Performance Tests**: Track key performance metrics

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in UI mode (for debugging)
npm run test:ui

# Run tests in headed browser mode
npm run test:headed

# Run only SEO tests
npm run test:seo

# Run only accessibility tests
npm run test:a11y

# Run only performance tests
npm run test:perf

# Run CI tests (Chromium only)
npm run test:ci

# Interactive test runner
npm run test:run
```

### Testing Environment Variables

The test configuration supports these environment variables:

- `BASE_URL`: Override the base URL for tests (default: https://gsdat.work)
- `USE_DEV_SERVER`: Set to "1" to start a local dev server for testing

Example:
```bash
# Test against local dev server
USE_DEV_SERVER=1 npm test

# Test against staging environment
BASE_URL=https://staging.gsdat.work npm test
```

## Writing Tests

### Test Structure

Tests are organized by feature area:

- `homepage.spec.ts`: Tests for the homepage content
- `navigation.spec.ts`: Tests for site navigation
- `seo.spec.ts`: Tests for SEO requirements
- `accessibility.spec.ts`: Tests for a11y compliance
- `performance.spec.ts`: Tests for performance metrics

### Best Practices

1. **Resilient Selectors**: Use data attributes when possible
2. **Meaningful Assertions**: Write assertions that explain what's being tested
3. **Independent Tests**: Each test should be independent and not rely on other tests
4. **Minimal Waiting**: Use Playwright's auto-waiting instead of arbitrary waits
5. **Clear Test Names**: Use descriptive test names to improve test reports

Example:
```typescript
test('navigation menu has all required links', async ({ page }) => {
  await page.goto('/');
  
  // Use data attributes for more reliable selectors
  const navLinks = await page.locator('[data-testid="nav-link"]').all();
  
  // Verify required links exist
  const linkTexts = await Promise.all(navLinks.map(link => link.textContent()));
  expect(linkTexts).toContain('Home');
  expect(linkTexts).toContain('Services');
  expect(linkTexts).toContain('About');
  expect(linkTexts).toContain('Blog');
});
```

## CI/CD Integration

Tests run automatically on:

1. Pull requests to `main`
2. Pushes to `main`

The GitHub workflow:
- Runs linting first
- Runs tests in Chromium (for speed)
- Uploads test reports as artifacts

## Pre-commit Hooks

The project uses Husky to run critical tests before commit:

- Linting runs on every commit
- SEO tests run on every commit

This helps catch basic issues early.

## Maintenance and Troubleshooting

### Updating Playwright

```bash
npm install @playwright/test@latest
npx playwright install
```

### Debugging Tips

1. **Use UI Mode**: `npm run test:ui` for visual debugging
2. **Check Test Reports**: `npx playwright show-report`
3. **Enable Traces**: Set `trace: 'retain-on-failure'` in the config
4. **Visual Comparisons**: Use `await expect(page).toHaveScreenshot()` for visual regression tests

## Next Steps and Improvements

Potential improvements to the test suite:

1. **Visual Regression Testing**: Add screenshot comparison tests
2. **API Testing**: Add tests for any API endpoints
3. **Cross-browser Coverage**: Expand tests to cover more browser-specific behaviors
4. **Load Testing**: Add load testing for key user journeys
5. **Mocking**: Add data mocking for more consistent test results