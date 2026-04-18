import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: '내비게이션/브레드크럼',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Breadcrumb**는 현재 페이지가 사이트 구조에서 어디에 있는지 계층적으로 보여 줍니다.

## 접근성 메모
- 현재 페이지는 링크가 아닌 텍스트로 표현하는 것이 좋습니다.
- 상위 경로 의미가 분명할 때만 사용합니다.
- 축약 표시를 하더라도 스크린 리더에는 전체 경로 맥락이 유지되어야 합니다.
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: '최상위부터 현재 페이지까지의 순서화된 경로입니다.',
    },
    maxItems: {
      control: 'number',
      description: '축약 전 표시할 최대 항목 수입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: '홈', href: '#' },
      { label: '디자인 시스템', href: '#' },
      { label: '컴포넌트', href: '#' },
      { label: '현재 페이지' },
    ],
  },
}

export const Collapsed: Story = {
  args: {
    maxItems: 4,
    items: [
      { label: '홈', href: '#' },
      { label: '1단계', href: '#' },
      { label: '2단계', href: '#' },
      { label: '3단계', href: '#' },
      { label: '현재 페이지' },
    ],
  },
}
