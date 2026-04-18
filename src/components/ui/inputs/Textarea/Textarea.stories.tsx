import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './Textarea'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Textarea> = {
  title: '인터페이스/입력/텍스트영역',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Textarea**는 여러 줄의 긴 텍스트를 입력할 때 사용하는 기본 입력 컴포넌트입니다.

## 참고
- 세로 방향 리사이즈를 지원합니다.
- 기본 높이는 여러 줄 입력에 적당한 크기로 설정되어 있습니다.
- \`rows\`로 초기 표시 높이를 제어합니다.
        `,
      },
    },
  },
  argTypes: {
    invalid: {
      control: 'boolean',
      description: '오류 상태입니다.',
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
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트입니다.',
    },
    rows: {
      control: { type: 'number', min: 2, max: 20 },
      description: '초기 행 수입니다.',
    },
    'aria-label': {
      control: 'text',
      description: '단독 사용 시 필요한 접근성 이름입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  name: '기본',
  args: {
    'aria-label': '상세 내용',
    placeholder: '상세 내용을 입력하세요.',
    rows: 4,
  },
}

export const Invalid: Story = {
  name: '오류 상태',
  args: {
    'aria-label': '상세 내용',
    placeholder: '상세 내용을 입력하세요.',
    invalid: true,
  },
}

export const Disabled: Story = {
  name: '비활성 상태',
  args: {
    'aria-label': '상세 내용',
    value: '이 내용은 수정할 수 없습니다.',
    disabled: true,
  },
}

export const WithField: Story = {
  name: 'Field와 함께 사용',
  render: (args) => (
    <Field required>
      <FieldLabel>민원 내용</FieldLabel>
      <Textarea {...args} placeholder="민원 내용을 자세히 입력하세요." />
      <FieldDescription>최대 1,000자까지 입력할 수 있습니다.</FieldDescription>
    </Field>
  ),
  args: {
    invalid: false,
    disabled: false,
    rows: 5,
  },
}

export const WithFieldError: Story = {
  name: 'Field 오류 상태',
  render: () => (
    <Field required>
      <FieldLabel>민원 내용</FieldLabel>
      <Textarea placeholder="민원 내용을 입력하세요." />
      <FieldError>민원 내용을 입력하세요.</FieldError>
    </Field>
  ),
}

export const LargeRows: Story = {
  name: '행 수 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Field>
        <FieldLabel>짧은 메모</FieldLabel>
        <Textarea rows={2} placeholder="간단한 내용을 입력하세요." />
      </Field>
      <Field>
        <FieldLabel>기본 크기</FieldLabel>
        <Textarea rows={4} placeholder="일반적인 내용을 입력하세요." />
      </Field>
      <Field>
        <FieldLabel>긴 내용</FieldLabel>
        <Textarea rows={8} placeholder="상세한 내용을 입력하세요." />
      </Field>
    </div>
  ),
}
