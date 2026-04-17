import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'

describe('Tooltip', () => {
  it('opens on hover and focus', async () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <button type="button">Help</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )

    await userEvent.hover(screen.getByRole('button', { name: 'Help' }))
    expect(screen.getByRole('tooltip')).toBeInTheDocument()
  })

  it('closes on escape', async () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <button type="button">Help</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>
    )

    const button = screen.getByRole('button', { name: 'Help' })
    button.focus()
    expect(await screen.findByRole('tooltip')).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
  })
})
