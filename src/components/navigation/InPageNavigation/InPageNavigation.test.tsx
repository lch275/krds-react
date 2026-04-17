import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { InPageNavigation } from './InPageNavigation'

describe('InPageNavigation', () => {
  it('renders navigation links', () => {
    render(<InPageNavigation items={[{ id: 'summary', label: 'Summary' }]} />)
    expect(screen.getByRole('navigation', { name: 'In-page navigation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Summary' })).toBeInTheDocument()
  })

  it('focuses the target section when a link is clicked', async () => {
    render(
      <>
        <InPageNavigation items={[{ id: 'summary', label: 'Summary' }]} />
        <section id="summary" tabIndex={-1}>
          Summary section
        </section>
      </>
    )

    await userEvent.click(screen.getByRole('link', { name: 'Summary' }))
    expect(screen.getByText('Summary section')).toHaveFocus()
  })
})
