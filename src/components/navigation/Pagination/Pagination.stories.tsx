import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: '내비게이션/페이지네이션',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Pagination**은 긴 결과 목록을 페이지 단위로 이동할 수 있게 하는 탐색 컴포넌트입니다.

## 접근성 메모
- 현재 페이지를 명확하게 드러냅니다.
- 이전/다음 이동은 키보드로 쉽게 접근 가능해야 합니다.
- 전체 페이지 수가 많다면 축약 범위를 적절히 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    currentPage: {
      control: 'number',
      description: '현재 활성 페이지입니다.',
    },
    totalPages: {
      control: 'number',
      description: '전체 페이지 수입니다.',
    },
    siblingCount: {
      control: 'number',
      description: '현재 페이지 주변에 표시할 인접 페이지 수입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    currentPage: 3,
    totalPages: 9,
  },
}

export const CompactRange: Story = {
  name: '축약 범위',
  args: {
    currentPage: 8,
    totalPages: 20,
    siblingCount: 1,
  },
}
