import type { Meta, StoryObj } from '@storybook/react'
import { Identifier } from './Identifier'

const meta: Meta<typeof Identifier> = {
  title: 'Identity/Identifier',
  component: Identifier,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Identifier** presents organization identity in a compact block that can support dark or light presentation.

## Accessibility notes
- Keep the organization name explicit
- Ensure contrast remains sufficient in both tones
- Use identifier content consistently across pages that share the same organization context
        `,
      },
    },
  },
  argTypes: {
    organization: {
      control: 'text',
      description: 'Organization name.',
    },
    tone: {
      control: 'select',
      options: ['light', 'dark'],
      description: 'Visual tone.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Identifier>

export const Light: Story = {
  args: {
    organization: 'Ministry of Health and Welfare',
  },
}

export const Dark: Story = {
  args: {
    organization: 'Ministry of Health and Welfare',
    tone: 'dark',
  },
}
