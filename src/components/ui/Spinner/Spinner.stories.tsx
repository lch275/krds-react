import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: '인터페이스/스피너',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Spinner**는 진행 중인 로딩 상태를 나타내는 시각적 표시 요소입니다.

## 접근성 메모
- 주변 문맥이 이미 로딩 상태를 충분히 설명한다면 \`aria-hidden={true}\`로 장식용 처리합니다.
- 단독으로 쓰일 때는 의미 있는 \`label\`을 제공합니다.
- 숨기지 않은 스피너는 보조 기술이 읽을 수 있는 이름을 가져야 합니다.
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: '스피너 크기입니다.',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: '`aria-hidden`이 아닐 때 사용할 접근성 레이블입니다.',
      table: { defaultValue: { summary: 'Loading' } },
    },
    'aria-hidden': {
      control: 'boolean',
      description: '보조 기술에서 스피너를 숨깁니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Default: Story = {
  args: {
    size: 'md',
    label: '불러오는 중',
  },
}

export const Decorative: Story = {
  name: '장식용',
  args: {
    size: 'md',
    'aria-hidden': true,
  },
  parameters: {
    docs: {
      description: {
        story: '주변 UI가 이미 로딩 상태를 설명하고 있다면 장식용 스피너로 처리합니다.',
      },
    },
  },
}

export const ContextExample: Story = {
  name: '문맥 예시',
  render: () => (
    <div className="flex items-center gap-3 rounded-lg border border-border-default p-4">
      <Spinner size="sm" label="목록을 불러오는 중" />
      <span className="text-sm text-text-subtle">목록을 불러오는 중입니다.</span>
    </div>
  ),
}

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xs" label="불러오는 중" />
        <span className="text-xs text-text-muted">xs</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" label="불러오는 중" />
        <span className="text-xs text-text-muted">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" label="불러오는 중" />
        <span className="text-xs text-text-muted">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" label="불러오는 중" />
        <span className="text-xs text-text-muted">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" label="불러오는 중" />
        <span className="text-xs text-text-muted">xl</span>
      </div>
    </div>
  ),
}
