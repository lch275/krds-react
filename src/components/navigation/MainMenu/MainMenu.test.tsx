import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { MainMenu } from './MainMenu'

describe('MainMenu', () => {
  it('renders navigation links and current state', () => {
    render(<MainMenu items={[{ label: 'News', href: '#', current: true }]} />)
    expect(screen.getByRole('navigation', { name: 'Main menu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('aria-current', 'page')
  })

  it('opens child menu items', async () => {
    render(
      <MainMenu
        items={[
          {
            label: 'Services',
            children: [{ label: 'Housing support', href: '#' }],
          },
        ]}
      />
    )

    await userEvent.click(screen.getByRole('button', { name: 'Services' }))
    expect(screen.getByRole('link', { name: 'Housing support' })).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<MainMenu items={[{ label: 'News', href: '#' }]} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
