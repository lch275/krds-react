import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Identifier } from './Identifier'

describe('Identifier', () => {
  it('renders organization guidance', () => {
    render(<Identifier organization="Ministry of Health and Welfare" />)
    expect(screen.getByText('Ministry of Health and Welfare')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Identifier organization="Ministry of Health and Welfare" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
