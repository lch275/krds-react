import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('기본 button으로 렌더링된다', () => {
    render(<Button>클릭</Button>)
    expect(screen.getByRole('button', { name: '클릭' })).toBeInTheDocument()
  })

  it('as="a"로 링크로 변환된다', () => {
    render(<Button as="a" href="/home">홈으로</Button>)
    expect(screen.getByRole('link', { name: '홈으로' })).toBeInTheDocument()
  })

  it('Enter/Space 키로 활성화된다', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>제출</Button>)
    const btn = screen.getByRole('button')
    btn.focus()

    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard(' ')
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it('disabled 상태에서 클릭이 차단된다', async () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick}>비활성</Button>)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('loading 상태에서 aria-busy가 설정된다', () => {
    render(<Button loading>저장 중</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
  })

  it('loading 상태에서 Spinner가 렌더링된다', () => {
    render(<Button loading>저장 중</Button>)
    // Spinner는 aria-hidden이므로 화면에는 안 보임, DOM에는 있음
    expect(document.querySelector('[data-slot="spinner"]')).toBeInTheDocument()
  })

  it('data-state 속성이 올바르게 설정된다', () => {
    const { rerender } = render(<Button>버튼</Button>)
    expect(screen.getByRole('button')).not.toHaveAttribute('data-state')

    rerender(<Button loading>버튼</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'loading')

    rerender(<Button disabled>버튼</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-state', 'disabled')
  })

  it('type="button"이 기본값이다 (form 의도치 않은 제출 방지)', () => {
    render(<Button>버튼</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('icon-only 버튼: aria-label이 있어야 접근 가능', async () => {
    const { container } = render(
      <Button aria-label="닫기">×</Button>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('모든 variant의 접근성 위반이 없다', async () => {
    const { container } = render(
      <div>
        <Button variant="primary">기본</Button>
        <Button variant="secondary">보조</Button>
        <Button variant="ghost">고스트</Button>
        <Button variant="danger">삭제</Button>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
