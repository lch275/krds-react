import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Field, FieldLabel } from '@/components/ui/Field'
import { DateInput } from './DateInput'

describe('DateInput', () => {
  it('renders an input with type date', () => {
    render(<DateInput aria-label="Date" />)
    expect(screen.getByLabelText('Date')).toHaveAttribute('type', 'date')
  })

  it('connects to Field label context', () => {
    render(
      <Field>
        <FieldLabel>Issue date</FieldLabel>
        <DateInput />
      </Field>
    )
    expect(screen.getByLabelText('Issue date')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<DateInput aria-label="Date" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
