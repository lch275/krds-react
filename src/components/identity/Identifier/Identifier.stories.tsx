import type { Meta, StoryObj } from '@storybook/react'
import { Identifier } from './Identifier'

const meta: Meta<typeof Identifier> = {
  title: '아이덴티티/식별자',
  component: Identifier,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Identifier**는 기관 정체성을 간결하게 보여 주는 식별 블록으로, 밝은 톤과 어두운 톤 모두에 대응합니다.

## 접근성 메모
- 기관명은 분명하게 드러나야 합니다.
- 두 톤 모두에서 충분한 대비를 유지해야 합니다.
- 같은 기관 맥락을 공유하는 페이지에서는 일관된 식별 표현을 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    organization: {
      control: 'text',
      description: '기관명입니다.',
    },
    tone: {
      control: 'select',
      options: ['light', 'dark'],
      description: '표현 톤입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Identifier>

export const Default: Story = {
  args: {
    organization: '보건복지부',
  },
}

export const Tones: Story = {
  name: '톤 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Identifier organization="보건복지부" />
      <div className="bg-slate-900 p-4">
        <Identifier organization="보건복지부" tone="dark" />
      </div>
    </div>
  ),
}
