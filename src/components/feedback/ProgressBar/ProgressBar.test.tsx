import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { ProgressBar } from './ProgressBar'

describe('ProgressBar', () => {
  it('renders progress semantics', () => {
    render(<ProgressBar label="Processing" value={62} />)
    expect(screen.getByRole('progressbar', { name: 'Processing' })).toHaveAttribute(
      'aria-valuenow',
      '62'
    )
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<ProgressBar value={50} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
