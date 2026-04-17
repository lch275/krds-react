import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Input> = {
  title: 'UI/Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Input** is the base single-line text field. When used inside \`Field\`, labels, descriptions, and errors are wired automatically.

## Accessibility notes
- Standalone usage should provide \`aria-label\` or \`aria-labelledby\`
- \`invalid\` reflects both semantics and visual state
- \`disabled\` can be set directly or inherited from \`Field\`
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Input size.',
      table: { defaultValue: { summary: 'md' } },
    },
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
      description: 'Native input type.',
      table: { defaultValue: { summary: 'text' } },
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
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'md',
  },
}

export const Small: Story = {
  args: {
    'aria-label': 'Search',
    placeholder: 'Search keyword',
    inputSize: 'sm',
  },
}

export const Medium: Story = {
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'md',
  },
}

export const Large: Story = {
  args: {
    'aria-label': 'Name',
    placeholder: 'Enter your name',
    inputSize: 'lg',
  },
}

export const Invalid: Story = {
  args: {
    'aria-label': 'Email',
    placeholder: 'example@gov.kr',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    'aria-label': 'Request ID',
    value: '2024-KR-001234',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    'aria-label': 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
}

export const WithField: Story = {
  name: 'With Field',
  render: (args) => (
    <Field required>
      <FieldLabel>Email</FieldLabel>
      <Input {...args} type="email" placeholder="example@gov.kr" />
      <FieldDescription>Use an email address that can receive service updates.</FieldDescription>
    </Field>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inside `Field`, the input is labelled automatically so a separate `aria-label` is not needed.',
      },
    },
  },
}

export const WithFieldError: Story = {
  name: 'With Field Error',
  render: () => (
    <Field required>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="example@gov.kr" />
      <FieldError>Please provide a valid email address.</FieldError>
    </Field>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Input aria-label="Small input" placeholder="sm (32px)" inputSize="sm" />
      <Input aria-label="Medium input" placeholder="md (40px, default)" inputSize="md" />
      <Input aria-label="Large input" placeholder="lg (44px touch target)" inputSize="lg" />
    </div>
  ),
}
