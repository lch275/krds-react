import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from '@/components/ui/FilterChip/FilterChip'
import { ResultSummary } from './ResultSummary'

const meta: Meta<typeof ResultSummary> = {
  title: '패턴/결과 요약',
  component: ResultSummary,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ResultSummary**는 검색 결과 수, 검색어, 적용된 필터를 한눈에 요약해 보여 줍니다.

## 접근성 메모
- 결과 수와 검색어는 일반 텍스트로도 읽기 쉬워야 합니다.
- 선택된 필터는 시각 표현 없이도 이해 가능해야 합니다.
- 결과 목록이 시작되기 전에 현재 상태를 설명하는 용도로 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    total: {
      control: 'number',
      description: '전체 결과 수입니다.',
    },
    query: {
      control: 'text',
      description: '현재 검색어입니다.',
    },
    actions: {
      description: '필터 칩이나 요약 액션을 넣는 선택 영역입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ResultSummary>

export const Default: Story = {
  args: {
    total: 24,
    query: '주거',
    actions: (
      <div className="flex gap-2">
        <FilterChip selected>복지</FilterChip>
        <FilterChip removable>주거</FilterChip>
      </div>
    ),
  },
}
