import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'

function TestTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">탭 1</TabsTrigger>
        <TabsTrigger value="tab2">탭 2</TabsTrigger>
        <TabsTrigger value="tab3" disabled>탭 3 (비활성)</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">탭 1 콘텐츠</TabsContent>
      <TabsContent value="tab2">탭 2 콘텐츠</TabsContent>
      <TabsContent value="tab3">탭 3 콘텐츠</TabsContent>
    </Tabs>
  )
}

describe('Tabs', () => {
  it('기본 렌더링 및 첫 번째 탭 활성화', () => {
    render(<TestTabs />)
    expect(screen.getByText('탭 1 콘텐츠')).toBeInTheDocument()
    expect(screen.queryByText('탭 2 콘텐츠')).not.toBeInTheDocument()
  })

  it('탭 클릭으로 전환된다', async () => {
    render(<TestTabs />)
    await userEvent.click(screen.getByRole('tab', { name: '탭 2' }))
    expect(screen.getByText('탭 2 콘텐츠')).toBeInTheDocument()
    expect(screen.queryByText('탭 1 콘텐츠')).not.toBeInTheDocument()
  })

  it('활성 탭만 tabindex=0, 나머지는 -1 (roving tabindex)', () => {
    render(<TestTabs />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('tabindex', '0')
    expect(tabs[1]).toHaveAttribute('tabindex', '-1')
  })

  it('aria-selected 속성이 올바르게 설정된다', async () => {
    render(<TestTabs />)
    expect(screen.getByRole('tab', { name: '탭 1' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tab', { name: '탭 2' })).toHaveAttribute('aria-selected', 'false')

    await userEvent.click(screen.getByRole('tab', { name: '탭 2' }))
    expect(screen.getByRole('tab', { name: '탭 2' })).toHaveAttribute('aria-selected', 'true')
  })

  it('tab과 panel이 aria-controls/aria-labelledby로 연결된다', () => {
    render(<TestTabs />)
    const tab = screen.getByRole('tab', { name: '탭 1' })
    const panel = screen.getByRole('tabpanel')

    expect(tab.getAttribute('aria-controls')).toBe(panel.id)
    expect(panel.getAttribute('aria-labelledby')).toBe(tab.id)
  })

  it('방향키로 탭 간 포커스 이동 (automatic mode)', async () => {
    render(<TestTabs />)
    const tab1 = screen.getByRole('tab', { name: '탭 1' })
    tab1.focus()

    await userEvent.keyboard('{ArrowRight}')
    expect(screen.getByRole('tab', { name: '탭 2' })).toHaveFocus()
    expect(screen.getByText('탭 2 콘텐츠')).toBeInTheDocument()
  })

  it('비활성화된 탭을 건너뛰지 않는다 (disabled 처리)', () => {
    render(<TestTabs />)
    expect(screen.getByRole('tab', { name: '탭 3 (비활성)' })).toBeDisabled()
  })

  it('접근성 위반이 없다', async () => {
    const { container } = render(<TestTabs />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
