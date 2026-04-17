import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('shows suggestions on focus', async () => {
    render(<SearchBar suggestions={[{ label: 'Housing support' }]} />)
    await userEvent.click(screen.getByRole('searchbox'))
    expect(screen.getByRole('option', { name: 'Housing support' })).toBeInTheDocument()
  })

  it('submits the search value', async () => {
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} suggestions={[{ label: 'Housing support' }]} />)
    await userEvent.type(screen.getByRole('searchbox'), 'Housing')
    await userEvent.click(screen.getByRole('button', { name: 'Submit search' }))
    expect(onSearch).toHaveBeenCalledWith('Housing')
  })
})
