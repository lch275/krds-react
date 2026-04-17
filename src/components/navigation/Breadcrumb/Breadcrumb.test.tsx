import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Breadcrumb } from './Breadcrumb'

describe('Breadcrumb', () => {
  it('renders inside a navigation landmark', () => {
    render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Apply' },
        ]}
      />
    )

    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByText('Apply')).toHaveAttribute('aria-current', 'page')
  })

  it('collapses long paths with an ellipsis', () => {
    render(
      <Breadcrumb
        maxItems={4}
        items={[
          { label: 'Home', href: '/' },
          { label: 'Section', href: '/section' },
          { label: 'Subsection', href: '/subsection' },
          { label: 'Topic', href: '/topic' },
          { label: 'Current page' },
        ]}
      />
    )

    expect(screen.getByText('...')).toBeInTheDocument()
    expect(screen.getByText('Current page')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Section', href: '/section' },
          { label: 'Current page' },
        ]}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
