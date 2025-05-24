import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
      '**/tests/**', // Exclude Playwright tests
      '**/*.spec.ts' // Exclude spec files
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: [
        'src/components/ai-report/**/*.{ts,tsx}',
        'src/components/services/**/*.{ts,tsx}',
        '!src/**/*.test.{ts,tsx}',
        '!src/**/*.d.ts'
      ],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        'src/vite-env.d.ts',
        'src/main.tsx',
        'src/**/*.stories.tsx',
        'tests/**',
        '**/*.spec.ts',
        '**/*.test.{ts,tsx}'
      ],
      thresholds: {
        lines: 20,
        functions: 40,
        branches: 50,
        statements: 20
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})