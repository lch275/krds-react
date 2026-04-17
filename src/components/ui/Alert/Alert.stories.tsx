import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Alert** communicates important contextual information to the user.

## Live region mapping
| live value | role | Use case |
| --- | --- | --- |
| \`off\` | \`region\` | Static information already present in the page flow |
| \`polite\` | \`status\` | Non-blocking updates announced when possible |
| \`assertive\` | \`alert\` | Urgent issues that should interrupt current reading |

## Accessibility notes
- Pair tone with text, not color alone
- Use live regions only for dynamic alerts
- Prefer concise titles and short body copy
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert tone.',
      table: { defaultValue: { summary: 'info' } },
    },
    title: {
      control: 'text',
      description: 'Alert title.',
    },
    children: {
      control: 'text',
      description: 'Optional body content.',
    },
    live: {
      control: 'select',
      options: ['off', 'polite', 'assertive'],
      description: 'ARIA live region behavior.',
      table: { defaultValue: { summary: 'off' } },
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'info',
    title: 'Helpful information',
    children: 'This message provides context the user should review.',
  },
}

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Service notice',
    children: 'A new service flow will be available on January 1, 2024.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Request submitted',
    children: 'The civil request has been received successfully.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Check the input',
    children: 'Please review the information one more time before submitting.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Connection error',
    children: 'The service cannot reach the server right now. Please try again later.',
  },
}

export const TitleOnly: Story = {
  args: {
    variant: 'info',
    title: 'Title only alert',
  },
}

export const LivePolite: Story = {
  name: 'Polite Live Region',
  args: {
    variant: 'success',
    title: 'Save complete',
    children: 'Your changes have been saved.',
    live: 'polite',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `polite` when the update matters but should not interrupt the current task.',
      },
    },
  },
}

export const LiveAssertive: Story = {
  name: 'Assertive Live Region',
  args: {
    variant: 'error',
    title: 'Session expired',
    children: 'For security reasons you have been signed out. Please sign in again.',
    live: 'assertive',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `assertive` sparingly for urgent issues that must be announced immediately.',
      },
    },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert variant="info" title="Info">
        Informational status message.
      </Alert>
      <Alert variant="success" title="Success">
        Task completed successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        User confirmation is recommended.
      </Alert>
      <Alert variant="error" title="Error">
        A blocking problem has occurred.
      </Alert>
    </div>
  ),
}
