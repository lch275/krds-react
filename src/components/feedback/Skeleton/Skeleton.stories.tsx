import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Skeleton** reserves layout space while content is still loading.

## Accessibility notes
- Use skeletons only as a temporary placeholder
- Keep the loading layout close to the final structure
- Avoid exposing skeleton blocks as meaningful content to assistive technology
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional Tailwind classes that define the placeholder shape.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="grid gap-2">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  ),
}
