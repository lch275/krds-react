import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: '인터페이스/버튼',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Button**은 기본적으로 네이티브 \`button\`으로 렌더링되며, 이동 목적의 동작에는 앵커 요소로도 사용할 수 있는 다형 컴포넌트입니다.

## 접근성 메모
- 기본값으로 \`type="button"\`을 사용해 의도치 않은 폼 제출을 막습니다.
- 로딩 중에는 \`aria-busy\`를 노출합니다.
- \`a\`로 렌더링될 때 비활성 상태는 \`aria-disabled\`와 \`tabIndex={-1}\`로 처리합니다.
- 아이콘만 있는 버튼은 반드시 접근 가능한 이름을 제공해야 합니다.
- \`size="lg"\`는 44px 이상 터치 타깃 가이드에 맞는 크기입니다.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'link'],
      description: '버튼 시각 스타일입니다.',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기입니다.',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태를 표시하고 `aria-busy`를 설정합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '상호작용을 비활성화합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    as: {
      control: 'select',
      options: ['button', 'a', 'span', 'div'],
      description: '렌더링할 HTML 요소입니다.',
      table: { defaultValue: { summary: 'button' } },
    },
    children: {
      control: 'text',
      description: '버튼 텍스트입니다.',
    },
    'aria-label': {
      control: 'text',
      description: '접근 가능한 이름입니다. 아이콘 전용 버튼에서 필수입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: { children: '확인', variant: 'primary' },
}

export const Loading: Story = {
  args: { children: '저장 중', loading: true },
}

export const Disabled: Story = {
  args: { children: '비활성 버튼', disabled: true },
}

export const AsLink: Story = {
  name: '링크로 사용',
  args: { as: 'a', href: '#', children: '상세 보기' },
  parameters: {
    docs: {
      description: {
        story: '페이지 이동이 목적일 때는 `as="a"`를 사용하고, 유효한 `href`를 함께 제공합니다.',
      },
    },
  },
}

export const DisabledLink: Story = {
  name: '비활성 링크',
  args: { as: 'a', href: '#', children: '현재 이동 불가', disabled: true },
  parameters: {
    docs: {
      description: {
        story:
          '앵커 요소는 네이티브 `disabled`를 지원하지 않으므로, 컴포넌트가 `aria-disabled`와 탭 이동 제거로 비활성 상태를 표현합니다.',
      },
    },
  },
}

export const IconOnly: Story = {
  name: '아이콘 전용',
  args: {
    'aria-label': '닫기',
    children: 'X',
    variant: 'ghost',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '아이콘만 있는 버튼은 반드시 `aria-label` 등으로 접근 가능한 이름을 제공해야 합니다.',
      },
    },
  },
}

export const SizeVariants: Story = {
  name: '크기 비교',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">작게</Button>
      <Button size="md">기본</Button>
      <Button size="lg">크게</Button>
    </div>
  ),
}

export const Variants: Story = {
  name: '변형 비교',
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">기본</Button>
      <Button variant="secondary">보조</Button>
      <Button variant="ghost">고스트</Button>
      <Button variant="danger">삭제</Button>
      <Button variant="link">텍스트 링크</Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">기본</span>
        <Button variant="primary">버튼</Button>
        <Button variant="secondary">버튼</Button>
        <Button variant="ghost">버튼</Button>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">로딩</span>
        <Button variant="primary" loading>
          버튼
        </Button>
        <Button variant="secondary" loading>
          버튼
        </Button>
        <Button variant="ghost" loading>
          버튼
        </Button>
      </div>
      <div className="flex items-center gap-3">
        <span className="w-24 text-sm text-text-subtle">비활성</span>
        <Button variant="primary" disabled>
          버튼
        </Button>
        <Button variant="secondary" disabled>
          버튼
        </Button>
        <Button variant="ghost" disabled>
          버튼
        </Button>
      </div>
    </div>
  ),
}
