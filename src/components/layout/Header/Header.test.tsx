import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders skip link and primary navigation', () => {
    render(
      <Header
        serviceName="Citizen service"
        navigation={[{ label: 'Overview', href: '#' }]}
      />
    )

    expect(screen.getByRole('link', { name: 'Skip to main content' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Header serviceName="Citizen service" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
