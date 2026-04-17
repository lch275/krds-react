import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Snackbar } from './Snackbar'

describe('Snackbar', () => {
  it('renders a status message with optional action', () => {
    render(<Snackbar actionLabel="Retry">Upload failed.</Snackbar>)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Retry' })).toBeInTheDocument()
  })

  it('fires action and close handlers', async () => {
    const onAction = vi.fn()
    const onClose = vi.fn()
    render(
      <Snackbar actionLabel="Retry" onAction={onAction} onClose={onClose}>
        Upload failed.
      </Snackbar>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Retry' }))
    await userEvent.click(screen.getByRole('button', { name: 'x' }))
    expect(onAction).toHaveBeenCalled()
    expect(onClose).toHaveBeenCalled()
  })
})
