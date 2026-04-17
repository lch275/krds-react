import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { FilterChip } from './FilterChip'

describe('FilterChip', () => {
  it('renders selected state', () => {
    render(<FilterChip selected>Benefits</FilterChip>)
    expect(screen.getByText('Benefits').closest('[data-slot="filter-chip"]')).toHaveAttribute(
      'data-state',
      'selected'
    )
  })

  it('calls onRemove when removable action is clicked', async () => {
    const onRemove = vi.fn()
    render(
      <FilterChip removable onRemove={onRemove}>
        Housing
      </FilterChip>
    )
    await userEvent.click(screen.getByRole('button', { name: 'Remove Housing' }))
    expect(onRemove).toHaveBeenCalled()
  })
})
