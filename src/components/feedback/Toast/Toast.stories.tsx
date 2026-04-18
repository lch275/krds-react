import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta: Meta<typeof Toast> = {
  title: '피드백/토스트',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Toast**는 사용자 행동 직후 짧게 보여 주는 일시적인 피드백 메시지입니다.

## 접근성 메모
- 문구는 짧고 바로 이해되게 유지합니다.
- 차단성 오류보다는 완료 안내나 가벼운 상태 전달에 사용합니다.
- 오래 유지되는 경우 닫기 동작에 접근할 수 있어야 합니다.
        `,
      },
    },
  },
  argTypes: {
    duration: {
      control: 'number',
      description: '자동 닫힘 시간(ms)입니다. `0`이면 유지됩니다.',
    },
    children: {
      control: 'text',
      description: '토스트 메시지입니다.',
    },
    tone: {
      control: 'select',
      options: ['default', 'success', 'warning', 'error', 'info'],
      description: '토스트 스타일입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {
    duration: 0,
    children: '정상적으로 저장되었습니다.',
  },
}
