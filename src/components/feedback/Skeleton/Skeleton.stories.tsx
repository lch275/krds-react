import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: '피드백/스켈레톤',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Skeleton**은 콘텐츠가 아직 로딩 중일 때 최종 레이아웃 자리를 미리 확보하는 플레이스홀더입니다.

## 접근성 메모
- 스켈레톤은 임시 로딩 표현으로만 사용합니다.
- 실제 완성 레이아웃과 최대한 비슷한 구조를 유지합니다.
- 보조 기술에는 의미 있는 콘텐츠처럼 노출하지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: '플레이스홀더 형태를 정의하는 추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => (
    <div className="grid gap-2">
      <Skeleton className="h-6 w-40" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  ),
}
