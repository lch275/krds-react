import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Field, FieldLabel } from '@/components/ui/Field'
import { Input } from '@/components/ui/inputs/Input/Input'
import { FilterPanel } from './FilterPanel'

describe('FilterPanel', () => {
  it('renders title and children', () => {
    render(
      <FilterPanel>
        <Field>
          <FieldLabel>Keyword</FieldLabel>
          <Input />
        </Field>
      </FilterPanel>
    )
    expect(screen.getByRole('heading', { name: 'Filters' })).toBeInTheDocument()
    expect(screen.getByLabelText('Keyword')).toBeInTheDocument()
  })
})
