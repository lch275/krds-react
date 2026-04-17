import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Header** provides the service-level top area with utility links and primary navigation.

## Accessibility notes
- Keep the service name clear and visible
- Utility links and primary navigation should remain distinct in structure
- Use the header for orientation, not for unrelated page-specific actions
        `,
      },
    },
  },
  argTypes: {
    serviceName: {
      control: 'text',
      description: 'Visible service name.',
    },
    utilityLinks: {
      description: 'Utility actions shown above or beside the main navigation.',
    },
    navigation: {
      description: 'Primary navigation items.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    serviceName: 'Citizen service',
    utilityLinks: [
      { label: 'Login', href: '#' },
      { label: 'Support', href: '#' },
    ],
    navigation: [
      { label: 'Overview', href: '#' },
      { label: 'Applications', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
}
