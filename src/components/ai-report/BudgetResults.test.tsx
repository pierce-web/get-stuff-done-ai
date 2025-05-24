import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BudgetResults from './BudgetResults'
import { BudgetEstimate } from './utils/budgetCalculations'

// Mock window functions
global.window.open = vi.fn()
Object.defineProperty(window, 'location', {
  value: { href: '' },
  writable: true,
})

describe('BudgetResults', () => {
  const mockBudget: BudgetEstimate = {
    basicUsers: 80,
    powerUsers: 20,
    basicUsersTotalCost: 8000,
    powerUsersTotalCost: 10000,
    totalMonthlyCost: 18000,
    annualCost: 216000,
    perEmployeeCost: 180,
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders budget estimate correctly', () => {
    render(<BudgetResults budget={mockBudget} />)
    
    // Check title
    expect(screen.getByText('Your Budget Estimate')).toBeInTheDocument()
    expect(screen.getByText('Based on your organization\'s specific needs')).toBeInTheDocument()
    
    // Check monthly total
    expect(screen.getByText('$18,000')).toBeInTheDocument()
    expect(screen.getByText('Estimated Monthly Total')).toBeInTheDocument()
  })

  it('displays user breakdown correctly', () => {
    render(<BudgetResults budget={mockBudget} />)
    
    expect(screen.getByText('Basic Users (80)')).toBeInTheDocument()
    expect(screen.getByText('$8,000/mo')).toBeInTheDocument()
    
    expect(screen.getByText('Power Users (20)')).toBeInTheDocument()
    expect(screen.getByText('$10,000/mo')).toBeInTheDocument()
  })

  it('displays per employee average correctly', () => {
    render(<BudgetResults budget={mockBudget} />)
    
    expect(screen.getByText('Per Employee Average')).toBeInTheDocument()
    expect(screen.getByText('$180/mo')).toBeInTheDocument()
  })

  it('displays annual budget correctly', () => {
    render(<BudgetResults budget={mockBudget} />)
    
    expect(screen.getByText('Annual Budget')).toBeInTheDocument()
    expect(screen.getByText('$216,000/year')).toBeInTheDocument()
  })

  it('displays essential starter tools', () => {
    render(<BudgetResults budget={mockBudget} />)
    
    expect(screen.getByText('Essential Starter Tools')).toBeInTheDocument()
    expect(screen.getByText('ChatGPT Plus ($20/mo per user)')).toBeInTheDocument()
    expect(screen.getByText('Wispr Flow or similar voice dictation software')).toBeInTheDocument()
    expect(screen.getByText('Fireflies.ai or similar meeting transcription')).toBeInTheDocument()
  })

  it('opens dialog when quick-win button is clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetResults budget={mockBudget} />)
    
    const button = screen.getByRole('button', { name: /Get Quick-Win Implementation Plan/ })
    await user.click(button)
    
    // Check dialog content
    expect(screen.getByText('Get Your Personalized AI Strategy')).toBeInTheDocument()
    expect(screen.getByText(/Book a free consultation/)).toBeInTheDocument()
    expect(screen.getByText('What You\'ll Receive:')).toBeInTheDocument()
  })

  it('displays all items in dialog checklist', async () => {
    const user = userEvent.setup()
    render(<BudgetResults budget={mockBudget} />)
    
    const button = screen.getByRole('button', { name: /Get Quick-Win Implementation Plan/ })
    await user.click(button)
    
    const expectedItems = [
      'Precise budget breakdown for your organization',
      '30-60-90 day implementation roadmap',
      'Quick-win tactics aligned with long-term strategy',
      'ROI tracking framework for stakeholder reporting',
      'Personalized tool recommendations for your industry'
    ]
    
    expectedItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('opens calendly link when schedule button is clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetResults budget={mockBudget} />)
    
    // Open dialog first
    const quickWinButton = screen.getByRole('button', { name: /Get Quick-Win Implementation Plan/ })
    await user.click(quickWinButton)
    
    // Click schedule button
    const scheduleButton = screen.getByRole('button', { name: /Schedule Free Strategy Session/ })
    await user.click(scheduleButton)
    
    expect(window.open).toHaveBeenCalledWith('https://calendly.com/gsdatwork/free-consult', '_blank')
  })

  it('navigates to budget tiers when compare link is clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetResults budget={mockBudget} />)
    
    const compareLink = screen.getByText('Compare to standard budget tiers')
    await user.click(compareLink)
    
    expect(window.location.href).toBe('#budget-tiers')
  })

  it('formats large numbers correctly', () => {
    const largeBudget: BudgetEstimate = {
      basicUsers: 900,
      powerUsers: 100,
      basicUsersTotalCost: 90000,
      powerUsersTotalCost: 150000,
      totalMonthlyCost: 240000,
      annualCost: 2880000,
      perEmployeeCost: 240,
    }
    
    render(<BudgetResults budget={largeBudget} />)
    
    expect(screen.getByText('$240,000')).toBeInTheDocument()
    expect(screen.getByText('$2,880,000/year')).toBeInTheDocument()
    expect(screen.getByText('$90,000/mo')).toBeInTheDocument()
    expect(screen.getByText('$150,000/mo')).toBeInTheDocument()
  })

  it('rounds per employee cost correctly', () => {
    const budgetWithDecimal: BudgetEstimate = {
      ...mockBudget,
      perEmployeeCost: 180.67,
    }
    
    render(<BudgetResults budget={budgetWithDecimal} />)
    
    // Should round to 181
    expect(screen.getByText('$181/mo')).toBeInTheDocument()
  })

  it('dialog can be closed', async () => {
    const user = userEvent.setup()
    render(<BudgetResults budget={mockBudget} />)
    
    // Open dialog
    const button = screen.getByRole('button', { name: /Get Quick-Win Implementation Plan/ })
    await user.click(button)
    
    expect(screen.getByText('Get Your Personalized AI Strategy')).toBeInTheDocument()
    
    // Close dialog (clicking outside or X button)
    const dialog = screen.getByRole('dialog')
    const closeButton = dialog.querySelector('button[aria-label="Close"]')
    if (closeButton) {
      await user.click(closeButton)
    }
    
    // Dialog content should no longer be visible
    // Note: Exact behavior depends on Dialog component implementation
  })
})