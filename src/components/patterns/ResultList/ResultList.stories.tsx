import type { Meta, StoryObj } from '@storybook/react'
import { ResultList } from './ResultList'

const meta: Meta<typeof ResultList> = {
  title: 'Patterns/ResultList',
  component: ResultList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ResultList** displays a list of search or browse results with optional metadata.

## Accessibility notes
- Result titles should be descriptive enough to stand on their own
- Metadata should supplement the result, not replace the title
- Use result lists for browseable content, not for strictly tabular data
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: 'Result items containing title, link, description, and optional metadata.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ResultList>

export const Default: Story = {
  args: {
    items: [
      {
        title: 'Housing support application',
        href: '#',
        description: 'Apply for housing support programs and review eligibility.',
        metadata: 'Updated 2026-04-10',
      },
      {
        title: 'Housing subsidy guide',
        href: '#',
        description: 'Read the latest subsidy guidance and required documents.',
        metadata: 'Updated 2026-03-28',
      },
    ],
  },
}
