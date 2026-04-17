import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/inputs/Checkbox/Checkbox'
import { ConsentSection } from './ConsentSection'

const meta: Meta<typeof ConsentSection> = {
  title: 'Patterns/ConsentSection',
  component: ConsentSection,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ConsentSection** groups related consent options under one visible explanation.

## Accessibility notes
- Separate required and optional consent items clearly
- Keep legal text readable and grouped with the control it belongs to
- Avoid bundling unrelated policies into a single consent block
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading.',
    },
    description: {
      control: 'text',
      description: 'Supporting explanation.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ConsentSection>

export const Default: Story = {
  render: (args) => (
    <ConsentSection {...args}>
      <Checkbox defaultChecked>Agree to the collection and use of personal data.</Checkbox>
      <Checkbox>Agree to receive service updates.</Checkbox>
    </ConsentSection>
  ),
  args: {
    title: 'Privacy consent',
    description: 'Review the required terms before you submit the application.',
  },
}
