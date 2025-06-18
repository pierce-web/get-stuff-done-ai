import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { EngagementLevels } from './EngagementLevels'

// Mock window.open
global.window.open = vi.fn()

// Wrapper component for React Router
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('EngagementLevels', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the main heading and description', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText('Two Paths to AI Transformation')).toBeInTheDocument()
    expect(screen.getByText(/Whether you're looking for a quick win or comprehensive transformation/)).toBeInTheDocument()
  })

  it('renders both engagement paths', () => {
    renderWithRouter(<EngagementLevels />)
    
    // Quick Win path
    expect(screen.getByText('AI Action Workshop - Quick Win')).toBeInTheDocument()
    expect(screen.getByText('Starting at $1,199')).toBeInTheDocument()
    
    // Transformation path
    expect(screen.getByText('AI Transformation Programs')).toBeInTheDocument()
    expect(screen.getByText('Custom Engagement Pricing')).toBeInTheDocument()
  })

  it('renders all quick win features', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText('1-2 hour hands-on workshop')).toBeInTheDocument()
    expect(screen.getByText('Founder-led ($2,499) or Associate-led ($1,199)')).toBeInTheDocument()
    expect(screen.getByText('Transform a 2-day task into 2 hours')).toBeInTheDocument()
    expect(screen.getByText('Create reusable processes & SOPs')).toBeInTheDocument()
  })

  it('renders all transformation program features', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText('Multi-week to multi-month programs')).toBeInTheDocument()
    expect(screen.getByText('Organization-wide AI adoption')).toBeInTheDocument()
    expect(screen.getByText('Custom roadmaps & implementation')).toBeInTheDocument()
    expect(screen.getByText('Ongoing coaching & optimization')).toBeInTheDocument()
  })

  it('renders the bottom messaging', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText(/Many clients start with a Quick Win workshop/)).toBeInTheDocument()
    expect(screen.getByText('Begin your AI journey today with the approach that fits your needs.')).toBeInTheDocument()
  })

  it('has correct link to AI Action Workshop', () => {
    renderWithRouter(<EngagementLevels />)
    
    const workshopLink = screen.getByRole('link', { name: /Explore Workshop Options/i })
    expect(workshopLink).toHaveAttribute('href', '/ai-action-workshop')
  })

  it('opens consultation link when Quick Win consultation button is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter(<EngagementLevels />)
    
    // Find the first Schedule Free Consultation button (in Quick Win section)
    const consultButtons = screen.getAllByText('Schedule Free Consultation')
    await user.click(consultButtons[0])
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/gsdatwork/free-consult', '_blank')
  })

  it('opens consultation link when Transformation consultation button is clicked', async () => {
    const user = userEvent.setup()
    renderWithRouter(<EngagementLevels />)
    
    // Find the second Schedule Free Consultation button (in Transformation section)
    const consultButtons = screen.getAllByText('Schedule Free Consultation')
    await user.click(consultButtons[1])
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/gsdatwork/free-consult', '_blank')
  })

  it('displays ideal audience for each path', () => {
    renderWithRouter(<EngagementLevels />)
    
    expect(screen.getByText(/Ideal for: Individual teams, first-time engagements/)).toBeInTheDocument()
    expect(screen.getByText(/Ideal for: Enterprises, strategic initiatives/)).toBeInTheDocument()
  })

  it('renders with proper visual hierarchy', () => {
    renderWithRouter(<EngagementLevels />)
    
    // Check that both cards exist with proper structure
    const quickWinCard = screen.getByText('AI Action Workshop - Quick Win').closest('div[class*="rounded-xl"]')
    const transformCard = screen.getByText('AI Transformation Programs').closest('div[class*="rounded-xl"]')
    
    expect(quickWinCard).toHaveClass('border-blue-200')
    expect(transformCard).toHaveClass('border-secondary')
  })
})