import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

function TestDialog({ onClose }: { onClose?: () => void }) {
  return (
    <Dialog>
      <DialogTrigger>
        <button type="button">다이얼로그 열기</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>테스트 다이얼로그</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>다이얼로그 내용입니다.</p>
          <button type="button">내부 버튼</button>
        </DialogBody>
        <DialogFooter>
          <DialogClose onClick={onClose}>닫기</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

describe('Dialog', () => {
  it('트리거 클릭으로 다이얼로그가 열린다', async () => {
    render(<TestDialog />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('role="dialog"와 aria-modal="true"가 있다', async () => {
    render(<TestDialog />)
    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
  })

  it('DialogTitle이 aria-labelledby로 연결된다', async () => {
    render(<TestDialog />)
    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))

    const dialog = screen.getByRole('dialog')
    const titleId = dialog.getAttribute('aria-labelledby')
    const title = document.getElementById(titleId ?? '')
    expect(title).toHaveTextContent('테스트 다이얼로그')
  })

  it('Escape 키로 다이얼로그가 닫힌다', async () => {
    render(<TestDialog />)
    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('닫기 버튼으로 다이얼로그가 닫힌다', async () => {
    const onClose = vi.fn()
    render(<TestDialog onClose={onClose} />)
    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))
    await userEvent.click(screen.getByRole('button', { name: '닫기' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalled()
  })

  it('열린 상태 접근성 위반이 없다', async () => {
    render(<TestDialog />)
    await userEvent.click(screen.getByRole('button', { name: '다이얼로그 열기' }))

    const results = await axe(document.body)
    expect(results).toHaveNoViolations()
  })
})
