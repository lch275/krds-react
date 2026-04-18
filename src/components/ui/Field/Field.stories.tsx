import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldError, FieldLabel } from './Field'
import { Input } from '@/components/ui/inputs/Input/Input'
import { Select } from '@/components/ui/inputs/Select/Select'
import { Textarea } from '@/components/ui/inputs/Textarea/Textarea'

const meta: Meta<typeof Field> = {
  title: '인터페이스/필드',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Field**는 하위 폼 컨트롤과 레이블, 설명, 오류 메시지를 하나의 문맥으로 연결해 주는 래퍼 컴포넌트입니다.

## 처리하는 일
- \`htmlFor\`와 \`id\`를 연결합니다.
- 설명과 오류 슬롯을 바탕으로 \`aria-describedby\`를 구성합니다.
- 오류 상태를 \`aria-invalid\`에 반영합니다.
- 필수 여부와 비활성 상태를 일관되게 전달합니다.
- 레이블, 도움말, 검증 메시지 구성을 예측 가능하게 만듭니다.
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '필드를 비활성화하고 지원되는 하위 컨트롤에 상태를 전달합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: '필수 입력으로 표시합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    invalid: {
      control: 'boolean',
      description: '오류 상태의 시각/의미 표현을 강제로 적용합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: (args) => (
    <Field {...args}>
      <FieldLabel>이름</FieldLabel>
      <Input placeholder="이름을 입력하세요" />
    </Field>
  ),
  args: {
    disabled: false,
    required: false,
    invalid: false,
  },
}

export const WithDescription: Story = {
  name: '설명 포함',
  render: (args) => (
    <Field {...args}>
      <FieldLabel>이메일</FieldLabel>
      <Input type="email" placeholder="example@gov.kr" />
      <FieldDescription>안내 메일을 받을 수 있는 주소를 입력하세요.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithError: Story = {
  name: '오류 포함',
  render: (args) => (
    <Field {...args}>
      <FieldLabel>비밀번호</FieldLabel>
      <Input type="password" placeholder="비밀번호를 입력하세요" />
      <FieldDescription>8자 이상 입력하세요.</FieldDescription>
      <FieldError>비밀번호는 8자 이상이어야 합니다.</FieldError>
    </Field>
  ),
  args: {
    required: true,
    invalid: false,
  },
  parameters: {
    docs: {
      description: {
        story: '`FieldError`에 내용이 있으면 연결된 컨트롤이 자동으로 오류 상태로 노출됩니다.',
      },
    },
  },
}

export const Disabled: Story = {
  name: '비활성 상태',
  render: (args) => (
    <Field {...args}>
      <FieldLabel>민원 번호</FieldLabel>
      <Input value="2024-KR-001234" readOnly />
      <FieldDescription>민원 번호는 시스템에서 자동으로 부여됩니다.</FieldDescription>
    </Field>
  ),
  args: {
    disabled: true,
  },
}

export const HideRequiredMark: Story = {
  name: '필수 표시 숨김',
  render: (args) => (
    <Field {...args}>
      <FieldLabel hideRequired>이름(필수)</FieldLabel>
      <Input placeholder="이름을 입력하세요" />
      <FieldDescription>레이블 텍스트만으로 필수 의미가 충분할 때 사용합니다.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithTextarea: Story = {
  name: 'Textarea 조합',
  render: (args) => (
    <Field {...args}>
      <FieldLabel>민원 내용</FieldLabel>
      <Textarea placeholder="내용을 자세히 입력하세요." rows={5} />
      <FieldDescription>최대 1,000자까지 입력할 수 있습니다.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const WithSelect: Story = {
  name: 'Select 조합',
  render: (args) => (
    <Field {...args}>
      <FieldLabel>민원 유형</FieldLabel>
      <Select>
        <option value="">선택하세요</option>
        <option value="complaint">불편 신고</option>
        <option value="inquiry">문의</option>
        <option value="suggestion">제안</option>
      </Select>
      <FieldDescription>신청 내용에 가장 가까운 유형을 선택하세요.</FieldDescription>
    </Field>
  ),
  args: {
    required: true,
  },
}

export const CompleteForm: Story = {
  name: '폼 예시',
  render: () => (
    <form className="flex max-w-md flex-col gap-6">
      <Field required>
        <FieldLabel>이름</FieldLabel>
        <Input placeholder="이름을 입력하세요" />
      </Field>
      <Field required>
        <FieldLabel>이메일</FieldLabel>
        <Input type="email" placeholder="example@gov.kr" />
        <FieldDescription>이 주소로 접수 확인 메일이 발송됩니다.</FieldDescription>
      </Field>
      <Field required>
        <FieldLabel>민원 유형</FieldLabel>
        <Select>
          <option value="">선택하세요</option>
          <option value="complaint">불편 신고</option>
          <option value="inquiry">문의</option>
        </Select>
      </Field>
      <Field required>
        <FieldLabel>상세 내용</FieldLabel>
        <Textarea placeholder="민원 상세 내용을 입력하세요." rows={4} />
        <FieldDescription>최대 1,000자까지 입력할 수 있습니다.</FieldDescription>
        <FieldError>상세 내용을 입력하세요.</FieldError>
      </Field>
    </form>
  ),
}
