import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: '피드백/진행 표시줄',
  component: ProgressBar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ProgressBar**는 전체 길이를 알고 있는 작업의 진행률을 보여 주는 컴포넌트입니다.

## 접근성 메모
- 맥락만으로 의미가 분명하지 않다면 보이는 레이블을 제공합니다.
- 현재 값과 최대값이 함께 드러나야 합니다.
- 완료 비율을 모를 때는 스피너나 스켈레톤을 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '진행 상태 레이블입니다.',
    },
    value: {
      control: 'number',
      description: '현재 진행 값입니다.',
    },
    max: {
      control: 'number',
      description: '최대 진행 값입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Default: Story = {
  args: {
    label: '신청 처리 진행',
    value: 62,
  },
}
