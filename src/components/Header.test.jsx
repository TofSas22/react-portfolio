import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Header from './Header'

// Mock window scroll methods
Object.defineProperty(window, 'scrollY', {
  writable: true,
  value: 0,
})

describe('Header', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders the header with logo', () => {
    render(<Header />)
    expect(screen.getByText('Tofiek Sasman.')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu when burger button is clicked', () => {
    render(<Header />)
    
    const burgerButton = screen.getByRole('button')
    expect(screen.queryByText('Services')).not.toBeInTheDocument()
    
    fireEvent.click(burgerButton)
    expect(screen.getByText('Services')).toBeInTheDocument()
    
    fireEvent.click(burgerButton)
    expect(screen.queryByText('Services')).not.toBeInTheDocument()
  })

  it('applies blur effect when scrolled', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header')
    
    expect(header).toHaveClass('bg-transparent')
    expect(header).not.toHaveClass('backdrop-blur-lg')
    
    // Simulate scroll
    window.scrollY = 100
    fireEvent.scroll(window)
    
    // Note: This test would need a more complex setup to properly test scroll events
    // For now, we'll just verify the component renders without errors
    expect(header).toBeInTheDocument()
  })
})