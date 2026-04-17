import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Spinner** represents an in-progress loading state.

## Accessibility notes
- Use \`aria-hidden={true}\` when the spinner is purely decorative
- Provide a meaningful \`label\` when the spinner stands on its own
- When the spinner is not hidden, it should expose a readable label to assistive technology
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Spinner size.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Accessible label when not aria-hidden.',
      table: { defaultValue: { summary: 'Loading' } },
    },
    'aria-hidden': {
      control: 'boolean',
      description: 'Hides the spinner from assistive technology.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {
    size: 'md',
    label: 'Loading',
  },
}

export const ExtraSmall: Story = {
  args: { size: 'xs', label: 'Loading' },
}

export const Small: Story = {
  args: { size: 'sm', label: 'Loading' },
}

export const Medium: Story = {
  args: { size: 'md', label: 'Loading' },
}

export const Large: Story = {
  args: { size: 'lg', label: 'Loading' },
}

export const ExtraLarge: Story = {
  args: { size: 'xl', label: 'Loading' },
}

export const Decorative: Story = {
  name: 'Decorative',
  args: {
    size: 'md',
    'aria-hidden': true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use decorative mode when the surrounding UI already communicates loading context.',
      },
    },
  },
}

export const WithColor: Story = {
  name: 'Color Variations',
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="md" label="Loading" className="text-primary" />
      <Spinner size="md" label="Loading" className="text-status-success" />
      <Spinner size="md" label="Loading" className="text-status-error" />
      <Spinner size="md" label="Loading" className="text-text-subtle" />
    </div>
  ),
}

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" label="Loading" />
        <span className="text-xs text-text-muted">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" label="Loading" />
        <span className="text-xs text-text-muted">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" label="Loading" />
        <span className="text-xs text-text-muted">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" label="Loading" />
        <span className="text-xs text-text-muted">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" label="Loading" />
        <span className="text-xs text-text-muted">xl</span>
      </div>
    </div>
  ),
}
