import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@/components/ui/inputs/Checkbox/Checkbox'
import { ConsentSection } from './ConsentSection'

const meta: Meta<typeof ConsentSection> = {
  title: '패턴/동의 섹션',
  component: ConsentSection,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ConsentSection**은 관련된 동의 항목을 하나의 설명 아래 묶어 보여 주는 패턴입니다.

## 접근성 메모
- 필수와 선택 동의 항목은 분명히 구분합니다.
- 법적 문구는 해당 컨트롤과 가까이 배치해 읽기 쉽게 유지합니다.
- 관련 없는 정책을 한 동의 블록에 과도하게 묶지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '섹션 제목입니다.',
    },
    description: {
      control: 'text',
      description: '보조 설명입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ConsentSection>

export const Default: Story = {
  render: (args) => (
    <ConsentSection {...args}>
      <Checkbox defaultChecked>개인정보 수집 및 이용에 동의합니다.</Checkbox>
      <Checkbox>서비스 안내 수신에 동의합니다.</Checkbox>
    </ConsentSection>
  ),
  args: {
    title: '개인정보 동의',
    description: '신청 제출 전 필수 약관을 확인해 주세요.',
  },
}
