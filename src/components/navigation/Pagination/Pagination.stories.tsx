import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Pagination** helps users move through long result sets page by page.

## Accessibility notes
- Expose the current page clearly
- Keep previous and next actions keyboard reachable
- Use a compact range when the total number of pages is large
        `,
      },
    },
  },
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Currently active page.',
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages.',
    },
    siblingCount: {
      control: 'number',
      description: 'Number of adjacent pages shown around the current page.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 3,
    totalPages: 9,
  },
}

export const CompactRange: Story = {
  args: {
    currentPage: 8,
    totalPages: 20,
    siblingCount: 1,
  },
}
