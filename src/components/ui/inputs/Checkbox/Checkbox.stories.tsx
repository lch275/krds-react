import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { Field, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Checkbox> = {
  title: '인터페이스/입력/체크박스',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Checkbox**는 선택 안 됨, 선택됨, 일부 선택됨의 세 가지 상태를 지원합니다.

## 상태
- \`false\`: 선택 안 됨
- \`true\`: 선택됨
- \`'indeterminate'\`: 일부만 선택됨

## 접근성 메모
- 일부 선택 상태는 \`aria-checked="mixed"\`로 매핑됩니다.
- 텍스트 자식이 있으면 레이블 영역 전체를 클릭할 수 있습니다.
- 텍스트 없이 단독으로 사용할 때는 접근 가능한 이름을 제공해야 합니다.
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: '제어형 체크 상태입니다.',
    },
    defaultChecked: {
      control: 'select',
      options: [true, false, 'indeterminate'],
      description: '초기 비제어 상태입니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성 상태입니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: '필수 입력으로 표시합니다.',
    },
    invalid: {
      control: 'boolean',
      description: '오류 상태입니다.',
    },
    children: {
      control: 'text',
      description: '보이는 레이블 텍스트입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    children: '개인정보 수집 및 이용에 동의합니다.',
    defaultChecked: false,
  },
}

export const Indeterminate: Story = {
  args: {
    children: '전체 선택',
    checked: 'indeterminate',
  },
  parameters: {
    docs: {
      description: {
        story: '그룹 항목 중 일부만 선택된 상태를 표현할 때 `indeterminate`를 사용합니다.',
      },
    },
  },
}

export const Invalid: Story = {
  args: {
    children: '필수 동의 항목',
    invalid: true,
  },
}

export const WithField: Story = {
  name: 'Field와 함께 사용',
  render: (args) => (
    <Field required invalid={args.invalid}>
      <FieldLabel hideRequired>동의 항목</FieldLabel>
      <Checkbox {...args}>개인정보 처리방침에 동의합니다.</Checkbox>
      <FieldError>{args.invalid ? '필수 동의가 필요합니다.' : undefined}</FieldError>
    </Field>
  ),
  args: {
    invalid: false,
    disabled: false,
  },
}

export const SelectAll: Story = {
  name: '전체 선택 패턴',
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox checked="indeterminate">
        <strong>전체 선택</strong>
      </Checkbox>
      <div className="ml-6 flex flex-col gap-2">
        <Checkbox defaultChecked>신청서 작성</Checkbox>
        <Checkbox defaultChecked={false}>증빙 서류 제출</Checkbox>
        <Checkbox defaultChecked>개인정보 제공 동의</Checkbox>
      </div>
    </div>
  ),
}

export const States: Story = {
  name: '상태 비교',
  render: () => (
    <div className="flex flex-col gap-3">
      <Checkbox defaultChecked={false}>선택 안 됨</Checkbox>
      <Checkbox defaultChecked>선택됨</Checkbox>
      <Checkbox checked="indeterminate">일부 선택</Checkbox>
      <Checkbox defaultChecked={false} disabled>
        비활성(해제)
      </Checkbox>
      <Checkbox defaultChecked disabled>
        비활성(선택)
      </Checkbox>
      <Checkbox invalid>오류 상태</Checkbox>
    </div>
  ),
}
