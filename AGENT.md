# Get Stuff Done AI - Agent Guidelines

## Build/Test Commands
- **Development**: `npm run dev` (Vite server on port 8080)
- **Build**: `npm run build` (production), `npm run build:dev` (development)
- **Lint**: `npm run lint` (ESLint)
- **Preview**: `npm run preview` (production build preview)
- **Test E2E**: `playwright test` or specific tests like `npm run test:seo`, `npm run test:a11y`
- **Test Unit**: `npm run test:unit` (Vitest), `npm run test:unit:watch`, `npm run test:unit:coverage`
- **Single Test**: `playwright test tests/specific-test.spec.ts` or `vitest run src/path/to/test.test.tsx`

## Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Routing**: React Router with kebab-case routes (`/ai-tooling-report`, `/triple-a-transformation`)
- **State**: React Query for server state, React Context for app state
- **UI**: shadcn/ui components + Radix UI primitives
- **Styling**: Tailwind CSS with design tokens in `@/lib/design-tokens.ts`
- **Testing**: Playwright (E2E), Vitest (unit tests with jsdom)

## Code Style
- **Imports**: Use `@/` alias for src imports (`import { Button } from "@/components/ui/button"`)
- **Components**: React functional components with arrow functions and default exports
- **Naming**: PascalCase components, camelCase functions/variables, kebab-case files
- **TypeScript**: Permissive config - `noImplicitAny`, `strictNullChecks`, `noUnusedLocals` disabled
- **Structure**: Pages in `/pages`, reusable components in `/components`, hooks in `/hooks`
