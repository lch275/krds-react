import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a footer landmark and policy links', () => {
    render(
      <Footer
        organization="Ministry portal"
        policyLinks={[{ label: 'Privacy policy', href: '#' }]}
      />
    )

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy policy' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Footer organization="Ministry portal" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
