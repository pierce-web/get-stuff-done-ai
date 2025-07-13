# Testing Strategy

## Overview

This document outlines our testing strategy to ensure code quality and prevent regressions.

## Test Environments

### 1. Local Development
- **When**: During development on your machine
- **URL**: `http://localhost:5173` (Vite dev server)
- **Command**: `npm test`
- **Purpose**: Fast feedback loop for developers

### 2. Pull Request Testing (CI)
- **When**: On every PR before merge
- **URL**: Netlify preview deployment URL
- **Command**: Runs automatically via GitHub Actions
- **Purpose**: Validate changes before merging

### 3. Production Monitoring (Optional)
- **When**: After deployment to production
- **URL**: `https://gsdat.work`
- **Command**: `npm run test:production`
- **Purpose**: Smoke tests to ensure production is healthy

## Running Tests

### Local Development

```bash
# Run all tests (starts dev server automatically)
npm test

# Run specific test suites
npm run test:a11y        # Accessibility tests
npm run test:seo         # SEO tests
npm run test:unit        # Unit tests
npm run test:coverage    # Unit tests with coverage

# Run tests in UI mode for debugging
npm run test:ui
```

### Testing Against Different Environments

```bash
# Test against local dev server (default)
npm test

# Test against staging/preview URL
BASE_URL=https://deploy-preview-123--your-site.netlify.app npm test

# Test against production (use sparingly)
BASE_URL=https://gsdat.work npm test
```

## CI/CD Pipeline

### GitHub Actions Workflow

1. **Install dependencies**
2. **Run linting**
3. **Build project**
4. **Wait for Netlify preview deployment**
5. **Run tests against preview URL**
6. **Upload test results**

### Netlify Integration

The CI pipeline automatically:
1. Waits for Netlify to create a preview deployment
2. Uses that preview URL for testing
3. Comments on the PR with test results

## Writing Tests

### E2E Tests (Playwright)

```typescript
test('should have accessible navigation', async ({ page }) => {
  await page.goto('/');
  const navButton = page.locator('button[aria-label="Open navigation menu"]');
  await expect(navButton).toBeVisible();
  await expect(navButton).toHaveAttribute('aria-label', 'Open navigation menu');
});
```

### Unit Tests (Vitest)

```typescript
describe('BudgetCalculator', () => {
  it('should calculate correct totals', () => {
    const result = calculateBudget({ employees: 10, tier: 'professional' });
    expect(result.total).toBe(1250);
  });
});
```

## Best Practices

1. **Test Locally First**: Always run tests locally before pushing
2. **Keep Tests Fast**: Use data-testid attributes for reliable element selection
3. **Test User Journeys**: Focus on critical user paths
4. **Accessibility First**: Ensure all interactive elements are accessible
5. **Avoid Flaky Tests**: Use proper wait conditions, not arbitrary timeouts

## Troubleshooting

### Tests Pass Locally but Fail in CI

1. Check if you're testing against the right URL
2. Ensure all environment variables are set
3. Look for timing issues (CI might be slower)

### Accessibility Tests Failing

1. Check for missing aria-labels
2. Ensure proper heading hierarchy
3. Verify color contrast ratios

### Tests Can't Find Elements

1. Use more specific selectors
2. Add data-testid attributes
3. Check if elements are actually visible

## Environment Variables

- `BASE_URL`: Override the test URL
- `CI`: Set by GitHub Actions, changes test behavior
- `PLAYWRIGHT_BASE_URL`: Alternative way to set test URL
- `DEPLOY_PRIME_URL`: Set by Netlify for preview deployments