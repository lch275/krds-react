import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders a status message', () => {
    render(<Toast duration={0}>Saved.</Toast>)
    expect(screen.getByRole('status')).toHaveTextContent('Saved.')
  })

  it('auto closes after duration', async () => {
    vi.useFakeTimers()
    const onOpenChange = vi.fn()
    render(
      <Toast duration={1000} onOpenChange={onOpenChange}>
        Saved.
      </Toast>
    )
    vi.advanceTimersByTime(1000)
    expect(onOpenChange).toHaveBeenCalledWith(false)
    vi.useRealTimers()
  })
})
