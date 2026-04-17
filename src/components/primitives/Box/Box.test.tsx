import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Box } from './Box'

describe('Box', () => {
  it('기본 div로 렌더링된다', () => {
    render(<Box>콘텐츠</Box>)
    expect(screen.getByText('콘텐츠').tagName).toBe('DIV')
  })

  it('as prop으로 시멘틱 태그로 변경된다', () => {
    render(<Box as="section">섹션</Box>)
    expect(screen.getByText('섹션').tagName).toBe('SECTION')
  })

  it('as="main"으로 main 엘리먼트가 렌더링된다', () => {
    render(<Box as="main">주 콘텐츠</Box>)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('as="nav"로 navigation landmark가 된다', () => {
    render(<Box as="nav" aria-label="메인 메뉴">메뉴</Box>)
    expect(screen.getByRole('navigation', { name: '메인 메뉴' })).toBeInTheDocument()
  })

  it('className이 올바르게 적용된다', () => {
    render(<Box className="custom-class">내용</Box>)
    expect(screen.getByText('내용')).toHaveClass('custom-class')
  })

  it('data-slot="box" 속성이 있다', () => {
    render(<Box>내용</Box>)
    expect(screen.getByText('내용')).toHaveAttribute('data-slot', 'box')
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(
      <Box as="nav" aria-label="사이트 맵">
        <a href="/home">홈</a>
      </Box>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
