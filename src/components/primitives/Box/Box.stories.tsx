import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: '기초/박스',
  component: Box,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Box**는 단순한 레이아웃 조합에 사용하는 기본 컨테이너 래퍼입니다. \`as\` 속성으로 의미 요소를 바꾸면서도 동일한 스타일 API를 유지할 수 있습니다.

## 대표 용도
- 가벼운 레이아웃 래퍼
- 필요할 때 시맨틱 섹션 요소로 사용
- 추가 동작 없이 Tailwind 클래스를 조합하는 용도
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'aside', 'header', 'footer', 'nav', 'span', 'ul', 'li'],
      description: '렌더링할 HTML 요소입니다.',
      table: { defaultValue: { summary: 'div' } },
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS 클래스입니다.',
    },
    children: {
      control: 'text',
      description: '자식 콘텐츠입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: '기본 박스 콘텐츠',
    className: 'rounded-md border border-border-default bg-bg-subtle p-4',
  },
}

export const SemanticElements: Story = {
  name: '시맨틱 요소 비교',
  render: () => (
    <div className="grid gap-4">
      <Box as="section" className="rounded-md border border-border-default bg-bg-subtle p-4">
        section 요소로 렌더링
      </Box>
      <Box as="article" className="rounded-md border border-border-default bg-bg-subtle p-4">
        article 요소로 렌더링
      </Box>
      <Box as="nav" className="rounded-md border border-border-default bg-bg-subtle p-4">
        nav 요소로 렌더링
      </Box>
    </div>
  ),
}

export const Nested: Story = {
  render: () => (
    <Box className="rounded-lg bg-bg-subtle p-4">
      <Box as="section" className="rounded-md bg-bg-muted p-3">
        <Box as="article" className="rounded border border-border-default bg-bg-default p-2">
          중첩된 Box 구성 예시
        </Box>
      </Box>
    </Box>
  ),
}
