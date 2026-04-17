import type { Meta, StoryObj } from '@storybook/react'
import { ContextualHelp } from './ContextualHelp'

const meta: Meta<typeof ContextualHelp> = {
  title: 'Help/ContextualHelp',
  component: ContextualHelp,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ContextualHelp** pairs a short explanation with an optional follow-up link.

## Accessibility notes
- Use this pattern for non-blocking support content
- Keep the title specific to the nearby task
- The linked destination should expand on the same topic rather than changing context unexpectedly
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Help heading.',
    },
    children: {
      control: 'text',
      description: 'Supporting content.',
    },
    linkHref: {
      control: 'text',
      description: 'Optional destination URL.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ContextualHelp>

export const Default: Story = {
  args: {
    title: 'Why this matters',
    children: 'Use contextual help for request-driven supporting content.',
    linkHref: 'https://www.krds.go.kr',
  },
}
