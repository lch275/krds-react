import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Checkbox } from './Checkbox'
import '@testing-library/jest-dom'

describe('Checkbox', () => {
  it('기본 렌더링', () => {
    render(<Checkbox>동의합니다</Checkbox>)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText('동의합니다')).toBeInTheDocument()
  })

  it('클릭으로 토글된다', async () => {
    const onChange = vi.fn()
    render(<Checkbox onCheckedChange={onChange}>동의</Checkbox>)
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledWith(true)
  })

  it('indeterminate 상태가 올바르게 표현된다', () => {
    render(<Checkbox checked="indeterminate">전체 선택</Checkbox>)
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-checked', 'mixed')
  })

  it('controlled 모드로 동작한다', () => {
    render(<Checkbox checked={true}>동의</Checkbox>)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('disabled 상태에서 클릭이 차단된다', async () => {
    const onChange = vi.fn()
    render(
      <Checkbox disabled onCheckedChange={onChange}>
        동의
      </Checkbox>
    )
    await userEvent.click(screen.getByRole('checkbox'))
    expect(onChange).not.toHaveBeenCalled()
  })

  it('data-state 속성이 올바르게 설정된다', async () => {
    const { rerender } = render(<Checkbox>동의</Checkbox>)
    const root = screen.getByRole('checkbox').closest('[data-slot="checkbox-root"]')

    expect(root).toHaveAttribute('data-state', 'unchecked')

    rerender(<Checkbox checked={true}>동의</Checkbox>)
    expect(root).toHaveAttribute('data-state', 'checked')

    rerender(<Checkbox checked="indeterminate">동의</Checkbox>)
    expect(root).toHaveAttribute('data-state', 'indeterminate')
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(<Checkbox>개인정보 수집에 동의합니다</Checkbox>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
