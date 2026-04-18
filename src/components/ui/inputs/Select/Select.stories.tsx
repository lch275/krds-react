import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/Field/Field'

const meta: Meta<typeof Select> = {
  title: '인터페이스/입력/셀렉트',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Select**는 네이티브 \`select\` 요소를 감싸는 선택 컴포넌트입니다. 설명 텍스트나 검증 메시지가 필요한 경우 \`Field\`와 함께 쓰기 좋습니다.

## 참고
- 네이티브 \`select\` 요소를 기반으로 합니다.
- \`option\`, \`optgroup\` 자식을 지원합니다.
- 키보드 및 스크린 리더 동작이 플랫폼 기본 동작과 일치합니다.
        `,
      },
    },
  },
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '셀렉트 크기입니다.',
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
type Story = StoryObj<typeof Select>

const DefaultOptions = () => (
  <>
    <option value="">선택하세요</option>
    <option value="complaint">불편 신고</option>
    <option value="inquiry">문의</option>
    <option value="suggestion">제안</option>
    <option value="other">기타</option>
  </>
)

export const Default: Story = {
  render: (args) => (
    <Select {...args} aria-label="민원 유형">
      <DefaultOptions />
    </Select>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
}

export const Invalid: Story = {
  render: (args) => (
    <Select {...args} aria-label="민원 유형">
      <DefaultOptions />
    </Select>
  ),
  args: { invalid: true },
}

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} aria-label="처리 상태">
      <option value="processing">처리 중</option>
    </Select>
  ),
  args: { disabled: true },
}

export const WithField: Story = {
  name: 'Field와 함께 사용',
  render: (args) => (
    <Field required>
      <FieldLabel>민원 유형</FieldLabel>
      <Select {...args}>
        <DefaultOptions />
      </Select>
      <FieldDescription>신청 내용에 가장 가까운 유형을 선택하세요.</FieldDescription>
    </Field>
  ),
  args: {
    inputSize: 'md',
    invalid: false,
    disabled: false,
  },
}

export const WithFieldError: Story = {
  name: 'Field 오류 상태',
  render: () => (
    <Field required>
      <FieldLabel>민원 유형</FieldLabel>
      <Select>
        <option value="">선택하세요</option>
        <option value="complaint">불편 신고</option>
      </Select>
      <FieldError>민원 유형을 선택하세요.</FieldError>
    </Field>
  ),
}

export const WithOptgroup: Story = {
  name: '옵션 그룹',
  render: () => (
    <Field>
      <FieldLabel>지역</FieldLabel>
      <Select>
        <option value="">선택하세요</option>
        <optgroup label="수도권">
          <option value="seoul">서울</option>
          <option value="incheon">인천</option>
          <option value="gyeonggi">경기도</option>
        </optgroup>
        <optgroup label="충청권">
          <option value="daejeon">대전</option>
          <option value="sejong">세종</option>
          <option value="chungbuk">충청북도</option>
          <option value="chungnam">충청남도</option>
        </optgroup>
      </Select>
    </Field>
  ),
}

export const Sizes: Story = {
  name: '크기 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Select aria-label="작은 셀렉트" inputSize="sm">
        <option>sm (32px)</option>
      </Select>
      <Select aria-label="기본 셀렉트" inputSize="md">
        <option>md (40px, 기본값)</option>
      </Select>
      <Select aria-label="큰 셀렉트" inputSize="lg">
        <option>lg (44px 터치 타깃)</option>
      </Select>
    </div>
  ),
}
