import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Checkbox } from '@/components/ui/inputs/Checkbox/Checkbox'
import { ConsentSection } from './ConsentSection'

describe('ConsentSection', () => {
  it('renders title, description, and child controls', () => {
    render(
      <ConsentSection title="Privacy consent" description="Review the required terms.">
        <Checkbox>Agree</Checkbox>
      </ConsentSection>
    )
    expect(screen.getByRole('heading', { name: 'Privacy consent' })).toBeInTheDocument()
    expect(screen.getByText('Review the required terms.')).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
