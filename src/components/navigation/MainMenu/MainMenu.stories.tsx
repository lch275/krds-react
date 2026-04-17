import type { Meta, StoryObj } from '@storybook/react'
import { MainMenu } from './MainMenu'

const meta: Meta<typeof MainMenu> = {
  title: 'Navigation/MainMenu',
  component: MainMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**MainMenu** represents the top-level service navigation with optional grouped children.

## Accessibility notes
- Clearly identify the current section
- Grouped child links should remain keyboard reachable and readable in source order
- Use this for primary site navigation, not for unrelated page actions
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Top-level navigation items with optional nested children.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof MainMenu>

export const Default: Story = {
  args: {
    items: [
      {
        label: 'Services',
        current: true,
        children: [
          { label: 'Housing support', href: '#', description: 'Find housing programs.' },
          { label: 'Childcare', href: '#', description: 'Apply for childcare services.' },
        ],
      },
      { label: 'News', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
}
