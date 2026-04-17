import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/Field'
import { DateInput } from './DateInput'

const meta: Meta<typeof DateInput> = {
  title: 'UI/Inputs/DateInput',
  component: DateInput,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DateInput>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Date</FieldLabel>
      <DateInput {...args} />
      <FieldDescription>Choose a single date.</FieldDescription>
    </Field>
  ),
}
