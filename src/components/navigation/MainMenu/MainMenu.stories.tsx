import type { Meta, StoryObj } from '@storybook/react'
import { MainMenu } from './MainMenu'

const meta: Meta<typeof MainMenu> = {
  title: '내비게이션/메인 메뉴',
  component: MainMenu,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**MainMenu**는 서비스의 최상위 내비게이션을 표현하며, 필요하면 하위 묶음 링크를 함께 보여 줄 수 있습니다.

## 접근성 메모
- 현재 섹션은 분명하게 구분되어야 합니다.
- 하위 링크 그룹은 키보드로 접근 가능하고 DOM 순서대로 읽혀야 합니다.
- 페이지별 동작이 아니라 사이트의 주 내비게이션에 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: '선택적 하위 항목을 포함할 수 있는 최상위 내비게이션 항목입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof MainMenu>

export const Default: Story = {
  args: {
    items: [
      {
        label: '서비스',
        current: true,
        children: [
          { label: '주거 지원', href: '#', description: '주거 지원 사업을 확인합니다.' },
          { label: '보육 지원', href: '#', description: '보육 서비스 신청 절차를 안내합니다.' },
        ],
      },
      { label: '소식', href: '#' },
      { label: '이용 안내', href: '#' },
    ],
  },
}
