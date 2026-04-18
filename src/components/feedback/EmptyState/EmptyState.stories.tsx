import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button/Button'
import { EmptyState } from './EmptyState'

const meta: Meta<typeof EmptyState> = {
  title: '피드백/빈 상태',
  component: EmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**EmptyState**는 현재 표시할 내용이 없는 이유를 설명하고, 다음 행동을 안내하는 패턴입니다.

## 접근성 메모
- 짧고 분명한 제목과 설명을 함께 제공합니다.
- 가능하면 다음 행동으로 이어지는 버튼이나 링크를 함께 배치합니다.
- 로딩이나 오류처럼 다른 피드백 패턴이 필요한 상황에는 사용하지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '빈 상태의 제목입니다.',
    },
    description: {
      control: 'text',
      description: '보조 설명 문구입니다.',
    },
    actions: {
      description: '선택적으로 넣는 행동 영역입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: '저장된 임시 저장 항목이 없습니다',
    description: '새 신청을 시작하거나 현재 검색 조건을 조정해 보세요.',
    actions: <Button>신청 시작</Button>,
  },
}
