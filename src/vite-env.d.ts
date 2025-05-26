/// <reference types="vite/client" />

// Extend Window interface for analytics
interface Window {
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
  
  // HubSpot
  hbspt?: {
    forms: {
      create: (config: any) => any
    }
  }
  
  // Other analytics
  analytics?: any
  _hsq?: any[]
  
  // Swan tracking
  swan?: any[]
}
