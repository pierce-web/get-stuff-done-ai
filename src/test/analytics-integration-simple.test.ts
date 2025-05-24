import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// Analytics helper functions
export const trackFormView = (formId: string) => {
  const gtag = (window as any).gtag
  const vector = (window as any).vector
  
  if (gtag) {
    gtag('event', 'form_view', {
      form_id: formId,
      form_type: 'workshop_registration',
    })
  }
  
  if (vector) {
    vector.track('Form Viewed', {
      formId: formId,
      formType: 'workshop_registration',
    })
  }
}

export const trackFormSubmission = (formId: string, formData: any) => {
  const gtag = (window as any).gtag
  const vector = (window as any).vector
  const hj = (window as any).hj
  
  if (gtag) {
    gtag('event', 'form_submit', {
      form_id: formId,
      form_type: 'workshop_registration',
      value: 1,
    })
  }
  
  if (vector) {
    vector.track('Form Submitted', {
      formId: formId,
      formType: 'workshop_registration',
      email: formData.email,
    })
  }
  
  if (hj) {
    hj('event', 'workshop_form_submitted')
  }
}

describe('Analytics Integration', () => {
  beforeEach(() => {
    // Setup global mocks
    (window as any).gtag = vi.fn();
    (window as any).vector = {
      track: vi.fn(),
      identify: vi.fn(),
    };
    (window as any).hj = vi.fn();
  })

  afterEach(() => {
    delete (window as any).gtag
    delete (window as any).vector
    delete (window as any).hj
  })

  describe('trackFormView', () => {
    it('tracks form view in Google Analytics', () => {
      trackFormView('test-form-123')
      
      expect((window as any).gtag).toHaveBeenCalledWith('event', 'form_view', {
        form_id: 'test-form-123',
        form_type: 'workshop_registration',
      })
    })

    it('tracks form view in Vector', () => {
      trackFormView('test-form-123')
      
      expect((window as any).vector.track).toHaveBeenCalledWith('Form Viewed', {
        formId: 'test-form-123',
        formType: 'workshop_registration',
      })
    })
  })

  describe('trackFormSubmission', () => {
    const testFormData = {
      email: 'test@example.com',
      firstname: 'John',
      lastname: 'Doe',
    }

    it('tracks form submission in Google Analytics', () => {
      trackFormSubmission('test-form-123', testFormData)
      
      expect((window as any).gtag).toHaveBeenCalledWith('event', 'form_submit', {
        form_id: 'test-form-123',
        form_type: 'workshop_registration',
        value: 1,
      })
    })

    it('tracks form submission in Vector', () => {
      trackFormSubmission('test-form-123', testFormData)
      
      expect((window as any).vector.track).toHaveBeenCalledWith('Form Submitted', {
        formId: 'test-form-123',
        formType: 'workshop_registration',
        email: 'test@example.com',
      })
    })

    it('tracks event in Hotjar', () => {
      trackFormSubmission('test-form-123', testFormData)
      
      expect((window as any).hj).toHaveBeenCalledWith('event', 'workshop_form_submitted')
    })
  })

  describe('Analytics graceful degradation', () => {
    it('handles missing analytics providers gracefully', () => {
      delete (window as any).gtag
      delete (window as any).vector
      delete (window as any).hj
      
      expect(() => trackFormView('test-form')).not.toThrow()
      expect(() => trackFormSubmission('test-form', {})).not.toThrow()
    })
  })
})