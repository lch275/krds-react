import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResultSummary } from './ResultSummary'

describe('ResultSummary', () => {
  it('renders total and query context', () => {
    render(<ResultSummary total={24} query="housing" />)
    expect(screen.getByText(/24/)).toBeInTheDocument()
    expect(screen.getByText(/housing/)).toBeInTheDocument()
  })
})
