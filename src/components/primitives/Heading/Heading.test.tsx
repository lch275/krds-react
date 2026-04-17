import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Heading } from './Heading'

describe('Heading', () => {
  it('기본 h2 태그로 렌더링된다', () => {
    render(<Heading>제목</Heading>)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('as prop으로 h1~h6 모든 레벨이 렌더링된다', () => {
    const { rerender } = render(<Heading as="h1">제목</Heading>)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    rerender(<Heading as="h3">제목</Heading>)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('시멘틱 레벨(h3)과 시각적 레벨(2)을 분리할 수 있다', () => {
    render(<Heading as="h3" level={2}>제목</Heading>)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveAttribute('data-heading-level', '2')
  })

  it('data-slot="heading" 속성이 있다', () => {
    render(<Heading>제목</Heading>)
    expect(screen.getByRole('heading')).toHaveAttribute('data-slot', 'heading')
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(
      <div>
        <Heading as="h1">메인 제목</Heading>
        <Heading as="h2">서브 제목</Heading>
      </div>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
