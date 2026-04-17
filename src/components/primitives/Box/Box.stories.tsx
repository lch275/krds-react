import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Primitives/Box',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Box** is the base layout wrapper for simple container composition. It supports the \`as\` prop so semantic HTML can be chosen without changing the styling API.

## Typical usage
- Lightweight layout wrapper
- Semantic sectioning element when needed
- Tailwind class composition without extra component behavior
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'aside', 'header', 'footer', 'nav', 'span', 'ul', 'li'],
      description: 'Rendered HTML element.',
      table: { defaultValue: { summary: 'div' } },
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS classes.',
    },
    children: {
      control: 'text',
      description: 'Child content.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: 'Box content',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4',
  },
}

export const AsSection: Story = {
  args: {
    as: 'section',
    children: 'Rendered as a section element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4',
  },
}

export const AsArticle: Story = {
  args: {
    as: 'article',
    children: 'Rendered as an article element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4',
  },
}

export const AsNav: Story = {
  args: {
    as: 'nav',
    children: 'Rendered as a navigation element',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4',
  },
}

export const Nested: Story = {
  render: () => (
    <Box className="rounded-lg bg-bg-subtle p-4">
      <Box as="section" className="rounded-md bg-bg-muted p-3">
        <Box as="article" className="rounded border border-border-default bg-bg-default p-2">
          Nested Box composition
        </Box>
      </Box>
    </Box>
  ),
}
