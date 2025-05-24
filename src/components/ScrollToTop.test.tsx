import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ScrollToTop } from './ScrollToTop'

// Mock window.scrollTo
const mockScrollTo = vi.fn()
const mockGetElementById = vi.fn()
const mockScrollIntoView = vi.fn()

describe('ScrollToTop', () => {
  beforeEach(() => {
    // Setup mocks
    window.scrollTo = mockScrollTo
    document.getElementById = mockGetElementById
    
    // Clear mocks before each test
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.clearAllTimers()
  })

  it('scrolls to top on route change without hash', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/page1']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    // Initial render should scroll to top
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)

    // Clear the mock
    mockScrollTo.mockClear()

    // Navigate to a new route
    rerender(
      <MemoryRouter initialEntries={['/page2']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    // Should scroll to top again
    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
  })

  it('scrolls to element when hash is present', async () => {
    const mockElement = {
      scrollIntoView: mockScrollIntoView
    }
    mockGetElementById.mockReturnValue(mockElement)

    render(
      <MemoryRouter initialEntries={['/page#section']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    // Should not scroll to top
    expect(mockScrollTo).not.toHaveBeenCalled()

    // Wait for setTimeout
    await vi.waitFor(() => {
      expect(mockGetElementById).toHaveBeenCalledWith('section')
      expect(mockScrollIntoView).toHaveBeenCalledWith({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })

  it('does not scroll if element with hash ID is not found', async () => {
    mockGetElementById.mockReturnValue(null)

    render(
      <MemoryRouter initialEntries={['/page#nonexistent']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    // Should not scroll to top
    expect(mockScrollTo).not.toHaveBeenCalled()

    // Wait for setTimeout
    await vi.waitFor(() => {
      expect(mockGetElementById).toHaveBeenCalledWith('nonexistent')
      expect(mockScrollIntoView).not.toHaveBeenCalled()
    })
  })

  it('renders nothing', () => {
    const { container } = render(
      <MemoryRouter>
        <ScrollToTop />
      </MemoryRouter>
    )

    expect(container.firstChild).toBeNull()
  })

  it('updates scroll position when pathname changes but hash remains', () => {
    const { rerender } = render(
      <MemoryRouter initialEntries={['/page1']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    expect(mockScrollTo).toHaveBeenCalledTimes(1)
    mockScrollTo.mockClear()

    // Change to different page
    rerender(
      <MemoryRouter initialEntries={['/page2']}>
        <ScrollToTop />
      </MemoryRouter>
    )

    expect(mockScrollTo).toHaveBeenCalledWith(0, 0)
  })
})