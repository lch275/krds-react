import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button/Button'
import { Field, FieldLabel } from '@/components/ui/Field'
import { Input } from '@/components/ui/inputs/Input/Input'
import { Select } from '@/components/ui/inputs/Select/Select'
import { FilterPanel } from './FilterPanel'

const meta: Meta<typeof FilterPanel> = {
  title: 'Patterns/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FilterPanel** collects filtering controls into a reusable search and refinement region.

## Accessibility notes
- Group related controls with clear labels
- Provide obvious reset or apply actions when the pattern needs them
- Keep the panel structured enough that keyboard users can move through filters predictably
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Panel heading when supported by the component.',
    },
    actions: {
      description: 'Optional action area such as reset or apply.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterPanel>

export const Default: Story = {
  render: (args) => (
    <FilterPanel {...args}>
      <Field>
        <FieldLabel>Keyword</FieldLabel>
        <Input placeholder="Search keyword" />
      </Field>
      <Field>
        <FieldLabel>Category</FieldLabel>
        <Select>
          <option>All</option>
          <option>Benefits</option>
        </Select>
      </Field>
    </FilterPanel>
  ),
  args: {
    actions: <Button variant="secondary">Reset</Button>,
  },
}
