import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it, vi } from 'vitest'
import { Field, FieldLabel, FieldDescription, FieldError } from '@/components/ui/Field'
import { Input } from './Input'

describe('Input', () => {
  it('기본 렌더링', () => {
    render(<Input aria-label="이름" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Field 내에서 aria-* 속성이 자동 연결된다', () => {
    render(
      <Field>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" />
      </Field>
    )
    const input = screen.getByRole('textbox')
    // label과 연결
    expect(input).toHaveAttribute('aria-labelledby')
    expect(input).toHaveAccessibleName('이메일')
  })

  it('Field required시 aria-required가 설정된다', () => {
    render(
      <Field required>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" />
      </Field>
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true')
  })

  it('invalid 상태에서 aria-invalid가 설정된다', () => {
    render(
      <Field invalid>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" />
        <FieldError>올바르지 않은 이메일입니다</FieldError>
      </Field>
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  it('disabled 상태에서 사용자 입력이 차단된다', async () => {
    const onChange = vi.fn()
    render(<Input aria-label="이름" disabled onChange={onChange} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, '홍길동')
    expect(onChange).not.toHaveBeenCalled()
    expect(input).toBeDisabled()
  })

  it('description과 error ID가 aria-describedby에 모두 포함된다', () => {
    render(
      <Field invalid>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" />
        <FieldDescription>공공기관 이메일을 입력하세요</FieldDescription>
        <FieldError>올바르지 않은 이메일입니다</FieldError>
      </Field>
    )
    const input = screen.getByRole('textbox')
    const describedBy = input.getAttribute('aria-describedby') ?? ''
    // 두 ID가 모두 포함되어야 함
    expect(describedBy.split(' ')).toHaveLength(2)
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(
      <Field required>
        <FieldLabel>이름</FieldLabel>
        <Input />
      </Field>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('에러 상태 접근성 위반이 없다', async () => {
    const { container } = render(
      <Field invalid>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" />
        <FieldError>올바르지 않은 이메일입니다</FieldError>
      </Field>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
