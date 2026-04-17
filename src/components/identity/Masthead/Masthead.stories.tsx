import type { Meta, StoryObj } from '@storybook/react'
import { Masthead } from './Masthead'

const meta: Meta<typeof Masthead> = {
  title: 'Identity/Masthead',
  component: Masthead,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Masthead** carries top-level identity and official service framing inspired by KRDS.

## Accessibility notes
- Use it to reinforce official identity, not to duplicate main navigation
- Keep the wording short and recognizable
- Pair it carefully with the main header so landmark roles do not become confusing
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Masthead>

export const Default: Story = {}
