import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from './FilterChip'

const meta: Meta<typeof FilterChip> = {
  title: 'UI/FilterChip',
  component: FilterChip,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FilterChip>

export const Default: Story = {
  args: {
    children: 'Housing',
  },
}

export const Selected: Story = {
  args: {
    children: 'Benefits',
    selected: true,
  },
}
