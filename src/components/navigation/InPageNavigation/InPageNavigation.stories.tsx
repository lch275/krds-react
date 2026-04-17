import type { Meta, StoryObj } from '@storybook/react'
import { InPageNavigation } from './InPageNavigation'

const meta: Meta<typeof InPageNavigation> = {
  title: 'Navigation/InPageNavigation',
  component: InPageNavigation,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InPageNavigation>

export const Default: Story = {
  args: {
    items: [
      { id: 'summary', label: 'Summary' },
      { id: 'eligibility', label: 'Eligibility' },
      { id: 'process', label: 'Process' },
    ],
  },
}
