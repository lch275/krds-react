import type { Meta, StoryObj } from '@storybook/react'
import { ContextualHelp } from './ContextualHelp'

const meta: Meta<typeof ContextualHelp> = {
  title: '도움말/문맥 도움말',
  component: ContextualHelp,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ContextualHelp**는 짧은 설명과 선택적인 추가 링크를 함께 제공하는 도움말 패턴입니다.

## 접근성 메모
- 현재 작업을 막지 않는 보조 안내에 사용합니다.
- 제목은 주변 작업과 직접적으로 연결되어야 합니다.
- 연결되는 링크는 갑작스럽게 다른 맥락으로 이동시키지 않아야 합니다.
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '도움말 제목입니다.',
    },
    children: {
      control: 'text',
      description: '보조 설명 내용입니다.',
    },
    linkHref: {
      control: 'text',
      description: '선택적으로 제공하는 링크 주소입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ContextualHelp>

export const Default: Story = {
  args: {
    title: '왜 필요한가요?',
    children: '현재 입력 항목과 직접 관련된 보조 설명을 제공할 때 사용합니다.',
    linkHref: 'https://www.krds.go.kr',
  },
}
