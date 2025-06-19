# Associate Pricing Fix Plan

## Objective
Update website to remove fixed associate pricing ($1,199) and replace with flexible "pricing varies" messaging.

## Current State
- AI Action Workshop shows "Starting at $1,199" with two tiers
- Associate workshops priced at $1,199
- Founder workshops at $2,499

## Target State
- AI Action Workshop: $2,499
- Add line: "Associate-led workshops also available - pricing varies"
- Remove all $1,199 references
- Keep associate quality messaging

## Execution Plan

### 1. Update Service Data (`src/components/services/data.ts`)
- Change price from "Starting at $1,199" to "$2,499 per session"
- Remove pricingTiers array
- Update subtext to mention associates available

### 2. Update AI Action Workshop Page (`src/pages/AIActionWorkshop.tsx`)
- Remove "Choose Your Workshop Leader" pricing section
- Add simple text about associate availability
- Update SEO/meta tags to remove $1,199
- Keep GSD Associates explanation section

### 3. Update Components
- **ServiceCard.tsx**: Keep pricing tier functionality (for future use)
- **EngagementLevels.tsx**: Change "$1,199" references to "competitive rates"
- **Navigation**: Remove "From $1,199" badge

### 4. Update Service Comparison/Recommendation
- Change "Starting at $1,199" to "$2,499"
- Add note about associate availability

### 5. Update About Page
- Keep associate program explanation
- No pricing specifics

## Files to Modify
1. `/src/components/services/data.ts`
2. `/src/pages/AIActionWorkshop.tsx`
3. `/src/components/EngagementLevels.tsx`
4. `/src/components/navigation/DesktopNavigation.tsx`
5. `/src/components/internal-linking/ServiceRecommendation.tsx`
6. `/src/components/internal-linking/ServiceComparison.tsx`

## Testing
- Build and verify all pages
- Check all pricing displays
- Ensure associate messaging remains positive