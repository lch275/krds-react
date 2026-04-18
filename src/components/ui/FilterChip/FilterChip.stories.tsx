import type { Meta, StoryObj } from '@storybook/react'
import { FilterChip } from './FilterChip'

const meta: Meta<typeof FilterChip> = {
  title: '인터페이스/필터 칩',
  component: FilterChip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FilterChip**은 현재 적용된 필터나 선택 가능한 분류를 짧은 칩 형태로 보여 주는 컴포넌트입니다.

## 접근성 메모
- 선택 상태는 색상만이 아니라 텍스트나 상태 변화로도 이해 가능해야 합니다.
- 삭제 가능한 칩은 명확한 제거 동작을 제공해야 합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterChip>

export const Default: Story = {
  args: {
    children: '주거',
  },
}

export const Selected: Story = {
  args: {
    children: '복지',
    selected: true,
  },
}
