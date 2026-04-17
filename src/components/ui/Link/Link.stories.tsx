import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    href: '#',
    children: 'Open destination',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}

export const Subtle: Story = {
  args: {
    tone: 'subtle',
    underline: 'hover',
    children: 'Subtle link',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled link',
  },
}
