import type { Meta, StoryObj } from '@storybook/react'
import {
  BottomSheet,
  BottomSheetBody,
  BottomSheetClose,
  BottomSheetContent,
  BottomSheetDescription,
  BottomSheetFooter,
  BottomSheetHeader,
  BottomSheetTitle,
  BottomSheetTrigger,
} from './BottomSheet'
import { Button } from '@/components/ui/Button/Button'

const meta: Meta<typeof BottomSheet> = {
  title: 'Overlays/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BottomSheet>

export const Default: Story = {
  render: () => (
    <BottomSheet>
      <BottomSheetTrigger>
        <Button>Open bottom sheet</Button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>Select a contact channel</BottomSheetTitle>
          <BottomSheetDescription>
            Bottom sheets are useful for focused mobile selection tasks.
          </BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetBody>
          <div className="grid gap-2">
            <Button variant="secondary">Phone consultation</Button>
            <Button variant="secondary">Email response</Button>
          </div>
        </BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose>
            <Button variant="ghost">Close</Button>
          </BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  ),
}
