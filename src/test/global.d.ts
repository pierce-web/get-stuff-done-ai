
// Global type definitions for testing
import type { vi } from 'vitest'

declare global {
  var vi: typeof vi
  var beforeEach: typeof import('vitest').beforeEach
  var describe: typeof import('vitest').describe
  var it: typeof import('vitest').it
  var expect: typeof import('vitest').expect
}

interface Window {
  // HubSpot
  hbspt?: {
    forms: {
      create: (config: any) => any
    }
  }
  
  // Google Analytics
  gtag?: (...args: any[]) => void
  
  // Vector Analytics
  vector?: {
    load: (...args: any[]) => void
    identify: (userId: string, traits?: any) => void
    page: (name?: string, properties?: any) => void
    track: (event: string, properties?: any) => void
  }
  
  // Hotjar
  hj?: (...args: any[]) => void
  
  // Other analytics
  analytics?: any
  _hsq?: any[]
}

// Extend NodeJS global for tests
declare global {
  var mockAnalytics: {
    gtag: jest.Mock
    vector: {
      load: jest.Mock
      identify: jest.Mock
      page: jest.Mock
      track: jest.Mock
    }
    hj: jest.Mock
  }
}

export {}
