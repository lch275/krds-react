import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: '인터페이스/링크',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Link**는 페이지 이동이나 관련 콘텐츠 탐색을 위한 기본 링크 컴포넌트입니다.

## 접근성 메모
- 링크 텍스트만 읽어도 목적지를 어느 정도 추론할 수 있어야 합니다.
- 비활성 링크는 실제 이동이 발생하지 않도록 처리해야 합니다.
        `,
      },
    },
  },
  args: {
    href: '#',
    children: '상세 페이지 열기',
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {}

export const Subtle: Story = {
  args: {
    tone: 'subtle',
    underline: 'hover',
    children: '보조 링크',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성 링크',
  },
}
