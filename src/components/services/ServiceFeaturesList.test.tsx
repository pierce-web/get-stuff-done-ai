import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceFeaturesList } from './ServiceFeaturesList'

describe('ServiceFeaturesList', () => {
  it('renders all features', () => {
    const features = [
      'First feature',
      'Second feature',
      'Third feature'
    ]
    
    render(<ServiceFeaturesList features={features} />)
    
    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders features as list items', () => {
    const features = ['Feature 1', 'Feature 2']
    
    render(<ServiceFeaturesList features={features} />)
    
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(2)
  })

  it('renders checkmark icons for each feature', () => {
    const features = ['Feature A', 'Feature B', 'Feature C']
    
    render(<ServiceFeaturesList features={features} />)
    
    const icons = screen.getAllByRole('listitem').map(li => li.querySelector('svg'))
    expect(icons).toHaveLength(3)
    icons.forEach(icon => {
      expect(icon).toBeInTheDocument()
      expect(icon).toHaveClass('text-secondary')
    })
  })

  it('handles empty features array', () => {
    render(<ServiceFeaturesList features={[]} />)
    
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(list.children).toHaveLength(0)
  })

  it('renders long feature text correctly', () => {
    const longFeatures = [
      'This is a very long feature description that spans multiple lines and contains lots of important information about what the service provides',
      'Another lengthy feature that describes in great detail all the benefits and advantages you will receive'
    ]
    
    render(<ServiceFeaturesList features={longFeatures} />)
    
    longFeatures.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })
  })

  it('applies correct styling classes', () => {
    const features = ['Styled feature']
    
    render(<ServiceFeaturesList features={features} />)
    
    const list = screen.getByRole('list')
    expect(list).toHaveClass('space-y-4')
    
    const listItem = screen.getByRole('listitem')
    expect(listItem).toHaveClass('flex', 'items-start')
    
    const text = screen.getByText('Styled feature')
    expect(text).toHaveClass('ml-3', 'text-gray-600')
  })

  it('maintains proper icon alignment', () => {
    const features = ['Feature with icon']
    
    render(<ServiceFeaturesList features={features} />)
    
    const icon = screen.getByRole('listitem').querySelector('svg')
    expect(icon).toHaveClass('flex-shrink-0', 'mt-0.5')
    expect(icon).toHaveClass('h-6', 'w-6')
  })

  it('renders special characters correctly', () => {
    const specialFeatures = [
      'Feature with & ampersand',
      'Feature with "quotes"',
      'Feature with <angle> brackets',
      'Feature with 100% coverage'
    ]
    
    render(<ServiceFeaturesList features={specialFeatures} />)
    
    expect(screen.getByText('Feature with & ampersand')).toBeInTheDocument()
    expect(screen.getByText('Feature with "quotes"')).toBeInTheDocument()
    expect(screen.getByText('Feature with <angle> brackets')).toBeInTheDocument()
    expect(screen.getByText('Feature with 100% coverage')).toBeInTheDocument()
  })
})