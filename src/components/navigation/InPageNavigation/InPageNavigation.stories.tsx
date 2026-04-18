import type { Meta, StoryObj } from '@storybook/react'
import { InPageNavigation } from './InPageNavigation'

const meta: Meta<typeof InPageNavigation> = {
  title: '내비게이션/인페이지 내비게이션',
  component: InPageNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**InPageNavigation**은 긴 페이지 내부의 주요 구간을 빠르게 이동할 수 있게 도와주는 인페이지 내비게이션입니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof InPageNavigation>

export const Default: Story = {
  args: {
    items: [
      { id: 'summary', label: '요약' },
      { id: 'eligibility', label: '대상 조건' },
      { id: 'process', label: '신청 절차' },
    ],
  },
}
