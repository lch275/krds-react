import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { EmptyState } from './EmptyState'

describe('EmptyState', () => {
  it('renders title and description', () => {
    render(<EmptyState title="No results" description="Try another query." />)
    expect(screen.getByRole('heading', { name: 'No results' })).toBeInTheDocument()
    expect(screen.getByText('Try another query.')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<EmptyState title="No results" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
