import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Help/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip** provides short supplemental guidance on hover or focus.

## Accessibility notes
- Keep tooltip content brief
- Do not place essential instructions only inside a tooltip
- Ensure the trigger itself has a clear accessible name
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <button
          type="button"
          className="rounded-control border border-border-default px-3 py-2"
        >
          Hover help
        </button>
      </TooltipTrigger>
      <TooltipContent>Short supplemental guidance.</TooltipContent>
    </Tooltip>
  ),
}
