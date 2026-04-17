import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Masthead } from './Masthead'

describe('Masthead', () => {
  it('renders official service text', () => {
    render(<Masthead />)
    expect(screen.getByText(/official digital government service/i)).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Masthead />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
