import type { Meta, StoryObj } from '@storybook/react'
import { SideNavigation } from './SideNavigation'

const meta: Meta<typeof SideNavigation> = {
  title: 'Navigation/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**SideNavigation** is suited to section-level navigation within a service area.

## Accessibility notes
- Indicate the current item clearly
- Nested navigation should preserve a logical heading and hierarchy
- Use side navigation for structural movement, not inline actions
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Navigation heading.',
    },
    items: {
      description: 'Navigation items with optional nested children.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof SideNavigation>

export const Default: Story = {
  args: {
    title: 'Citizen service',
    items: [
      { label: 'Overview', href: '#', current: true },
      {
        label: 'Applications',
        children: [
          { label: 'New request', href: '#' },
          { label: 'Saved drafts', href: '#' },
        ],
      },
      { label: 'Status', href: '#' },
    ],
  },
}
