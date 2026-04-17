import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContextualHelp } from './ContextualHelp'

describe('ContextualHelp', () => {
  it('toggles the popover from the help button', async () => {
    render(<ContextualHelp title="Why">Helpful content</ContextualHelp>)
    await userEvent.click(screen.getByRole('button', { name: 'Help' }))
    expect(screen.getByText('Helpful content')).toBeInTheDocument()
  })

  it('closes on escape', async () => {
    render(<ContextualHelp title="Why">Helpful content</ContextualHelp>)
    await userEvent.click(screen.getByRole('button', { name: 'Help' }))
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByText('Helpful content')).not.toBeInTheDocument()
  })
})
