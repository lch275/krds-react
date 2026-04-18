import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: '인터페이스/배지',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Badge**는 상태, 분류, 개수 정보를 짧게 강조할 때 사용하는 소형 레이블입니다.

## 접근성 메모
- 의미를 색상만으로 전달하지 않습니다.
- 숫자만 보이는 배지는 필요하면 접근성 레이블을 함께 제공합니다.
- 동적으로 바뀌는 배지는 상위 문맥의 적절한 라이브 리전에서 안내하는 것이 좋습니다.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'solid'],
      description: '배지 스타일입니다.',
      table: { defaultValue: { summary: 'default' } },
    },
    children: {
      control: 'text',
      description: '보이는 배지 텍스트입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: { children: '기본', variant: 'default' },
}

export const WithAriaLabel: Story = {
  name: '개수 배지',
  args: {
    children: '3',
    variant: 'primary',
    'aria-label': '읽지 않은 알림 3건',
  },
}

export const Variants: Story = {
  name: '변형 비교',
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="default">기본</Badge>
      <Badge variant="primary">강조</Badge>
      <Badge variant="success">완료</Badge>
      <Badge variant="warning">검토 중</Badge>
      <Badge variant="error">오류</Badge>
      <Badge variant="info">안내</Badge>
      <Badge variant="solid">중요</Badge>
    </div>
  ),
}

export const StatusExample: Story = {
  name: '상태 예시',
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-text-default">민원 상태</span>
        <Badge variant="success">승인</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">접수 현황</span>
        <Badge variant="warning">검토 중</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">시스템 상태</span>
        <Badge variant="error">중단</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-text-default">새 공지</span>
        <Badge variant="primary" aria-label="새 공지 5건">
          5
        </Badge>
      </div>
    </div>
  ),
}
