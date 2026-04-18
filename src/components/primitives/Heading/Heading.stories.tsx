import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

const meta: Meta<typeof Heading> = {
  title: '기초/제목',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Heading**은 문서 구조를 위한 의미상의 제목 레벨과 화면에 보이는 시각 크기를 분리해 제어할 수 있는 컴포넌트입니다.

## 의미 레벨과 시각 레벨
- \`as="h3"\`는 문서 구조상의 제목 레벨을 정합니다.
- \`level={2}\`는 화면에 보이는 시각 크기를 정합니다.

\`\`\`tsx
<Heading as="h3" level={2}>Section title</Heading>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: '의미상의 HTML 제목 요소입니다.',
      table: { defaultValue: { summary: 'h2' } },
    },
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: '시각적 크기 레벨입니다.',
    },
    children: {
      control: 'text',
      description: '제목 텍스트입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Heading>

export const Default: Story = {
  args: {
    children: '섹션 제목',
    as: 'h2',
  },
}

export const SemanticVsVisual: Story = {
  name: '의미와 시각 분리',
  render: () => (
    <div className="flex flex-col gap-3">
      <p className="text-sm text-text-subtle">의미 레벨: h3, 시각 레벨: 1</p>
      <Heading as="h3" level={1}>
        h3 구조를 유지한 채 h1 크기로 표시
      </Heading>
      <p className="text-sm text-text-subtle">의미 레벨: h1, 시각 레벨: 4</p>
      <Heading as="h1" level={4}>
        h1 구조를 유지한 채 h4 크기로 표시
      </Heading>
    </div>
  ),
}

export const Levels: Story = {
  name: '레벨 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Heading as="h1">H1 페이지 제목</Heading>
      <Heading as="h2">H2 섹션 제목</Heading>
      <Heading as="h3">H3 하위 섹션 제목</Heading>
      <Heading as="h4">H4 그룹 제목</Heading>
      <Heading as="h5">H5 항목 제목</Heading>
      <Heading as="h6">H6 보조 제목</Heading>
    </div>
  ),
}
