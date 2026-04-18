import type { Meta, StoryObj } from '@storybook/react'
import { SideNavigation } from './SideNavigation'

const meta: Meta<typeof SideNavigation> = {
  title: '내비게이션/사이드 내비게이션',
  component: SideNavigation,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**SideNavigation**은 서비스 내부 섹션 단위 이동에 적합한 측면 내비게이션입니다.

## 접근성 메모
- 현재 항목이 분명하게 표시되어야 합니다.
- 중첩 내비게이션은 제목과 계층 구조가 논리적으로 유지되어야 합니다.
- 인라인 동작이 아니라 구조적 이동에 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '내비게이션 제목입니다.',
    },
    items: {
      description: '선택적 하위 항목을 포함할 수 있는 내비게이션 목록입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof SideNavigation>

export const Default: Story = {
  args: {
    title: '국민 서비스',
    items: [
      { label: '서비스 소개', href: '#', current: true },
      {
        label: '신청',
        children: [
          { label: '새 신청', href: '#' },
          { label: '임시 저장', href: '#' },
        ],
      },
      { label: '진행 현황', href: '#' },
    ],
  },
}
