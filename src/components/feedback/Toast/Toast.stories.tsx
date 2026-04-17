import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Toast** provides short-lived feedback after a user action.

## Accessibility notes
- Keep toast copy concise
- Use toast for confirmation and lightweight status, not blocking errors
- Ensure dismiss controls are reachable when the toast stays visible
        `,
      },
    },
  },
  argTypes: {
    duration: {
      control: 'number',
      description: 'Auto-dismiss delay in milliseconds. Use 0 to keep it visible.',
    },
    children: {
      control: 'text',
      description: 'Toast message.',
    },
    tone: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: 'Visual tone.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    duration: 0,
    children: 'Saved successfully.',
  },
}
