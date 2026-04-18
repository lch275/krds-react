import type { Meta, StoryObj } from '@storybook/react'
import { Header } from './Header'

const meta: Meta<typeof Header> = {
  title: '레이아웃/헤더',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Header**는 서비스 단위의 상단 영역으로, 유틸리티 링크와 주요 내비게이션을 함께 제공합니다.

## 접근성 메모
- 서비스 이름은 분명하고 항상 보이도록 유지합니다.
- 유틸리티 링크와 주요 내비게이션은 구조적으로 구분되어야 합니다.
- 헤더는 현재 서비스 맥락을 보여 주는 용도로 쓰고, 페이지별 임시 동작은 넣지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    serviceName: {
      control: 'text',
      description: '화면에 보이는 서비스 이름입니다.',
    },
    utilityLinks: {
      description: '주요 내비게이션 위나 옆에 배치되는 유틸리티 링크입니다.',
    },
    navigation: {
      description: '주요 내비게이션 항목입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    serviceName: '국민 서비스',
    utilityLinks: [
      { label: '로그인', href: '#' },
      { label: '고객지원', href: '#' },
    ],
    navigation: [
      { label: '서비스 소개', href: '#' },
      { label: '신청', href: '#' },
      { label: '진행 현황', href: '#' },
    ],
  },
}
