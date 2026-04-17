import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ResultList } from './ResultList'

describe('ResultList', () => {
  it('renders linked result items', () => {
    render(
      <ResultList
        items={[
          {
            title: 'Housing support application',
            href: '#',
            description: 'Apply for housing support programs.',
          },
        ]}
      />
    )
    expect(screen.getByRole('link', { name: 'Housing support application' })).toBeInTheDocument()
  })
})
