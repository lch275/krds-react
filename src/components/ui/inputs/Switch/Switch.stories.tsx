import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'UI/Inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Switch** represents an immediate on/off setting. Unlike a checkbox, it is better suited to toggles that take effect right away.

## Checkbox vs switch
| Pattern | Checkbox | Switch |
| --- | --- | --- |
| Best for | Selection in a set | Immediate setting toggle |
| Mental model | Include or exclude | Turn on or off |
| ARIA role | checkbox | switch |

## Accessibility notes
- Standalone switch usage should provide an accessible name
- The component exposes on/off state to assistive technology
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled state.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial uncontrolled state.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state.',
      table: { defaultValue: { summary: 'false' } },
    },
    children: {
      control: 'text',
      description: 'Visible label text.',
    },
    'aria-label': {
      control: 'text',
      description: 'Accessible name for unlabeled usage.',
    },
    className: {
      control: 'text',
      description: 'Additional Tailwind classes.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    children: 'Receive notifications',
    defaultChecked: false,
  },
}

export const Checked: Story = {
  args: {
    children: 'Dark mode',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Pause service access',
    disabled: true,
    defaultChecked: false,
  },
}

export const DisabledChecked: Story = {
  name: 'Disabled + Checked',
  args: {
    children: 'Required feature',
    disabled: true,
    defaultChecked: true,
  },
}

export const WithoutLabel: Story = {
  name: 'Without Visible Label',
  args: {
    'aria-label': 'Receive notifications',
    defaultChecked: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there is no visible label, provide `aria-label` so the switch still has an accessible name.',
      },
    },
  },
}

export const SettingsList: Story = {
  name: 'Settings List',
  render: () => (
    <div className="flex max-w-sm flex-col divide-y divide-border-default">
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">Email notifications</p>
          <p className="text-xs text-text-subtle">Receive notices by email.</p>
        </div>
        <Switch aria-label="Email notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">SMS notifications</p>
          <p className="text-xs text-text-subtle">Receive urgent alerts by text message.</p>
        </div>
        <Switch aria-label="SMS notifications" defaultChecked={false} />
      </div>
      <div className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-text-default">Marketing messages</p>
          <p className="text-xs text-text-subtle">Receive event and benefit updates.</p>
        </div>
        <Switch aria-label="Marketing messages" defaultChecked={false} disabled />
      </div>
    </div>
  ),
}

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch defaultChecked={false}>Off</Switch>
      <Switch defaultChecked>On</Switch>
      <Switch defaultChecked={false} disabled>
        Disabled off
      </Switch>
      <Switch defaultChecked disabled>
        Disabled on
      </Switch>
    </div>
  ),
}
