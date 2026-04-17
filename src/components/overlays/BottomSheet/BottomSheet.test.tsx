import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
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

function TestBottomSheet() {
  return (
    <BottomSheet>
      <BottomSheetTrigger>
        <button type="button">Open</button>
      </BottomSheetTrigger>
      <BottomSheetContent>
        <BottomSheetHeader>
          <BottomSheetTitle>Sheet title</BottomSheetTitle>
          <BottomSheetDescription>Sheet description</BottomSheetDescription>
        </BottomSheetHeader>
        <BottomSheetBody>Sheet body</BottomSheetBody>
        <BottomSheetFooter>
          <BottomSheetClose>Close</BottomSheetClose>
        </BottomSheetFooter>
      </BottomSheetContent>
    </BottomSheet>
  )
}

describe('BottomSheet', () => {
  it('opens from the trigger', async () => {
    render(<TestBottomSheet />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('closes from the close button', async () => {
    render(<TestBottomSheet />)
    await userEvent.click(screen.getByRole('button', { name: 'Open' }))
    await userEvent.click(screen.getByRole('button', { name: 'Close' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
