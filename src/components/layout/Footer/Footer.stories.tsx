import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Footer** holds organization information, policy links, and supporting utility links.

## Accessibility notes
- Keep legal and policy links easy to find
- Organization identity should remain readable in both dense and spacious layouts
- Do not overload the footer with a second primary navigation system
        `,
      },
    },
  },
  argTypes: {
    organization: {
      control: 'text',
      description: 'Organization name.',
    },
    address: {
      control: 'text',
      description: 'Organization address or contact location.',
    },
    utilityLinks: {
      description: 'Supplementary utility links.',
    },
    policyLinks: {
      description: 'Policy and legal links.',
    },
    copyright: {
      control: 'text',
      description: 'Footer copyright line.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    organization: 'Ministry portal',
    address: 'Sejong-daero, Seoul',
    utilityLinks: [
      { label: 'Directions', href: '#' },
      { label: 'Contact us', href: '#' },
    ],
    policyLinks: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of use', href: '#' },
    ],
    copyright: '© 2026 Ministry portal.',
  },
}
