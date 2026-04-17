import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from '@/components/ui/FilterChip/FilterChip'
import { ResultSummary } from './ResultSummary'

const meta: Meta<typeof ResultSummary> = {
  title: 'Patterns/ResultSummary',
  component: ResultSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ResultSummary** gives users a quick overview of result count, query context, and active filters.

## Accessibility notes
- Keep the count and query readable as plain text
- Selected filters should remain understandable without relying on visuals alone
- Use summary content to orient the user before the result list begins
        `,
      },
    },
  },
  argTypes: {
    total: {
      control: 'number',
      description: 'Total number of results.',
    },
    query: {
      control: 'text',
      description: 'Current query text.',
    },
    actions: {
      description: 'Optional area for filter chips or summary actions.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ResultSummary>

export const Default: Story = {
  args: {
    total: 24,
    query: 'housing',
    actions: (
      <div className="flex gap-2">
        <FilterChip selected>Benefits</FilterChip>
        <FilterChip removable>Housing</FilterChip>
      </div>
    ),
  },
}
