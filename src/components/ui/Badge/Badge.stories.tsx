import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Badge** is a compact label used for status, category, and lightweight counts.

## Accessibility notes
- Do not rely on color alone to communicate meaning
- Count badges should provide an accessible label when the raw number is ambiguous
- Dynamic badge updates should be announced from an appropriate live region owned by the parent flow
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'solid'],
      description: 'Badge tone.',
      table: { defaultValue: { summary: 'default' } },
    },
    children: {
      control: 'text',
      description: 'Visible badge text.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: 'Default', variant: 'default' },
}

export const Primary: Story = {
  args: { children: 'Primary', variant: 'primary' },
}

export const Success: Story = {
  args: { children: 'Complete', variant: 'success' },
}

export const Warning: Story = {
  args: { children: 'Warning', variant: 'warning' },
}

export const Error: Story = {
  args: { children: 'Error', variant: 'error' },
}

export const Info: Story = {
  args: { children: 'Info', variant: 'info' },
}

export const Solid: Story = {
  args: { children: 'Emphasis', variant: 'solid' },
}

export const WithAriaLabel: Story = {
  name: 'Count Badge',
  args: {
    children: '3',
    variant: 'primary',
    'aria-label': '3 unread notifications',
  },
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Complete</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="solid">Emphasis</Badge>
    </div>
  ),
}

export const StatusExample: Story = {
  name: 'Status Example',
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-text-default">Request status</span>
        <Badge variant="success">Approved</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">Civil request intake</span>
        <Badge variant="warning">Reviewing</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">System health</span>
        <Badge variant="error">Down</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">New notices</span>
        <Badge variant="primary" aria-label="5 new notices">
          5
        </Badge>
      </div>
    </div>
  ),
}
