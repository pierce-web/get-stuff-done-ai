# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

## Known Security Exceptions

### esbuild Development Server Vulnerability (CVE-2024-29415)
- **Severity**: Medium
- **Package**: esbuild (via vite@5.4.19)
- **Impact**: Development server only - does NOT affect production builds
- **Details**: The esbuild development server has overly permissive CORS settings
- **Mitigation**: 
  - This vulnerability only affects local development servers
  - Production builds deployed to Netlify are not affected
  - Upgrading to vite@6+ would fix this but requires breaking changes
  - Accepted risk for development environment

## Reporting a Vulnerability

Please report security vulnerabilities to christian@gsdat.work

We will acknowledge receipt within 48 hours and provide a detailed response within 7 days.