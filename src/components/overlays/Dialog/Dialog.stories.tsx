import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'
import { Button } from '@/components/ui/Button/Button'
import { Field, FieldLabel } from '@/components/ui/Field/Field'
import { Input } from '@/components/ui/inputs/Input/Input'

const meta: Meta<typeof Dialog> = {
  title: 'Overlays/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Dialog** provides a modal surface with focus management, Escape handling, and labelled content wiring.

## Compound structure
\`\`\`tsx
<Dialog>
  <DialogTrigger><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogClose />
    </DialogHeader>
    <DialogBody>Body content</DialogBody>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
\`\`\`

## Accessibility notes
- Uses \`role="dialog"\` and \`aria-modal="true"\`
- Connects \`DialogTitle\` through \`aria-labelledby\`
- Keeps focus inside the dialog while open
- Closes on Escape by default
- Restores focus to the trigger after closing
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controlled open state.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Initial uncontrolled open state.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            Do you want to continue? This action cannot be undone.
          </DialogDescription>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  args: {
    defaultOpen: false,
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)}>Open</Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
        <p className="text-sm text-text-subtle">State: {open ? 'Open' : 'Closed'}</p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled dialog</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <DialogBody>
              <DialogDescription>
                This dialog is controlled by an external React state value.
              </DialogDescription>
            </DialogBody>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}

export const DeleteConfirm: Story = {
  name: 'Delete Confirmation',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button variant="danger">Delete request</Button>
      </DialogTrigger>
      <DialogContent closeOnOverlayClick={false}>
        <DialogHeader>
          <DialogTitle>Delete request</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            Are you sure you want to delete request &apos;2024-KR-001234&apos;?
          </DialogDescription>
          <p className="mt-2 text-sm text-status-error">
            Deleted requests cannot be restored.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="danger">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `closeOnOverlayClick={false}` when accidental dismissal is too risky.',
      },
    },
  },
}

export const FormDialog: Story = {
  name: 'Form Dialog',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Edit request</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit request details</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Field required>
              <FieldLabel>Name</FieldLabel>
              <Input defaultValue="Kim Minjun" />
            </Field>
            <Field required>
              <FieldLabel>Contact</FieldLabel>
              <Input type="tel" defaultValue="010-1234-5678" />
            </Field>
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button variant="primary">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LongContent: Story = {
  name: 'Long Content',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open privacy policy</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy policy</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <DialogBody>
          <DialogDescription>This policy becomes effective on January 1, 2024.</DialogDescription>
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-text-default">Section {index + 1}</h3>
              <p className="mt-1 text-sm text-text-subtle">
                This section explains what personal information is collected, why it is
                processed, and how long it is retained by the service.
              </p>
            </div>
          ))}
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Close</Button>
          </DialogClose>
          <Button variant="primary">Agree</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutOverlayClose: Story = {
  name: 'Overlay Close Disabled',
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open critical action</Button>
      </DialogTrigger>
      <DialogContent closeOnOverlayClick={false}>
        <DialogHeader>
          <DialogTitle>Important confirmation</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            Clicking the overlay will not dismiss this dialog. Close it with Escape or one
            of the visible actions.
          </DialogDescription>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
