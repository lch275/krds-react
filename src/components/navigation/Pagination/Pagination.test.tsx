import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders a navigation landmark and current page', () => {
    render(<Pagination currentPage={3} totalPages={8} />)
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
    expect(screen.getByLabelText('Page 3')).toHaveAttribute('aria-current', 'page')
  })

  it('calls onPageChange when a page button is pressed', async () => {
    const onPageChange = vi.fn()
    render(<Pagination currentPage={3} totalPages={8} onPageChange={onPageChange} />)
    await userEvent.click(screen.getByRole('button', { name: 'Page 4' }))
    expect(onPageChange).toHaveBeenCalledWith(4)
  })

  it('disables previous and next buttons on boundaries', () => {
    const { rerender } = render(<Pagination currentPage={1} totalPages={3} />)
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()

    rerender(<Pagination currentPage={3} totalPages={3} />)
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Pagination currentPage={3} totalPages={8} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
