import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioGroup } from './RadioGroup'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof RadioGroup> = {
  title: '인터페이스/입력/라디오 그룹',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**RadioGroup**와 **Radio**는 여러 항목 중 하나만 선택하는 단일 선택 패턴을 제공합니다.

## 키보드 동작
- Tab으로 그룹에 진입하고 빠져나갑니다.
- 방향키로 옵션을 이동하면서 선택을 변경합니다.
- 비활성 옵션은 탐색 순서에서 건너뜁니다.

## 접근성 메모
- 그룹 레이블은 \`aria-label\`, \`aria-labelledby\`, 또는 \`Field\`를 통해 제공해야 합니다.
- 방향 설정에 따라 사용자가 기대하는 방향키 동작이 달라집니다.
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: '제어형 값입니다.',
    },
    defaultValue: {
      control: 'text',
      description: '초기 비제어 값입니다.',
    },
    disabled: {
      control: 'boolean',
      description: '전체 그룹을 비활성화합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: '필수 입력으로 표시합니다.',
      table: { defaultValue: { summary: 'false' } },
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: '배치 방향입니다.',
      table: { defaultValue: { summary: 'vertical' } },
    },
    'aria-label': {
      control: 'text',
      description: '그룹의 접근성 레이블입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="신청 방식">
      <Radio value="online">온라인</Radio>
      <Radio value="visit">방문</Radio>
      <Radio value="mail">우편</Radio>
    </RadioGroup>
  ),
  args: {
    orientation: 'vertical',
    disabled: false,
    required: false,
  },
}

export const Horizontal: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="동의 여부">
      <Radio value="agree">동의</Radio>
      <Radio value="disagree">미동의</Radio>
    </RadioGroup>
  ),
  args: {
    orientation: 'horizontal',
    disabled: false,
  },
}

export const Controlled: Story = {
  name: '제어형',
  render: (args) => (
    <RadioGroup {...args} aria-label="처리 방식">
      <Radio value="online">온라인</Radio>
      <Radio value="visit">방문</Radio>
      <Radio value="mail">우편</Radio>
    </RadioGroup>
  ),
  args: {
    value: 'online',
    orientation: 'vertical',
  },
}

export const Disabled: Story = {
  render: (args) => (
    <RadioGroup {...args} aria-label="처리 방식">
      <Radio value="online">온라인</Radio>
      <Radio value="visit">방문</Radio>
    </RadioGroup>
  ),
  args: {
    disabled: true,
    defaultValue: 'online',
    orientation: 'vertical',
  },
}

export const PartialDisabled: Story = {
  name: '부분 비활성',
  render: () => (
    <RadioGroup aria-label="서비스 등급">
      <Radio value="basic">기본 서비스</Radio>
      <Radio value="premium">확장 서비스</Radio>
      <Radio value="enterprise" disabled>
        프리미엄 서비스(준비 중)
      </Radio>
    </RadioGroup>
  ),
}

export const WithField: Story = {
  name: 'Field와 함께 사용',
  render: (args) => (
    <Field required>
      <FieldLabel>신청 방식</FieldLabel>
      <RadioGroup {...args} aria-label="신청 방식">
        <Radio value="online">온라인 신청</Radio>
        <Radio value="visit">방문 신청</Radio>
        <Radio value="mail">우편 신청</Radio>
      </RadioGroup>
      <FieldDescription>한 가지 방식을 선택하세요.</FieldDescription>
    </Field>
  ),
  args: {
    orientation: 'vertical',
    disabled: false,
  },
}

export const WithFieldError: Story = {
  name: 'Field 오류 상태',
  render: () => (
    <Field required>
      <FieldLabel>수신 방식</FieldLabel>
      <RadioGroup aria-label="수신 방식" orientation="horizontal">
        <Radio value="email">이메일</Radio>
        <Radio value="sms">문자</Radio>
        <Radio value="app">앱 알림</Radio>
      </RadioGroup>
      <FieldError>수신 방식을 선택하세요.</FieldError>
    </Field>
  ),
}

export const Orientations: Story = {
  name: '방향 비교',
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-sm text-text-subtle">vertical</p>
        <RadioGroup aria-label="세로 배치" orientation="vertical">
          <Radio value="a">옵션 A</Radio>
          <Radio value="b">옵션 B</Radio>
          <Radio value="c">옵션 C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-sm text-text-subtle">horizontal</p>
        <RadioGroup aria-label="가로 배치" orientation="horizontal">
          <Radio value="a">옵션 A</Radio>
          <Radio value="b">옵션 B</Radio>
          <Radio value="c">옵션 C</Radio>
        </RadioGroup>
      </div>
    </div>
  ),
}
