import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Input> = {
  title: '인터페이스/입력/텍스트 입력',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Input**은 한 줄 텍스트 입력을 위한 기본 필드입니다. \`Field\`와 함께 사용하면 레이블, 설명, 오류 메시지가 자동으로 연결됩니다.

## 접근성 메모
- 단독 사용 시에는 \`aria-label\` 또는 \`aria-labelledby\`를 제공합니다.
- \`invalid\`는 시각 상태와 의미를 함께 반영합니다.
- \`disabled\`는 직접 설정하거나 \`Field\`에서 상속받을 수 있습니다.
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '입력 필드 크기입니다.',
      table: { defaultValue: { summary: 'md' } },
    },
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
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
      description: '네이티브 input 타입입니다.',
      table: { defaultValue: { summary: 'text' } },
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
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    'aria-label': '이름',
    placeholder: '이름을 입력하세요',
    inputSize: 'md',
  },
}

export const Invalid: Story = {
  args: {
    'aria-label': '이메일',
    placeholder: 'example@gov.kr',
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    'aria-label': '민원 번호',
    value: '2024-KR-001234',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    'aria-label': '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
}

export const WithField: Story = {
  name: 'Field와 함께 사용',
  render: (args) => (
    <Field required>
      <FieldLabel>이메일</FieldLabel>
      <Input {...args} type="email" placeholder="example@gov.kr" />
      <FieldDescription>안내 메일을 받을 수 있는 주소를 입력하세요.</FieldDescription>
    </Field>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story: '`Field` 내부에서는 레이블이 자동 연결되므로 별도의 `aria-label`이 필요하지 않습니다.',
      },
    },
  },
}

export const WithFieldError: Story = {
  name: 'Field 오류 상태',
  render: () => (
    <Field required>
      <FieldLabel>이메일</FieldLabel>
      <Input type="email" placeholder="example@gov.kr" />
      <FieldError>올바른 이메일 주소를 입력하세요.</FieldError>
    </Field>
  ),
}

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Input aria-label="작은 입력" placeholder="sm (32px)" inputSize="sm" />
      <Input aria-label="기본 입력" placeholder="md (40px, 기본값)" inputSize="md" />
      <Input aria-label="큰 입력" placeholder="lg (44px 터치 타깃)" inputSize="lg" />
    </div>
  ),
}
