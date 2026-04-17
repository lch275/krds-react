import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Text } from './Text'

describe('Text', () => {
  it('기본 p 태그로 렌더링된다', () => {
    render(<Text>본문</Text>)
    expect(screen.getByText('본문').tagName).toBe('P')
  })

  it('as prop으로 span으로 변경된다', () => {
    render(<Text as="span">인라인 텍스트</Text>)
    expect(screen.getByText('인라인 텍스트').tagName).toBe('SPAN')
  })

  it('variant에 따라 data-text-variant 속성이 설정된다', () => {
    render(<Text variant="caption">캡션</Text>)
    expect(screen.getByText('캡션')).toHaveAttribute('data-text-variant', 'caption')
  })

  it('code variant는 font-mono 클래스를 가진다', () => {
    render(<Text variant="code">코드</Text>)
    expect(screen.getByText('코드')).toHaveClass('font-mono')
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(<Text>텍스트 콘텐츠</Text>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
