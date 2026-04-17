import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Overlays/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Tabs** implements the ARIA Tabs Pattern with keyboard support and predictable content association.

## Compound structure
\`\`\`tsx
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
\`\`\`

## Keyboard behavior
| Key | Behavior |
| --- | --- |
| Arrow keys | Move focus between triggers |
| Home | Move focus to the first trigger |
| End | Move focus to the last trigger |
| Enter / Space | Activate the focused tab in manual mode |
| Tab | Leaves the tablist as a single stop |

## Activation modes
- \`automatic\`: focus movement activates the tab immediately
- \`manual\`: focus moves first, then activation happens on Enter or Space
        `,
      },
    },
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Initial active tab for uncontrolled usage.',
    },
    value: {
      control: 'text',
      description: 'Controlled active tab value.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab orientation.',
      table: { defaultValue: { summary: 'horizontal' } },
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'Tab activation strategy.',
      table: { defaultValue: { summary: 'automatic' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes on the root element.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="info">Request details</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
        <TabsTrigger value="docs">Documents</TabsTrigger>
      </TabsList>
      <TabsContent value="info" className="p-4">
        <p className="text-text-default">Review the primary request information.</p>
      </TabsContent>
      <TabsContent value="history" className="p-4">
        <p className="text-text-default">Review the processing timeline and status history.</p>
      </TabsContent>
      <TabsContent value="docs" className="p-4">
        <p className="text-text-default">Review attached files and submitted materials.</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'info',
    orientation: 'horizontal',
    activationMode: 'automatic',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('info')

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-text-subtle">
          Active tab: <strong>{value}</strong>
        </p>
        <Tabs value={value} onValueChange={setValue}>
          <TabsList>
            <TabsTrigger value="info">Request details</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="info" className="p-4">
            Request details content
          </TabsContent>
          <TabsContent value="history" className="p-4">
            History content
          </TabsContent>
          <TabsContent value="docs" className="p-4">
            Documents content
          </TabsContent>
        </Tabs>
      </div>
    )
  },
}

export const Vertical: Story = {
  name: 'Vertical Layout',
  render: (args) => (
    <Tabs {...args} className="min-h-48">
      <TabsList>
        <TabsTrigger value="personal">Personal info</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
        <TabsTrigger value="address">Address</TabsTrigger>
      </TabsList>
      <TabsContent value="personal" className="flex-1 p-4">
        <p className="text-text-default">Personal information panel</p>
      </TabsContent>
      <TabsContent value="contact" className="flex-1 p-4">
        <p className="text-text-default">Contact information panel</p>
      </TabsContent>
      <TabsContent value="address" className="flex-1 p-4">
        <p className="text-text-default">Address information panel</p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'personal',
    orientation: 'vertical',
  },
}

export const ManualActivation: Story = {
  name: 'Manual Activation',
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4">
        Focus moves with the arrow keys, but activation waits for Enter or Space.
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        Tab 2 content
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        Tab 3 content
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
    activationMode: 'manual',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Manual activation is useful when changing tabs triggers heavier rendering or data loading.',
      },
    },
  },
}

export const WithDisabledTab: Story = {
  name: 'With Disabled Tab',
  render: () => (
    <Tabs defaultValue="available">
      <TabsList>
        <TabsTrigger value="available">Available</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Coming soon
        </TabsTrigger>
        <TabsTrigger value="other">Other</TabsTrigger>
      </TabsList>
      <TabsContent value="available" className="p-4">
        Available service content.
      </TabsContent>
      <TabsContent value="disabled" className="p-4">
        Disabled content should not become active.
      </TabsContent>
      <TabsContent value="other" className="p-4">
        Alternative service content.
      </TabsContent>
    </Tabs>
  ),
}

export const KeepMounted: Story = {
  name: 'Keep Mounted',
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" keepMounted className="p-4">
        Tab 1 stays in the DOM and is only hidden when inactive.
      </TabsContent>
      <TabsContent value="tab2" keepMounted className="p-4">
        Use `keepMounted` when hidden panels need to preserve local state.
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When `keepMounted` is enabled, inactive panels remain mounted instead of being removed from the DOM.',
      },
    },
  },
}

export const ManyTabs: Story = {
  name: 'Many Tabs',
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList>
        {Array.from({ length: 6 }, (_, index) => (
          <TabsTrigger key={index} value={`tab${index + 1}`}>
            Tab {index + 1}
          </TabsTrigger>
        ))}
      </TabsList>
      {Array.from({ length: 6 }, (_, index) => (
        <TabsContent key={index} value={`tab${index + 1}`} className="p-4">
          Content for tab {index + 1}.
        </TabsContent>
      ))}
    </Tabs>
  ),
}
