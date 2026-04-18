import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: '도움말/툴팁',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Tooltip**은 호버 또는 포커스 시 짧은 보조 안내를 제공하는 패턴입니다.

## 접근성 메모
- 툴팁 내용은 짧게 유지합니다.
- 중요한 지시 사항을 툴팁 안에만 넣지 않습니다.
- 트리거 요소 자체도 분명한 접근성 이름을 가져야 합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger>
        <button
          type="button"
          className="rounded-control border border-border-default px-3 py-2"
        >
          도움말 보기
        </button>
      </TooltipTrigger>
      <TooltipContent>짧은 보조 안내 문구입니다.</TooltipContent>
    </Tooltip>
  ),
}
