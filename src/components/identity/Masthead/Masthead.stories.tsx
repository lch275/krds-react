import type { Meta, StoryObj } from '@storybook/react'
import { Masthead } from './Masthead'

const meta: Meta<typeof Masthead> = {
  title: '아이덴티티/마스트헤드',
  component: Masthead,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Masthead**는 KRDS 스타일의 공식 서비스 식별과 상단 프레이밍을 담당하는 컴포넌트입니다.

## 접근성 메모
- 공식 서비스 정체성을 보강하는 용도로 사용하고, 주 내비게이션을 중복하지 않습니다.
- 문구는 짧고 즉시 인식 가능해야 합니다.
- 메인 헤더와 함께 배치할 때 랜드마크 역할이 혼란스럽지 않도록 구성합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Masthead>

export const Default: Story = {}
