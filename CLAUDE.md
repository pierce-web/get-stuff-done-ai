# Get Stuff Done AI Codebase Guidelines

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## CI/CD Workflow
- **Development**: Create feature branches from `main` (e.g., `feature/my-feature`)
- **Pull Requests**: All changes should be submitted via PR to `main`
- **Checks**: Linting and build verification run automatically on PRs
- **Preview**: Netlify creates preview deployments for all branches and PRs
- **Production**: Merging to `main` automatically deploys to production
- **Branches**: Delete feature branches after merging

## Code Style Guidelines
- **Imports**: Use `@/` alias for src imports (e.g., `import { Button } from "@/components/ui/button"`)
- **Components**: React functional components with arrow function syntax and default exports
- **Component Structure**: Prefer breaking down large components into smaller, focused components
- **Data Organization**: Separate data and types into dedicated files (e.g., `data.ts`, `types.ts`)
- **TypeScript**: Permissive config with `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals` disabled
- **File Structure**: 
  - Pages in `/pages`
  - Reusable components in `/components`
  - Feature-specific components in dedicated folders (e.g., `/components/services`, `/components/navigation`)
  - Hooks in `/hooks`
- **UI Components**: Follow shadcn/ui conventions with component-based architecture
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files
- **State Management**: React Query for server state, React context for shared app state
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Routing**: React Router with kebab-case routes (e.g., `/ai-tooling-report`, `/triple-a-transformation`)

## Design System
- **Design Tokens**: Use design tokens from `@/lib/design-tokens.ts` instead of hardcoding styles
- **Shadows**: Use consistent shadow classes (e.g., `shadows.buttonEffect`, `shadows.cardEffect`)
- **Gradients**: Use predefined gradients (e.g., `gradients.primaryLight`, `gradients.secondaryStrong`)
- **Buttons**: Apply consistent button styling (e.g., `buttonStyles.primary`, `buttonStyles.outline.secondary`)
- **Spacing**: Use standard spacing values (e.g., `spacing.section.md`)
- **Animations**: Use standard animation classes (e.g., `animations.fadeIn`, `animations.transition`)
- **Borders**: Use standard border radii (e.g., `borderRadius.md`, `borderRadius.full`)