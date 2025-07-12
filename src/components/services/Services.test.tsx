import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Services } from './Services'

// Mock the data
vi.mock('./data', () => ({
  services: [
    {
      title: 'Test Service 1',
      description: 'Description 1',
      price: '$100',
      features: ['Feature 1', 'Feature 2'],
      cta: 'Learn More',
      secondaryCta: 'Contact',
      learnMoreLink: '/service-1'
    },
    {
      title: 'Test Service 2',
      description: 'Description 2',
      price: '$200',
      features: ['Feature 3', 'Feature 4'],
      cta: 'Learn More',
      secondaryCta: 'Contact',
      learnMoreLink: '/service-2'
    }
  ]
}))

// Mock ServiceCard
vi.mock('./ServiceCard', () => ({
  ServiceCard: ({ service }: any) => (
    <div data-testid="service-card">{service.title}</div>
  )
}))

// Mock SEO components
vi.mock('@/components/seo/KeywordRichContent', () => ({
  SEOHeading: ({ children, className }: any) => (
    <h2 className={className}>{children}</h2>
  ),
  SEOParagraph: ({ children, className }: any) => (
    <p className={className}>{children}</p>
  )
}))

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Services', () => {
  it('renders the services section with correct heading', () => {
    renderWithRouter(<Services />)
    
    expect(screen.getByText('AI Implementation Services & Consulting')).toBeInTheDocument()
  })

  it('renders the services description', () => {
    renderWithRouter(<Services />)
    
    const description = screen.getByText(/Expert AI implementation services designed to accelerate/)
    expect(description).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    renderWithRouter(<Services />)
    
    const serviceCards = screen.getAllByTestId('service-card')
    expect(serviceCards).toHaveLength(2)
    expect(screen.getByText('Test Service 1')).toBeInTheDocument()
    expect(screen.getByText('Test Service 2')).toBeInTheDocument()
  })

  it('has correct section id for anchor navigation', () => {
    renderWithRouter(<Services />)
    
    const section = screen.getByText('AI Implementation Services & Consulting').closest('section')
    expect(section).toHaveAttribute('id', 'services')
  })

  it('applies animation classes to service cards', () => {
    renderWithRouter(<Services />)
    
    const serviceCards = screen.getAllByTestId('service-card')
    serviceCards.forEach((card) => {
      const wrapper = card.parentElement
      expect(wrapper?.className).toContain('animate-slide-in-up')
      expect(wrapper?.style.animationDelay).toBeDefined()
      expect(wrapper?.style.animationFillMode).toBe('both')
    })
  })

  it('applies progressive animation delay to cards', () => {
    renderWithRouter(<Services />)
    
    const serviceCards = screen.getAllByTestId('service-card')
    const firstCardWrapper = serviceCards[0].parentElement
    const secondCardWrapper = serviceCards[1].parentElement
    
    expect(firstCardWrapper?.style.animationDelay).toBe('0s')
    expect(secondCardWrapper?.style.animationDelay).toBe('0.15s')
  })

  it('has responsive grid layout classes', () => {
    renderWithRouter(<Services />)
    
    const gridContainer = screen.getByText('Test Service 1').closest('.grid')
    expect(gridContainer).toHaveClass('grid-cols-1', 'lg:grid-cols-3')
  })

  it('is wrapped in React.memo for performance', () => {
    expect(Services.displayName).toBe('Services')
  })
})