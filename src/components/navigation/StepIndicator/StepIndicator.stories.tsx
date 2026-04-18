import type { Meta, StoryObj } from '@storybook/react'
import { StepIndicator } from './StepIndicator'

const meta: Meta<typeof StepIndicator> = {
  title: '내비게이션/단계 표시기',
  component: StepIndicator,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**StepIndicator**는 여러 단계로 구성된 절차의 진행 상황을 단계별로 보여 줍니다.

## 접근성 메모
- 현재 단계는 색상만이 아니라 텍스트로도 드러나야 합니다.
- 완료된 단계와 앞으로 남은 단계를 구분할 수 있어야 합니다.
- 일반 퍼센트 진행률이 아니라 단계형 흐름에 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    currentStep: {
      control: 'number',
      description: '현재 단계입니다.',
    },
    completedSteps: {
      description: '이미 완료한 단계 목록입니다.',
    },
    steps: {
      description: '순서가 있는 단계 정의입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof StepIndicator>

export const Default: Story = {
  args: {
    currentStep: 2,
    completedSteps: [1],
    steps: [
      { label: '유의사항 확인' },
      { label: '신청인 정보 입력' },
      { label: '내용 검토' },
      { label: '제출' },
    ],
  },
}
