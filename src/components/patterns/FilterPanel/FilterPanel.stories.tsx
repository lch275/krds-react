import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/ui/Button/Button'
import { Field, FieldLabel } from '@/components/ui/Field'
import { Input } from '@/components/ui/inputs/Input/Input'
import { Select } from '@/components/ui/inputs/Select/Select'
import { FilterPanel } from './FilterPanel'

const meta: Meta<typeof FilterPanel> = {
  title: '패턴/필터 패널',
  component: FilterPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FilterPanel**은 검색과 결과 좁히기에 쓰는 필터 컨트롤을 하나의 영역으로 묶어 주는 패턴입니다.

## 접근성 메모
- 관련된 컨트롤은 분명한 레이블과 함께 묶습니다.
- 필요하면 초기화나 적용 같은 행동을 분명하게 제공합니다.
- 키보드 사용자도 예측 가능하게 이동할 수 있도록 구조를 유지합니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '컴포넌트가 지원하는 경우 표시할 패널 제목입니다.',
    },
    actions: {
      description: '초기화나 적용 같은 선택적 액션 영역입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterPanel>

export const Default: Story = {
  render: (args) => (
    <FilterPanel {...args}>
      <Field>
        <FieldLabel>검색어</FieldLabel>
        <Input placeholder="검색어를 입력하세요" />
      </Field>
      <Field>
        <FieldLabel>분류</FieldLabel>
        <Select>
          <option>전체</option>
          <option>복지</option>
        </Select>
      </Field>
    </FilterPanel>
  ),
  args: {
    actions: <Button variant="secondary">초기화</Button>,
  },
}
