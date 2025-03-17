# Get Stuff Done AI Codebase Guidelines

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Code Style Guidelines
- **Imports**: Use `@/` alias for src imports (e.g., `import { Button } from "@/components/ui/button"`)
- **Components**: React functional components with arrow function syntax and default exports
- **TypeScript**: Permissive config with `noImplicitAny`, `strictNullChecks`, and `noUnusedLocals` disabled
- **File Structure**: Features in pages/, reusable components in components/, hooks in hooks/
- **UI Components**: Follow shadcn/ui conventions with component-based architecture
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for files
- **State Management**: React Query for server state, React context for shared app state
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Routing**: React Router with kebab-case routes (e.g., `/ai-tooling-report`)