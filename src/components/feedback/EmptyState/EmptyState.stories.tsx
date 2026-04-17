import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button/Button'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: 'Feedback/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**EmptyState** explains why no content is currently visible and suggests the next action.

## Accessibility notes
- Include a clear title and short explanation
- Pair the message with one or two next-step actions when possible
- Do not use an empty state for loading or error conditions that need different feedback patterns
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Primary empty-state heading.',
    },
    description: {
      control: 'text',
      description: 'Supporting explanation.',
    },
    actions: {
      description: 'Optional action area.',
    },
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: 'No saved drafts',
    description: 'Start a new request or adjust the current filters.',
    actions: <Button>Start request</Button>,
  },
}
