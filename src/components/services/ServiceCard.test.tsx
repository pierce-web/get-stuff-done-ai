import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { ServiceCard } from './ServiceCard'
import { ServiceType } from './types'

// Mock window.open
global.window.open = vi.fn()

// Wrapper component for React Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('ServiceCard', () => {
  const mockService: ServiceType = {
    title: 'Test Service',
    description: 'This is a test service description',
    price: '$999',
    subtext: 'Monthly subscription',
    extraText: 'Save 20% annually with this amazing service',
    features: [
      'Feature one with benefits',
      'Feature two with more benefits',
      'Feature three is the best'
    ],
    cta: 'Learn More',
    secondaryCta: 'Schedule a Call',
    calendlyLink: 'https://calendly.com/test/consultation',
    learnMoreLink: '/test-service'
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders service title and description', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    expect(screen.getByText('Test Service')).toBeInTheDocument()
    expect(screen.getByText('This is a test service description')).toBeInTheDocument()
  })

  it('renders price and subtext', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    expect(screen.getByText('$999')).toBeInTheDocument()
    expect(screen.getByText('Monthly subscription')).toBeInTheDocument()
  })

  it('renders ROI text when extraText is provided', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    expect(screen.getByText('ROI:')).toBeInTheDocument()
    expect(screen.getByText('Save 20% annually with this amazing service')).toBeInTheDocument()
  })

  it('does not render ROI section when extraText is not provided', () => {
    const serviceWithoutExtra = { ...mockService, extraText: undefined }
    renderWithRouter(<ServiceCard service={serviceWithoutExtra} />)
    
    expect(screen.queryByText('ROI:')).not.toBeInTheDocument()
  })

  it('renders all features', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    mockService.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders Learn More button with correct link', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    const learnMoreButton = screen.getByRole('link', { name: /Learn More/i })
    expect(learnMoreButton).toHaveAttribute('href', '/test-service')
  })

  it('does not render Learn More button when learnMoreLink is not provided', () => {
    const serviceWithoutLink = { ...mockService, learnMoreLink: undefined }
    renderWithRouter(<ServiceCard service={serviceWithoutLink} />)
    
    expect(screen.queryByRole('link', { name: /Learn More/i })).not.toBeInTheDocument()
  })

  it('opens calendly link when Schedule Strategy Call is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter(<ServiceCard service={mockService} />)
    
    const scheduleButton = screen.getByRole('button', { name: /Schedule Strategy Call/i })
    await user.click(scheduleButton)
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/gsdatwork/free-consult', '_blank')
  })

  it('handles service without optional fields', () => {
    const minimalService: ServiceType = {
      title: 'Minimal Service',
      description: 'Basic description',
      price: '$500',
      features: ['Feature 1', 'Feature 2'],
      cta: 'Learn More',
      secondaryCta: 'Contact Us'
    }
    
    renderWithRouter(<ServiceCard service={minimalService} />)
    
    expect(screen.getByText('Minimal Service')).toBeInTheDocument()
    expect(screen.getByText('Basic description')).toBeInTheDocument()
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.queryByText('ROI:')).not.toBeInTheDocument()
  })

  it('renders with proper card structure', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    // Check that the card contains the expected structure
    const title = screen.getByText('Test Service')
    const card = title.closest('[class*="flex"][class*="flex-col"]')
    
    // Verify card exists and has flex layout
    expect(card).toBeInTheDocument()
    expect(card?.className).toMatch(/flex/)
    expect(card?.className).toMatch(/flex-col/)
  })

  it('renders calendar icon in schedule button', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    const scheduleButton = screen.getByRole('button', { name: /Schedule Strategy Call/i })
    const icon = scheduleButton.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders external link icon in learn more button', () => {
    renderWithRouter(<ServiceCard service={mockService} />)
    
    const learnMoreButton = screen.getByRole('link', { name: /Learn More/i })
    const icon = learnMoreButton.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})