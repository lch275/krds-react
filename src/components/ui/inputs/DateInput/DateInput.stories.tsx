import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/Field'
import { DateInput } from './DateInput'

const meta: Meta<typeof DateInput> = {
  title: '인터페이스/입력/날짜 입력',
  component: DateInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**DateInput**은 단일 날짜를 입력하거나 선택할 때 사용하는 입력 컴포넌트입니다.

## 접근성 메모
- 날짜 형식 안내는 레이블이나 설명으로 함께 제공하는 것이 좋습니다.
- 오류가 있다면 필드 설명과 함께 명확히 노출합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DateInput>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>신청일</FieldLabel>
      <DateInput {...args} />
      <FieldDescription>하루 단위 날짜를 선택하세요.</FieldDescription>
    </Field>
  ),
}

export const Disabled: Story = {
  render: (args) => (
    <Field disabled>
      <FieldLabel>신청일</FieldLabel>
      <DateInput {...args} disabled />
      <FieldDescription>현재는 날짜를 변경할 수 없습니다.</FieldDescription>
    </Field>
  ),
}
