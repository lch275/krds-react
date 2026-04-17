import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldError, FieldLabel } from './Field'
import { Input } from '@/components/ui/inputs/Input/Input'
import { Select } from '@/components/ui/inputs/Select/Select'
import { Textarea } from '@/components/ui/inputs/Textarea/Textarea'

const meta: Meta<typeof Field> = {
  title: 'UI/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Field** wires labels, descriptions, and error content to a child form control through shared context.

## What it handles
- Connects \`htmlFor\` and \`id\`
- Builds \`aria-describedby\` from description and error slots
- Reflects error state through \`aria-invalid\`
- Reflects required and disabled state consistently
- Keeps label, hint, and validation message composition predictable
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the field and propagates the state to supported controls.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: 'Forces invalid state styling and semantics.',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Name</FieldLabel>
      <Input placeholder="Enter your name" />
    </Field>
  ),
  args: {
    disabled: false,
    required: false,
    invalid: false,
  },
}

export const WithDescription: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Email</FieldLabel>
      <Input type="email" placeholder="example@gov.kr" />
      <FieldDescription>Use an address that can receive service updates.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithError: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Password</FieldLabel>
      <Input type="password" placeholder="Enter your password" />
      <FieldDescription>Use at least eight characters.</FieldDescription>
      <FieldError>Password must be at least eight characters long.</FieldError>
    </Field>
  ),
  args: {
    required: true,
    invalid: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `FieldError` receives content, the related control is automatically exposed as invalid.',
      },
    },
  },
}

export const Required: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Resident registration number</FieldLabel>
      <Input placeholder="000000-0000000" />
      <FieldDescription>Entered information should be stored and masked securely.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const Disabled: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Request ID</FieldLabel>
      <Input value="2024-KR-001234" readOnly />
      <FieldDescription>This value is assigned automatically by the service.</FieldDescription>
    </Field>
  ),
  args: {
    disabled: true,
  },
}

export const HideRequiredMark: Story = {
  name: 'Hide Required Mark',
  render: (args) => (
    <Field {...args}>
      <FieldLabel hideRequired>Name (required)</FieldLabel>
      <Input placeholder="Enter your name" />
      <FieldDescription>Use this when the required meaning is already explicit in the label copy.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithTextarea: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Request details</FieldLabel>
      <Textarea placeholder="Describe the issue in detail." rows={5} />
      <FieldDescription>You can enter up to 1,000 characters.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithSelect: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>Request type</FieldLabel>
      <Select>
        <option value="">Please select</option>
        <option value="complaint">Complaint</option>
        <option value="inquiry">Inquiry</option>
        <option value="suggestion">Suggestion</option>
      </Select>
      <FieldDescription>Select the category that best matches the request.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const CompleteForm: Story = {
  render: () => (
    <form className="flex max-w-md flex-col gap-6">
      <Field required>
        <FieldLabel>Full name</FieldLabel>
        <Input placeholder="Enter your name" />
      </Field>
      <Field required>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="example@gov.kr" />
        <FieldDescription>A confirmation email will be sent to this address.</FieldDescription>
      </Field>
      <Field required>
        <FieldLabel>Request type</FieldLabel>
        <Select>
          <option value="">Please select</option>
          <option value="complaint">Complaint</option>
          <option value="inquiry">Inquiry</option>
        </Select>
      </Field>
      <Field required>
        <FieldLabel>Details</FieldLabel>
        <Textarea placeholder="Write the details of your request." rows={4} />
        <FieldDescription>Maximum 1,000 characters.</FieldDescription>
        <FieldError>Please provide the details of the request.</FieldError>
      </Field>
    </form>
  ),
}
