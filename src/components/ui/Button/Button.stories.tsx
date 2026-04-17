import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Button** is a polymorphic action component. It defaults to a native \`button\`, but it can render an anchor when navigation semantics are required.

## Accessibility notes
- Defaults to \`type="button"\` to avoid accidental form submission
- Exposes \`aria-busy\` while loading
- When rendered as \`a\`, disabled state falls back to \`aria-disabled\` and \`tabIndex={-1}\`
- Icon-only usage should always provide an accessible name
- \`size="lg"\` is suitable for 44px minimum target guidance
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link'],
      description: 'Visual style variant.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Control size.',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows loading affordance and sets aria-busy.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables interaction.',
      table: { defaultValue: { summary: 'false' } },
    },
    as: {
      control: 'select',
      options: ['button', 'a', 'span', 'div'],
      description: 'Rendered HTML element.',
      table: { defaultValue: { summary: 'button' } },
    },
    children: {
      control: 'text',
      description: 'Button label.',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name, required for icon-only usage.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Primary action', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Secondary action', variant: 'secondary' },
}

export const Ghost: Story = {
  args: { children: 'Ghost action', variant: 'ghost' },
}

export const Danger: Story = {
  args: { children: 'Delete item', variant: 'danger' },
}

export const LinkVariant: Story = {
  args: { children: 'Inline action', variant: 'link' },
}

export const Loading: Story = {
  args: { children: 'Saving', loading: true },
}

export const Disabled: Story = {
  args: { children: 'Disabled action', disabled: true },
}

export const LoadingAndDisabled: Story = {
  name: 'Loading + Disabled',
  args: { children: 'Submitting', loading: true, disabled: true },
}

export const AsLink: Story = {
  name: 'Rendered As Link',
  args: { as: 'a', href: '#', children: 'Go to details' },
  parameters: {
    docs: {
      description: {
        story:
          'Use `as="a"` when the control performs navigation and provide a valid `href`.',
      },
    },
  },
}

export const AsLinkDisabled: Story = {
  name: 'Disabled Link',
  args: { as: 'a', href: '#', children: 'Unavailable destination', disabled: true },
  parameters: {
    docs: {
      description: {
        story:
          'Anchors do not support the native `disabled` attribute, so the component applies `aria-disabled` and removes the tab stop.',
      },
    },
  },
}

export const IconOnly: Story = {
  name: 'Icon Only',
  args: {
    'aria-label': 'Close dialog',
    children: 'X',
    variant: 'ghost',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Icon-only buttons should always provide an accessible name through `aria-label`.',
      },
    },
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="danger">danger</Button>
      <Button variant="link">link</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">Default</span>
        <Button variant="primary">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="ghost">Button</Button>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">Loading</span>
        <Button variant="primary" loading>
          Button
        </Button>
        <Button variant="secondary" loading>
          Button
        </Button>
        <Button variant="ghost" loading>
          Button
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">Disabled</span>
        <Button variant="primary" disabled>
          Button
        </Button>
        <Button variant="secondary" disabled>
          Button
        </Button>
        <Button variant="ghost" disabled>
          Button
        </Button>
      </div>
    </div>
  ),
}
