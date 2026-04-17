import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Textarea> = {
  title: 'UI/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Textarea** is the multiline text input for longer user-generated content.

## Notes
- Vertical resize is enabled
- Minimum height is based on a comfortable multiline entry size
- \`rows\` controls the initial visible height
        `,
      },
    },
  },
  argTypes: {
    invalid: {
      control: 'boolean',
      description: 'Invalid state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text.',
    },
    rows: {
      control: { type: 'number', min: 2, max: 20 },
      description: 'Initial row count.',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name for standalone usage.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    'aria-label': 'Details',
    placeholder: 'Enter the details of your request.',
    rows: 4,
  },
}

export const Invalid: Story = {
  args: {
    'aria-label': 'Details',
    placeholder: 'Enter the details of your request.',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    'aria-label': 'Details',
    value: 'This content cannot be edited.',
    disabled: true,
  },
}

export const WithField: Story = {
  name: 'With Field',
  render: (args) => (
    <Field required>
      <FieldLabel>Request details</FieldLabel>
      <Textarea {...args} placeholder="Describe the request in detail." />
      <FieldDescription>You can enter up to 1,000 characters.</FieldDescription>
    </Field>
  ),
  args: {
    invalid: false,
    disabled: false,
    rows: 5,
  },
}

export const WithFieldError: Story = {
  name: 'With Field Error',
  render: () => (
    <Field required>
      <FieldLabel>Request details</FieldLabel>
      <Textarea placeholder="Enter the request details." />
      <FieldError>Please provide the details of the request.</FieldError>
    </Field>
  ),
}

export const LargeRows: Story = {
  name: 'Row Variations',
  render: () => (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Short note</FieldLabel>
        <Textarea rows={2} placeholder="Brief content" />
      </Field>
      <Field>
        <FieldLabel>Default size</FieldLabel>
        <Textarea rows={4} placeholder="Regular content" />
      </Field>
      <Field>
        <FieldLabel>Long content</FieldLabel>
        <Textarea rows={8} placeholder="Detailed content" />
      </Field>
    </div>
  ),
}
