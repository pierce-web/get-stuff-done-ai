import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BudgetForm from './BudgetForm'

describe('BudgetForm', () => {
  const mockProps = {
    employeeCount: 100,
    setEmployeeCount: vi.fn(),
    powerUserPercentage: 20,
    setPowerUserPercentage: vi.fn(),
    needsCoding: false,
    setNeedsCoding: vi.fn(),
    onCalculate: vi.fn(),
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders all form elements correctly', () => {
    render(<BudgetForm {...mockProps} />)
    
    // Check labels
    expect(screen.getByText('Number of Employees')).toBeInTheDocument()
    expect(screen.getByText(/Percentage of Power Users/)).toBeInTheDocument()
    expect(screen.getByText('Special Tool Requirements')).toBeInTheDocument()
    expect(screen.getByText('AI Coding Tools')).toBeInTheDocument()
    
    // Check inputs
    expect(screen.getByDisplayValue('100')).toBeInTheDocument() // Employee count input
    expect(screen.getByText('20%')).toBeInTheDocument() // Power user percentage display
    
    // Check button
    expect(screen.getByRole('button', { name: 'Calculate Budget Estimate' })).toBeInTheDocument()
  })

  it('calls setEmployeeCount when number input changes', () => {
    render(<BudgetForm {...mockProps} />)
    
    const input = screen.getByDisplayValue('100') as HTMLInputElement
    
    // Simulate a direct value change
    fireEvent.change(input, { target: { value: '75' } })
    
    // Check that setEmployeeCount was called with the new value
    expect(mockProps.setEmployeeCount).toHaveBeenCalledWith(75)
  })

  it('handles invalid employee count input', async () => {
    const user = userEvent.setup()
    render(<BudgetForm {...mockProps} />)
    
    const input = screen.getByDisplayValue('100')
    await user.clear(input)
    await user.type(input, 'abc')
    
    // Should default to 1 for invalid input
    expect(mockProps.setEmployeeCount).toHaveBeenCalledWith(1)
  })

  it('renders employee count slider', () => {
    render(<BudgetForm {...mockProps} />)
    
    const sliders = screen.getAllByRole('slider')
    expect(sliders[0]).toBeInTheDocument() // First slider is for employee count
    expect(sliders[0]).toHaveAttribute('aria-valuemax', '500')
    expect(sliders[0]).toHaveAttribute('aria-valuemin', '1')
  })

  it('displays correct power user percentage', () => {
    render(<BudgetForm {...mockProps} />)
    
    expect(screen.getByText('Percentage of Power Users (20%)')).toBeInTheDocument()
    expect(screen.getByText('20%')).toBeInTheDocument()
  })

  it('renders power user percentage slider', () => {
    render(<BudgetForm {...mockProps} />)
    
    const sliders = screen.getAllByRole('slider')
    expect(sliders[1]).toBeInTheDocument() // Second slider is for percentage
    expect(sliders[1]).toHaveAttribute('aria-valuemax', '100')
    expect(sliders[1]).toHaveAttribute('aria-valuemin', '0')
  })

  it('calls setNeedsCoding when switch is toggled', async () => {
    const user = userEvent.setup()
    render(<BudgetForm {...mockProps} />)
    
    const switchElement = screen.getByRole('switch', { name: 'AI Coding Tools' })
    await user.click(switchElement)
    
    expect(mockProps.setNeedsCoding).toHaveBeenCalledWith(true)
  })

  it('displays switch in correct state based on needsCoding prop', () => {
    const { rerender } = render(<BudgetForm {...mockProps} />)
    
    let switchElement = screen.getByRole('switch', { name: 'AI Coding Tools' })
    expect(switchElement).toHaveAttribute('aria-checked', 'false')
    
    rerender(<BudgetForm {...mockProps} needsCoding={true} />)
    switchElement = screen.getByRole('switch', { name: 'AI Coding Tools' })
    expect(switchElement).toHaveAttribute('aria-checked', 'true')
  })

  it('calls onCalculate when button is clicked', async () => {
    const user = userEvent.setup()
    render(<BudgetForm {...mockProps} />)
    
    const button = screen.getByRole('button', { name: 'Calculate Budget Estimate' })
    await user.click(button)
    
    expect(mockProps.onCalculate).toHaveBeenCalledTimes(1)
  })

  it('displays helper text for power users', () => {
    render(<BudgetForm {...mockProps} />)
    
    expect(screen.getByText('Power users need more advanced AI tools and typically use AI more extensively.')).toBeInTheDocument()
  })

  it('displays helper text for coding tools', () => {
    render(<BudgetForm {...mockProps} />)
    
    expect(screen.getByText('GitHub Copilot, code generators, etc.')).toBeInTheDocument()
  })

  it('enforces min/max values on employee count input', () => {
    render(<BudgetForm {...mockProps} />)
    
    const input = screen.getByDisplayValue('100') as HTMLInputElement
    expect(input).toHaveAttribute('min', '1')
    expect(input).toHaveAttribute('max', '500')
  })

  it('renders with correct initial values', () => {
    render(<BudgetForm {...mockProps} employeeCount={50} powerUserPercentage={75} needsCoding={true} />)
    
    expect(screen.getByDisplayValue('50')).toBeInTheDocument()
    expect(screen.getByText('Percentage of Power Users (75%)')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
    expect(screen.getByRole('switch', { name: 'AI Coding Tools' })).toHaveAttribute('aria-checked', 'true')
  })
})