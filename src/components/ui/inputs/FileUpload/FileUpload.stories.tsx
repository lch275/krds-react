import type { Meta, StoryObj } from '@storybook/react'
import { Field, FieldDescription, FieldLabel } from '@/components/ui/Field'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: '인터페이스/입력/파일 업로드',
  component: FileUpload,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**FileUpload**는 기기에서 파일을 선택하거나 드래그 앤 드롭으로 첨부할 때 사용하는 입력 컴포넌트입니다.

## 접근성 메모
- 허용 파일 형식과 첨부 방식을 설명 문구로 함께 제공하는 것이 좋습니다.
- 다중 첨부 여부는 사용자가 쉽게 인식할 수 있어야 합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  render: (args) => (
    <Field>
      <FieldLabel>첨부파일</FieldLabel>
      <FileUpload {...args} />
      <FieldDescription>기기에서 파일 하나를 선택하세요.</FieldDescription>
    </Field>
  ),
}

export const DragAndDrop: Story = {
  name: '드래그 앤 드롭',
  render: (args) => (
    <Field>
      <FieldLabel>첨부파일</FieldLabel>
      <FileUpload {...args} dragAndDrop multiple />
      <FieldDescription>영역에 파일을 끌어 놓거나 직접 선택할 수 있습니다.</FieldDescription>
    </Field>
  ),
}

export const Disabled: Story = {
  name: '비활성 상태',
  render: (args) => (
    <Field disabled>
      <FieldLabel>첨부파일</FieldLabel>
      <FileUpload {...args} disabled />
      <FieldDescription>현재는 파일을 첨부할 수 없습니다.</FieldDescription>
    </Field>
  ),
}
