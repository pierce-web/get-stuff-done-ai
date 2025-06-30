import { describe, it, expect } from 'vitest'
import { services, valueMetrics } from './data'
import { ServiceType } from './types'

describe('services data', () => {
  it('contains exactly 5 services', () => {
    expect(services).toHaveLength(5)
  })

  it('all services have required fields', () => {
    services.forEach((service) => {
      // Required fields
      expect(service.title).toBeTruthy()
      expect(typeof service.title).toBe('string')
      
      expect(service.description).toBeTruthy()
      expect(typeof service.description).toBe('string')
      
      expect(service.price).toBeTruthy()
      expect(typeof service.price).toBe('string')
      
      expect(Array.isArray(service.features)).toBe(true)
      expect(service.features.length).toBeGreaterThan(0)
      
      expect(service.cta).toBeTruthy()
      expect(typeof service.cta).toBe('string')
      
      expect(service.secondaryCta).toBeTruthy()
      expect(typeof service.secondaryCta).toBe('string')
    })
  })

  it('all services have valid optional fields when present', () => {
    services.forEach((service) => {
      if (service.subtext) {
        expect(typeof service.subtext).toBe('string')
      }
      if (service.extraText) {
        expect(typeof service.extraText).toBe('string')
      }
      if (service.calendlyLink) {
        expect(typeof service.calendlyLink).toBe('string')
        expect(service.calendlyLink).toMatch(/^https:\/\/calendly\.com/)
      }
      if (service.learnMoreLink) {
        expect(typeof service.learnMoreLink).toBe('string')
        expect(service.learnMoreLink).toMatch(/^\//)
      }
    })
  })

  it('service prices follow expected patterns', () => {
    services.forEach((service) => {
      // Allow both dollar amounts and "Custom Pricing"
      expect(service.price).toMatch(/(\$[\d,]+|Custom Pricing)/)
    })
  })

  it('all services have at least 5 features', () => {
    services.forEach((service) => {
      expect(service.features.length).toBeGreaterThanOrEqual(5)
      // 10x Executive has 6 features due to team participation feature
      expect(service.features.length).toBeLessThanOrEqual(6)
      service.features.forEach((feature) => {
        expect(typeof feature).toBe('string')
        expect(feature.length).toBeGreaterThan(0)
      })
    })
  })

  it('contains expected workshop services', () => {
    const workshopTitles = services
      .filter(s => s.title.includes('Workshop') || s.title.includes('Session'))
      .map(s => s.title)
    
    expect(workshopTitles).toContain('AI Oracle Session')
    expect(workshopTitles).toContain('AI Action Workshop')
    expect(workshopTitles).toHaveLength(2)
  })

  it('contains expected program services', () => {
    const programTitles = services
      .filter(s => s.title.includes('Program') || s.title.includes('Executive') || s.title.includes('Integration'))
      .map(s => s.title)
    
    expect(programTitles).toContain('10x Effective Executive')
    expect(programTitles).toContain('AI Automation & Custom Integration')
    expect(programTitles).toContain('Triple-A Transformation Program')
    expect(programTitles).toHaveLength(3)
  })

  it('workshops have appropriate pricing', () => {
    const workshops = services.filter(s => s.title.includes('Workshop') || s.title === 'AI Oracle Session')
    workshops.forEach((workshop) => {
      if (workshop.title === 'AI Action Workshop') {
        expect(workshop.price).toBe('$4,999 per session')
        expect(workshop.subtext).toBe('Associate-led workshops also available - pricing varies')
      } else if (workshop.title === 'AI Oracle Session') {
        expect(workshop.price).toBe('$2,499 per session')
        expect(workshop.subtext).toBe('Executive Intelligence System')
      }
    })
  })

  it('all services have CTAs', () => {
    services.forEach((service) => {
      expect(service.cta).toBe('Learn More')
      expect(['Schedule a Consultation', 'Schedule a Strategy Call', 'Schedule Executive Briefing', 'Schedule Discovery Call']).toContain(service.secondaryCta)
    })
  })

  it('all services have learn more links pointing to correct routes', () => {
    const expectedRoutes = {
      'AI Oracle Session': '/ai-oracle-session',
      'AI Action Workshop': '/ai-action-workshop',
      '10x Effective Executive': '/10x-executive',
      'AI Automation & Custom Integration': '/ai-automation-integration',
      'Triple-A Transformation Program': '/triple-a-transformation'
    }

    services.forEach((service) => {
      expect(service.learnMoreLink).toBe(expectedRoutes[service.title])
    })
  })

  it('calendly links are valid and appropriate', () => {
    services.forEach((service) => {
      expect(service.calendlyLink).toBeDefined()
      if (service.title === '10x Effective Executive') {
        expect(service.calendlyLink).toBe('https://calendly.com/gsdatwork/10x-executive-consult')
      } else {
        expect(service.calendlyLink).toBe('https://calendly.com/gsdatwork/free-consult')
      }
    })
  })
})

describe('valueMetrics data', () => {
  it('contains exactly 5 value metrics', () => {
    expect(valueMetrics).toHaveLength(5)
  })

  it('all value metrics are non-empty strings', () => {
    valueMetrics.forEach((metric) => {
      expect(typeof metric).toBe('string')
      expect(metric.length).toBeGreaterThan(0)
    })
  })

  it('all metrics include specific outcomes', () => {
    valueMetrics.forEach((metric) => {
      expect(metric).toMatch(/\(e\.g\.,.*\)/)
    })
  })

  it('metrics cover expected categories', () => {
    const categories = ['cost reduction', 'revenue impact', 'Productivity gains', 'Time saved', 'ROI delivered']
    categories.forEach((category) => {
      const hasCategory = valueMetrics.some(metric => metric.includes(category))
      expect(hasCategory).toBe(true)
    })
  })
})