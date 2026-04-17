import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ProgressBar** shows determinate progress for a known task length.

## Accessibility notes
- Use a visible label when the progress meaning is not obvious from context
- Determinate progress should expose the current value and maximum
- Use a spinner or skeleton instead when completion percentage is unknown
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Progress label.',
    },
    value: {
      control: 'number',
      description: 'Current progress value.',
    },
    max: {
      control: 'number',
      description: 'Maximum progress value.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    label: 'Application processing',
    value: 62,
  },
}
