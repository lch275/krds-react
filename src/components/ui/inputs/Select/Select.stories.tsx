import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Select> = {
  title: 'UI/Inputs/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Select** wraps the native \`select\` element for accessible option picking. It works especially well with \`Field\` when descriptive text and validation are needed.

## Notes
- Based on the native \`select\` element
- Supports \`option\` and \`optgroup\` children
- Keeps keyboard and screen reader behavior aligned with the platform
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Select size.',
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
type Story = StoryObj<typeof Select>

const DefaultOptions = () => (
  <>
    <option value="">Please select</option>
    <option value="complaint">Complaint</option>
    <option value="inquiry">Inquiry</option>
    <option value="suggestion">Suggestion</option>
    <option value="other">Other</option>
  </>
)

export const Default: Story = {
  render: (args) => (
    <Select {...args} aria-label="Request type">
      <DefaultOptions />
    </Select>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
}

export const Small: Story = {
  render: (args) => (
    <Select {...args} aria-label="Category">
      <DefaultOptions />
    </Select>
  ),
  args: { inputSize: 'sm' },
}

export const Large: Story = {
  render: (args) => (
    <Select {...args} aria-label="Request type">
      <DefaultOptions />
    </Select>
  ),
  args: { inputSize: 'lg' },
}

export const Invalid: Story = {
  render: (args) => (
    <Select {...args} aria-label="Request type">
      <DefaultOptions />
    </Select>
  ),
  args: { invalid: true },
}

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} aria-label="Processing status">
      <option value="processing">Processing</option>
    </Select>
  ),
  args: { disabled: true },
}

export const WithField: Story = {
  name: 'With Field',
  render: (args) => (
    <Field required>
      <FieldLabel>Request type</FieldLabel>
      <Select {...args}>
        <DefaultOptions />
      </Select>
      <FieldDescription>Select the category that best matches the request.</FieldDescription>
    </Field>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
}

export const WithFieldError: Story = {
  name: 'With Field Error',
  render: () => (
    <Field required>
      <FieldLabel>Request type</FieldLabel>
      <Select>
        <option value="">Please select</option>
        <option value="complaint">Complaint</option>
      </Select>
      <FieldError>Please select a request type.</FieldError>
    </Field>
  ),
}

export const WithOptgroup: Story = {
  name: 'With Optgroup',
  render: () => (
    <Field>
      <FieldLabel>Region</FieldLabel>
      <Select>
        <option value="">Please select</option>
        <optgroup label="Capital area">
          <option value="seoul">Seoul</option>
          <option value="incheon">Incheon</option>
          <option value="gyeonggi">Gyeonggi-do</option>
        </optgroup>
        <optgroup label="Central area">
          <option value="daejeon">Daejeon</option>
          <option value="sejong">Sejong</option>
          <option value="chungbuk">Chungcheongbuk-do</option>
          <option value="chungnam">Chungcheongnam-do</option>
        </optgroup>
      </Select>
    </Field>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      <Select aria-label="Small select" inputSize="sm">
        <option>sm (32px)</option>
      </Select>
      <Select aria-label="Medium select" inputSize="md">
        <option>md (40px, default)</option>
      </Select>
      <Select aria-label="Large select" inputSize="lg">
        <option>lg (44px touch target)</option>
      </Select>
    </div>
  ),
}
