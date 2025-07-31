import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByText('Tofiek Sasman.')).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<App />)
    
    // Check if header is present
    expect(screen.getByText('Tofiek Sasman.')).toBeInTheDocument()
    
    // Check for navigation links (indicating header is rendered)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})