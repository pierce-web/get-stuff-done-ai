import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FormSection } from './FormSection'

describe('FormSection', () => {
  it('renders the form section with correct structure', () => {
    render(<FormSection />)
    
    // Check section exists
    const section = screen.getByText('Get Instant Access to the Full Webinar Recording').closest('section')
    expect(section).toBeInTheDocument()
    expect(section).toHaveClass('py-16', 'bg-blue-50')
  })

  it('displays the correct heading and description', () => {
    render(<FormSection />)
    
    expect(screen.getByText('Get Instant Access to the Full Webinar Recording')).toBeInTheDocument()
    expect(screen.getByText(/Enter your details below to watch the complete session/)).toBeInTheDocument()
  })

  it('renders HubSpot form container with correct attributes', () => {
    const { container } = render(<FormSection />)
    
    const formContainer = container.querySelector('.hs-form-frame')
    expect(formContainer).toBeInTheDocument()
    expect(formContainer).toHaveAttribute('data-region', 'na2')
    expect(formContainer).toHaveAttribute('data-form-id', '1272eebe-26a6-408b-b5fc-8aea7251513e')
    expect(formContainer).toHaveAttribute('data-portal-id', '242078229')
  })

  it('displays privacy notice', () => {
    render(<FormSection />)
    
    expect(screen.getByText(/We respect your privacy/)).toBeInTheDocument()
    expect(screen.getByText(/Your information will only be used/)).toBeInTheDocument()
  })

  it('has correct styling and layout classes', () => {
    const { container } = render(<FormSection />)
    
    // Check container structure
    const mainContainer = container.querySelector('.container.mx-auto')
    expect(mainContainer).toBeInTheDocument()
    
    // Check card styling
    const card = container.querySelector('.bg-white.rounded-xl.shadow-md')
    expect(card).toBeInTheDocument()
    expect(card).toHaveClass('p-8', 'border', 'border-gray-100')
  })

  it('has responsive max-width constraint', () => {
    const { container } = render(<FormSection />)
    
    const formWrapper = container.querySelector('.max-w-3xl')
    expect(formWrapper).toBeInTheDocument()
    expect(formWrapper).toHaveClass('mx-auto')
  })

  it('properly structures the privacy notice section', () => {
    const { container } = render(<FormSection />)
    
    const privacySection = screen.getByText(/We respect your privacy/).parentElement
    expect(privacySection).toHaveClass('mt-8', 'pt-6', 'border-t', 'border-gray-100')
    expect(privacySection).toHaveClass('text-center', 'text-sm', 'text-gray-500')
  })
})