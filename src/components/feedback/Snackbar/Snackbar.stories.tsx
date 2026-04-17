import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './Snackbar'

const meta: Meta<typeof Snackbar> = {
  title: 'Feedback/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Snackbar** presents transient feedback with an optional inline action.

## Accessibility notes
- Prefer a single clear action
- Use snackbar for recoverable events, such as retry or undo
- Avoid placing long-form explanations in this pattern
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Short leading title.',
    },
    children: {
      control: 'text',
      description: 'Supporting message.',
    },
    actionLabel: {
      control: 'text',
      description: 'Optional action button label.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  args: {
    title: 'Retry upload',
    children: 'The previous upload failed. Try again.',
    actionLabel: 'Retry',
  },
}
