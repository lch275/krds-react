import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SideNavigation } from './SideNavigation'

describe('SideNavigation', () => {
  it('renders current page link', () => {
    render(<SideNavigation items={[{ label: 'Overview', href: '#', current: true }]} />)
    expect(screen.getByRole('link', { name: 'Overview' })).toHaveAttribute('aria-current', 'page')
  })

  it('toggles child links for expandable items', async () => {
    render(
      <SideNavigation
        items={[
          {
            label: 'Applications',
            children: [{ label: 'New request', href: '#' }],
          },
        ]}
      />
    )

    await userEvent.click(screen.getByRole('button', { name: 'Applications' }))
    expect(screen.getByRole('link', { name: 'New request' })).toBeInTheDocument()
  })
})
