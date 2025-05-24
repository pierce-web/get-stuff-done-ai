import { vi } from 'vitest'

export interface HubSpotFormConfig {
  portalId: string
  formId: string
  region?: string
  target?: string
  onFormReady?: (form: any) => void
  onFormSubmit?: (form: any) => void
  onFormSubmitted?: (form: any) => void
}

export interface MockHubSpotForm {
  $form: any
  guid: string
  portalId: string
}

// Track created forms for testing
export const createdForms: HubSpotFormConfig[] = []

// Mock form instance
export const createMockForm = (config: HubSpotFormConfig): MockHubSpotForm => {
  const mockForm = {
    $form: {
      find: vi.fn(),
      on: vi.fn(),
    },
    guid: config.formId,
    portalId: config.portalId,
  }

  // Simulate async form ready
  if (config.onFormReady) {
    setTimeout(() => config.onFormReady!(mockForm), 0)
  }

  return mockForm
}

// Mock HubSpot global object
export const mockHubSpot = {
  forms: {
    create: vi.fn((config: HubSpotFormConfig) => {
      createdForms.push(config)
      
      // Find the target element
      const targetSelector = config.target || `.hs-form-frame[data-form-id="${config.formId}"]`
      const targetElement = document.querySelector(targetSelector)
      
      if (targetElement) {
        // Simulate form injection
        targetElement.innerHTML = `
          <form class="hs-form" data-form-id="${config.formId}">
            <div class="hs-form-field">
              <label for="email">Email*</label>
              <input type="email" name="email" required />
            </div>
            <div class="hs-form-field">
              <label for="firstname">First Name*</label>
              <input type="text" name="firstname" required />
            </div>
            <div class="hs-form-field">
              <label for="lastname">Last Name*</label>
              <input type="text" name="lastname" required />
            </div>
            <div class="hs-form-field">
              <label for="company">Company</label>
              <input type="text" name="company" />
            </div>
            <div class="hs-submit">
              <button type="submit" class="hs-button">Submit</button>
            </div>
          </form>
        `
        
        // Add submit handler
        const form = targetElement.querySelector('form')
        if (form) {
          form.addEventListener('submit', (e) => {
            e.preventDefault()
            
            // Call onFormSubmit callback
            if (config.onFormSubmit) {
              config.onFormSubmit(createMockForm(config))
            }
            
            // Simulate submission delay
            setTimeout(() => {
              // Show success message
              targetElement.innerHTML = `
                <div class="hs-form-success">
                  <h3>Thank you!</h3>
                  <p>Your submission has been received.</p>
                </div>
              `
              
              // Call onFormSubmitted callback
              if (config.onFormSubmitted) {
                config.onFormSubmitted(createMockForm(config))
              }
            }, 500)
          })
        }
      }
      
      return createMockForm(config)
    }),
  },
}

// Helper to reset mocks between tests
export const resetHubSpotMocks = () => {
  createdForms.length = 0
  mockHubSpot.forms.create.mockClear()
}

// Helper to simulate form submission
export const submitHubSpotForm = (formId: string) => {
  const form = document.querySelector(`form[data-form-id="${formId}"]`) as HTMLFormElement
  if (form) {
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(submitEvent)
  }
}

// Helper to fill form fields
export const fillHubSpotForm = (formId: string, data: Record<string, string>) => {
  const form = document.querySelector(`form[data-form-id="${formId}"]`)
  if (form) {
    Object.entries(data).forEach(([name, value]) => {
      const input = form.querySelector(`input[name="${name}"]`) as HTMLInputElement
      if (input) {
        input.value = value
        input.dispatchEvent(new Event('change', { bubbles: true }))
      }
    })
  }
}