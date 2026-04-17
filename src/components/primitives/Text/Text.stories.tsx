import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Text** provides typographic variants while keeping semantic element choice independent through the \`as\` prop.

## Variants
- \`body-lg\`: larger body copy
- \`body-md\`: default body copy
- \`body-sm\`: compact supporting copy
- \`caption\`: helper or metadata text
- \`overline\`: compact label treatment
- \`code\`: monospace inline code styling
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['body-lg', 'body-md', 'body-sm', 'caption', 'overline', 'code'],
      description: 'Text style variant.',
      table: { defaultValue: { summary: 'body-md' } },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'legend', 'figcaption', 'small', 'strong', 'em'],
      description: 'Rendered HTML element.',
      table: { defaultValue: { summary: 'p' } },
    },
    children: {
      control: 'text',
      description: 'Text content.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children:
      'This is the default body text style used for standard content in the design system.',
    variant: 'body-md',
  },
}

export const BodyLarge: Story = {
  args: {
    children: 'Large body text works well for lead copy and emphasized reading content.',
    variant: 'body-lg',
  },
}

export const BodyMedium: Story = {
  args: {
    children: 'Medium body text is the default style for most interface copy.',
    variant: 'body-md',
  },
}

export const BodySmall: Story = {
  args: {
    children: 'Small body text is suited to supporting information and metadata.',
    variant: 'body-sm',
  },
}

export const Caption: Story = {
  args: {
    children: 'Caption text is useful for helper copy, annotations, and image descriptions.',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'Category label',
    variant: 'overline',
  },
}

export const Code: Story = {
  args: {
    children: 'const greeting = "Hello"',
    variant: 'code',
    as: 'code',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Text variant="body-lg">body-lg: larger body text</Text>
      <Text variant="body-md">body-md: default body text</Text>
      <Text variant="body-sm">body-sm: compact body text</Text>
      <Text variant="caption">caption: helper and metadata text</Text>
      <Text variant="overline">overline: category label</Text>
      <Text variant="code" as="code">
        code: monospace inline code text
      </Text>
    </div>
  ),
}
