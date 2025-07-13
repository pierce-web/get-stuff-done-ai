# Test Coverage Improvement Plan

## Current State (5.33% Coverage)

### Well-Tested Areas
- **Services Components**: 78.62% coverage ✅
- **Budget Calculations**: Core logic tested ✅
- **Form Components**: Some coverage exists

### Critical Gaps (0% Coverage)
1. **Navigation Components** - Users can't navigate without these!
2. **All Page Components** - 13 pages with zero tests
3. **UI Component Library** - 47 reusable components untested
4. **Utility Functions** - Easy wins with high value
5. **Hooks** - Critical for state management
6. **Blog/SEO Components** - Important for discoverability

## Prioritized Action Plan

### Phase 1: Critical Path Coverage (Target: 20% overall)
**Timeline**: 1-2 days
**Goal**: Test components that would break the entire site

1. **Navigation Components** (282 lines)
   - [ ] DesktopNavigation.test.tsx
   - [ ] MobileNavigation.test.tsx
   - [ ] Navigation.test.tsx

2. **Core Utilities** (179 lines in lib/)
   - [ ] utils.test.ts
   - [ ] form-utils.test.ts
   - [ ] seo-utils.test.ts

3. **Critical Hooks** (184 lines)
   - [ ] use-toast.test.ts
   - [ ] use-mobile.test.tsx
   - [ ] use-intersection-observer.test.tsx

### Phase 2: Page Component Basics (Target: 35% overall)
**Timeline**: 2-3 days
**Goal**: Basic render tests for all pages

1. **High-Traffic Pages**
   - [ ] Index.test.tsx
   - [ ] Cases.test.tsx
   - [ ] HireScope.test.tsx
   - [ ] AIActionWorkshop.test.tsx

2. **Blog Pages**
   - [ ] blog/index.test.tsx
   - [ ] blog/[id].test.tsx

### Phase 3: UI Component Library (Target: 50% overall)
**Timeline**: 3-4 days
**Goal**: Test reusable components

1. **Most Used Components**
   - [ ] Button.test.tsx
   - [ ] Card.test.tsx
   - [ ] Dialog.test.tsx
   - [ ] Form components

2. **Layout Components**
   - [ ] Hero.test.tsx
   - [ ] Footer.test.tsx
   - [ ] About.test.tsx

### Phase 4: Integration Tests (Target: 60% overall)
**Timeline**: 1 week
**Goal**: Test user workflows

1. **Critical User Paths**
   - [ ] Navigation flow
   - [ ] Form submissions
   - [ ] Workshop registration
   - [ ] Blog reading experience

## Quick Wins (Can do immediately)

### 1. Update Coverage Thresholds
Lower thresholds temporarily to allow CI to pass while improving:

```typescript
thresholds: {
  lines: 5,      // Current: 5.33%
  functions: 15, // Current: 18.68%
  branches: 30,  // Current: 33.02%
  statements: 5  // Current: 5.33%
}
```

### 2. Add Basic Component Tests
Template for quick component tests:

```typescript
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <ComponentName />
      </BrowserRouter>
    );
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });
});
```

## Recommended Approach

1. **Start Small**: Pick 3-5 critical components
2. **Focus on User Impact**: Test what breaks the site
3. **Iterate**: Add tests with each PR
4. **Automate**: Require tests for new features

## Do We Need 100% Coverage?

**No!** Aim for:
- **60-70%** overall coverage
- **80%+** for business logic
- **50%+** for UI components
- **90%+** for utilities

## Next Steps

1. Update coverage thresholds (immediate)
2. Add navigation tests (high priority)
3. Test critical utilities (easy wins)
4. Gradually improve with each PR

Remember: The goal is **confidence**, not perfection!