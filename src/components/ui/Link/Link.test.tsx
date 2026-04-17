import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Link } from './Link'

describe('Link', () => {
  it('renders an anchor when href is provided', () => {
    render(<Link href="/service">Service</Link>)
    expect(screen.getByRole('link', { name: 'Service' })).toHaveAttribute('href', '/service')
  })

  it('removes href and keyboard focus when disabled', () => {
    render(
      <Link href="/service" disabled>
        Service
      </Link>
    )

    const link = screen.getByText('Service')
    expect(link).not.toHaveAttribute('href')
    expect(link).toHaveAttribute('tabindex', '-1')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Link href="/service">Accessible link</Link>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
