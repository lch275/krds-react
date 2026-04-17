import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { Field, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Checkbox** supports three states: unchecked, checked, and indeterminate.

## States
- \`false\`: unchecked
- \`true\`: checked
- \`'indeterminate'\`: partially selected

## Accessibility notes
- Indeterminate maps to \`aria-checked="mixed"\`
- Visible children create a clickable label area
- Standalone usage without children should provide an accessible name
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: 'Controlled state.',
    },
    defaultChecked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: 'Initial uncontrolled state.',
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
    invalid: {
      control: 'boolean',
      description: 'Invalid state.',
    },
    children: {
      control: 'text',
      description: 'Visible label text.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    children: 'I agree to the collection of personal information.',
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    children: 'I agree to the terms of use.',
    defaultChecked: true,
  },
}

export const Indeterminate: Story = {
  args: {
    children: 'Select all',
    checked: 'indeterminate',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use the indeterminate state when only part of a group selection is currently checked.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled option',
    disabled: true,
    defaultChecked: false,
  },
}

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: {
    children: 'Locked option',
    disabled: true,
    defaultChecked: true,
  },
}

export const Invalid: Story = {
  args: {
    children: 'Required consent item',
    invalid: true,
  },
}

export const WithField: Story = {
  name: 'With Field',
  render: (args) => (
    <Field required invalid={args.invalid}>
      <FieldLabel hideRequired>Consent</FieldLabel>
      <Checkbox {...args}>I agree to the privacy policy.</Checkbox>
      <FieldError>{args.invalid ? 'Consent is required.' : undefined}</FieldError>
    </Field>
  ),
  args: {
    invalid: false,
    disabled: false,
  },
}

export const SelectAll: Story = {
  name: 'Select All Pattern',
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox checked="indeterminate">
        <strong>Select all</strong>
      </Checkbox>
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox defaultChecked>Item 1</Checkbox>
        <Checkbox defaultChecked={false}>Item 2</Checkbox>
        <Checkbox defaultChecked>Item 3</Checkbox>
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox defaultChecked={false}>Unchecked</Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox checked="indeterminate">Indeterminate</Checkbox>
      <Checkbox defaultChecked={false} disabled>
        Disabled unchecked
      </Checkbox>
      <Checkbox defaultChecked disabled>
        Disabled checked
      </Checkbox>
      <Checkbox invalid>Invalid state</Checkbox>
    </div>
  ),
}
