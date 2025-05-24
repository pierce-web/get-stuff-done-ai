import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CollapsedCalculator from './CollapsedCalculator'

describe('CollapsedCalculator', () => {
  const mockOnExpand = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders calculator title and description', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    expect(screen.getByText('Interactive AI Budget Calculator')).toBeInTheDocument()
    expect(screen.getByText('Estimate your organization\'s AI tooling budget based on your specific needs and team composition.')).toBeInTheDocument()
  })

  it('renders calculate button', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    const button = screen.getByRole('button', { name: /Calculate Your Budget/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-secondary')
  })

  it('calls onExpand when button is clicked', async () => {
    const user = userEvent.setup()
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    const button = screen.getByRole('button', { name: /Calculate Your Budget/i })
    await user.click(button)
    
    expect(mockOnExpand).toHaveBeenCalledTimes(1)
  })

  it('renders all three benefit cards', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    expect(screen.getByText('General-Purpose AI')).toBeInTheDocument()
    expect(screen.getByText('Voice Dictation')).toBeInTheDocument()
    expect(screen.getByText('Meeting Transcription')).toBeInTheDocument()
  })

  it('renders benefit descriptions', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    expect(screen.getByText('Essential AI tools that serve as the foundation for productivity gains, research, and analysis.')).toBeInTheDocument()
    expect(screen.getByText('"Stop typing, start talking" - rapidly iterate and direct AI through speech.')).toBeInTheDocument()
    expect(screen.getByText('Cultivate high-quality qualitative data assets from meetings and calls.')).toBeInTheDocument()
  })

  it('renders calculator icon in header', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    const header = screen.getByText('Interactive AI Budget Calculator')
    const icon = header.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders calculator icon in button', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    const button = screen.getByRole('button', { name: /Calculate Your Budget/i })
    const icon = button.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders benefit icons', () => {
    render(<CollapsedCalculator onExpand={mockOnExpand} />)
    
    // Check that icons are present by looking for their parent containers
    const generalAICard = screen.getByText('General-Purpose AI').closest('div')
    const voiceCard = screen.getByText('Voice Dictation').closest('div')
    const meetingCard = screen.getByText('Meeting Transcription').closest('div')
    
    // Each card should have an icon
    expect(generalAICard?.querySelector('svg')).toBeInTheDocument()
    expect(voiceCard?.querySelector('svg')).toBeInTheDocument()
    expect(meetingCard?.querySelector('svg')).toBeInTheDocument()
  })
})