import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: 'Primitives/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Heading** separates semantic heading level from visual size so document structure can remain correct without sacrificing layout needs.

## Semantic vs visual level
- \`as="h3"\` controls the semantic document outline
- \`level={2}\` controls the visual heading size

\`\`\`tsx
<Heading as="h3" level={2}>Section title</Heading>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Semantic HTML heading element.',
      table: { defaultValue: { summary: 'h2' } },
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Visual size level.',
    },
    children: {
      control: 'text',
      description: 'Heading text.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: 'Section title',
    as: 'h2',
  },
}

export const H1: Story = {
  args: { as: 'h1', children: 'Page title (h1)' },
}

export const H2: Story = {
  args: { as: 'h2', children: 'Section title (h2)' },
}

export const H3: Story = {
  args: { as: 'h3', children: 'Subsection title (h3)' },
}

export const H4: Story = {
  args: { as: 'h4', children: 'Group title (h4)' },
}

export const H5: Story = {
  args: { as: 'h5', children: 'Item title (h5)' },
}

export const H6: Story = {
  args: { as: 'h6', children: 'Subitem title (h6)' },
}

export const SemanticVsVisual: Story = {
  name: 'Semantic Vs Visual',
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-text-subtle">Semantic level: h3, visual level: 1</p>
      <Heading as="h3" level={1}>
        h3 element rendered with h1 visual size
      </Heading>
      <p className="text-sm text-text-subtle">Semantic level: h1, visual level: 4</p>
      <Heading as="h1" level={4}>
        h1 element rendered with h4 visual size
      </Heading>
    </div>
  ),
}

export const AllLevels: Story = {
  name: 'All Levels',
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading as="h1">H1 main page heading</Heading>
      <Heading as="h2">H2 section heading</Heading>
      <Heading as="h3">H3 subsection heading</Heading>
      <Heading as="h4">H4 group heading</Heading>
      <Heading as="h5">H5 item heading</Heading>
      <Heading as="h6">H6 subitem heading</Heading>
    </div>
  ),
}
