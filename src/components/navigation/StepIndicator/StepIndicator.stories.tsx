import type { Meta, StoryObj } from '@storybook/react'
import { StepIndicator } from './StepIndicator'

const meta: Meta<typeof StepIndicator> = {
  title: 'Navigation/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**StepIndicator** communicates progress through a multi-step flow.

## Accessibility notes
- The current step should be exposed in text, not color alone
- Completed steps should be distinguishable from upcoming steps
- Use this pattern for guided flows, not for general progress percentages
        `,
      },
    },
  },
  argTypes: {
    currentStep: {
      control: 'number',
      description: 'Current active step.',
    },
    completedSteps: {
      description: 'Steps that are already complete.',
    },
    steps: {
      description: 'Ordered step definitions.',
    },
  },
}

export default meta
type Story = StoryObj<typeof StepIndicator>

export const Default: Story = {
  args: {
    currentStep: 2,
    completedSteps: [1],
    steps: [
      { label: 'Check notices' },
      { label: 'Applicant details' },
      { label: 'Review' },
      { label: 'Submit' },
    ],
  },
}
