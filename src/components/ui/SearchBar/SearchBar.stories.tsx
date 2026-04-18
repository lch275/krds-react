import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar } from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  title: '인터페이스/검색바',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**SearchBar**는 검색어 입력과 추천어 제시를 결합한 검색 입력 컴포넌트입니다.

## 접근성 메모
- 추천어는 키보드로도 탐색 가능해야 합니다.
- 검색창의 목적이 드러나는 레이블 또는 플레이스홀더를 제공합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  args: {
    suggestions: [
      { label: '장애인 연금' },
      { label: '주거 지원' },
      { label: '보육 지원 신청' },
    ],
  },
}

export const EmptySuggestions: Story = {
  name: '추천어 없음',
  args: {
    suggestions: [],
  },
}
