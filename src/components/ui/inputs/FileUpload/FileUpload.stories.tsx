import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/Field'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'UI/Inputs/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Attachment</FieldLabel>
      <FileUpload {...args} />
      <FieldDescription>Choose a file from your device.</FieldDescription>
    </Field>
  ),
}

export const DragAndDrop: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>Attachment</FieldLabel>
      <FileUpload {...args} dragAndDrop multiple />
      <FieldDescription>Drag files into the upload area or choose them manually.</FieldDescription>
    </Field>
  ),
}
