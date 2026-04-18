import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './Snackbar'

const meta: Meta<typeof Snackbar> = {
  title: '피드백/스낵바',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Snackbar**는 일시적인 피드백과 함께 선택적 인라인 액션을 제공하는 패턴입니다.

## 접근성 메모
- 하나의 분명한 액션을 우선합니다.
- 재시도나 되돌리기처럼 복구 가능한 상황에 사용합니다.
- 긴 설명 문구는 이 패턴에 넣지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '짧은 제목입니다.',
    },
    children: {
      control: 'text',
      description: '보조 메시지입니다.',
    },
    actionLabel: {
      control: 'text',
      description: '선택적 액션 버튼 레이블입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  args: {
    title: '업로드 재시도',
    children: '이전 업로드에 실패했습니다. 다시 시도해 주세요.',
    actionLabel: '재시도',
  },
}
