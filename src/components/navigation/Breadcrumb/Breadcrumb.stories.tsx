import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumb** shows the current page location within a hierarchy.

## Accessibility notes
- The current page should not be rendered as a link
- Use breadcrumb navigation only when there is a meaningful parent path
- Collapsed presentation should still preserve the full path for screen readers
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Ordered breadcrumb items from root to current page.',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of visible items before collapsing.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Design system', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Current page' },
    ],
  },
}

export const Collapsed: Story = {
  args: {
    maxItems: 4,
    items: [
      { label: 'Home', href: '#' },
      { label: 'Level 1', href: '#' },
      { label: 'Level 2', href: '#' },
      { label: 'Level 3', href: '#' },
      { label: 'Current page' },
    ],
  },
}
