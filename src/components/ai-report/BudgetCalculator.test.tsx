import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BudgetCalculator from './BudgetCalculator'

// Mock the child components
vi.mock('./CollapsedCalculator', () => ({
  default: ({ onExpand }: { onExpand: () => void }) => (
    <button onClick={onExpand}>Expand Calculator</button>
  )
}))

vi.mock('./BudgetForm', () => ({
  default: ({ onCalculate }: { onCalculate: () => void }) => (
    <div>
      <div>Budget Form</div>
      <button onClick={onCalculate}>Calculate</button>
    </div>
  )
}))

vi.mock('./BudgetResults', () => ({
  default: ({ budget }: any) => (
    <div>
      <div>Budget Results</div>
      <div>{budget.totalMonthlyCost}</div>
    </div>
  )
}))

describe('BudgetCalculator', () => {
  it('renders collapsed state initially', () => {
    render(<BudgetCalculator />)
    
    expect(screen.getByText('Expand Calculator')).toBeInTheDocument()
    expect(screen.queryByText('Interactive AI Budget Calculator')).not.toBeInTheDocument()
  })

  it('expands when clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetCalculator />)
    
    const expandButton = screen.getByText('Expand Calculator')
    await user.click(expandButton)
    
    expect(screen.getByText('Interactive AI Budget Calculator')).toBeInTheDocument()
    expect(screen.queryByText('Expand Calculator')).not.toBeInTheDocument()
  })

  it('shows calculator form when expanded', async () => {
    const user = userEvent.setup()
    render(<BudgetCalculator />)
    
    await user.click(screen.getByText('Expand Calculator'))
    
    expect(screen.getByText('Budget Form')).toBeInTheDocument()
    expect(screen.getByText('Use this calculator to estimate your organization\'s AI tooling budget based on your specific needs and team composition.')).toBeInTheDocument()
  })

  it('can collapse calculator', async () => {
    const user = userEvent.setup()
    render(<BudgetCalculator />)
    
    // Expand first
    await user.click(screen.getByText('Expand Calculator'))
    expect(screen.getByText('Interactive AI Budget Calculator')).toBeInTheDocument()
    
    // Then collapse
    await user.click(screen.getByText('Collapse Calculator'))
    expect(screen.getByText('Expand Calculator')).toBeInTheDocument()
    expect(screen.queryByText('Interactive AI Budget Calculator')).not.toBeInTheDocument()
  })

  it('shows results when calculate is clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetCalculator />)
    
    // Expand calculator
    await user.click(screen.getByText('Expand Calculator'))
    
    // Initially no results
    expect(screen.queryByText('Budget Results')).not.toBeInTheDocument()
    
    // Click calculate
    await user.click(screen.getByText('Calculate'))
    
    // Results should appear
    expect(screen.getByText('Budget Results')).toBeInTheDocument()
  })

  it('renders with proper section id', () => {
    render(<BudgetCalculator />)
    
    const section = screen.getByText('Expand Calculator').closest('section')
    expect(section).toHaveAttribute('id', 'budget-calculator')
  })

  it('renders calculator icon in header', async () => {
    const user = userEvent.setup()
    render(<BudgetCalculator />)
    
    await user.click(screen.getByText('Expand Calculator'))
    
    const header = screen.getByText('Interactive AI Budget Calculator')
    const icon = header.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })
})