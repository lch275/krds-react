import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup } from './RadioGroup'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/Inputs/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**RadioGroup** and **Radio** provide exclusive single-choice selection.

## Keyboard behavior
- Tab enters and leaves the group
- Arrow keys move between options and update selection
- Disabled options are skipped in the navigation order

## Accessibility notes
- The group should expose a label through \`aria-label\`, \`aria-labelledby\`, or \`Field\`
- Orientation influences arrow-key direction expectations
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Controlled value.',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial uncontrolled value.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the entire group.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Marks the field as required.',
      table: { defaultValue: { summary: 'false' } },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Layout direction.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible group label.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Gender">
      <Radio value="male">Male</Radio>
      <Radio value="female">Female</Radio>
      <Radio value="other">Other</Radio>
    </RadioGroup>
  ),
  args: {
    orientation: 'vertical',
    disabled: false,
    required: false,
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Agreement">
      <Radio value="agree">Agree</Radio>
      <Radio value="disagree">Disagree</Radio>
    </RadioGroup>
  ),
  args: {
    orientation: 'horizontal',
    disabled: false,
  },
}

export const WithDefaultValue: Story = {
  name: 'With Default Value',
  render: (args) => (
    <RadioGroup {...args} aria-label="Processing method">
      <Radio value="online">Online</Radio>
      <Radio value="visit">Visit</Radio>
      <Radio value="mail">Mail</Radio>
    </RadioGroup>
  ),
  args: {
    defaultValue: 'online',
    orientation: 'vertical',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="Processing method">
      <Radio value="online">Online</Radio>
      <Radio value="visit">Visit</Radio>
    </RadioGroup>
  ),
  args: {
    disabled: true,
    defaultValue: 'online',
    orientation: 'vertical',
  },
}

export const PartialDisabled: Story = {
  name: 'Partial Disabled',
  render: () => (
    <RadioGroup aria-label="Service plan">
      <Radio value="basic">Basic service</Radio>
      <Radio value="premium">Premium service</Radio>
      <Radio value="enterprise" disabled>
        Enterprise (coming soon)
      </Radio>
    </RadioGroup>
  ),
}

export const WithField: Story = {
  name: 'With Field',
  render: (args) => (
    <Field required>
      <FieldLabel>Request method</FieldLabel>
      <RadioGroup {...args} aria-label="Request method">
        <Radio value="online">Online request</Radio>
        <Radio value="visit">In-person request</Radio>
        <Radio value="mail">Mail request</Radio>
      </RadioGroup>
      <FieldDescription>Select one method.</FieldDescription>
    </Field>
  ),
  args: {
    orientation: 'vertical',
    disabled: false,
  },
}

export const WithFieldError: Story = {
  name: 'With Field Error',
  render: () => (
    <Field required>
      <FieldLabel>Gender</FieldLabel>
      <RadioGroup aria-label="Gender" orientation="horizontal">
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
        <Radio value="other">Other</Radio>
      </RadioGroup>
      <FieldError>Please select a gender option.</FieldError>
    </Field>
  ),
}

export const AllOrientations: Story = {
  name: 'Orientation Comparison',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-sm text-text-subtle">vertical</p>
        <RadioGroup aria-label="Vertical layout" orientation="vertical">
          <Radio value="a">Option A</Radio>
          <Radio value="b">Option B</Radio>
          <Radio value="c">Option C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-sm text-text-subtle">horizontal</p>
        <RadioGroup aria-label="Horizontal layout" orientation="horizontal">
          <Radio value="a">Option A</Radio>
          <Radio value="b">Option B</Radio>
          <Radio value="c">Option C</Radio>
        </RadioGroup>
      </div>
    </div>
  ),
}
