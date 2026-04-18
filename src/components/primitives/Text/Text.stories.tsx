import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'

const meta: Meta<typeof Text> = {
  title: '기초/텍스트',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Text**는 \`as\` 속성으로 의미 요소를 유지하면서도 다양한 타이포그래피 스타일을 적용할 수 있는 텍스트 컴포넌트입니다.

## 변형
- \`body-lg\`: 본문 강조용 큰 텍스트
- \`body-md\`: 기본 본문 텍스트
- \`body-sm\`: 보조 설명용 작은 텍스트
- \`caption\`: 메타 정보나 보조 문구
- \`overline\`: 짧은 라벨형 텍스트
- \`code\`: 고정폭 코드 텍스트
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['body-lg', 'body-md', 'body-sm', 'caption', 'overline', 'code'],
      description: '텍스트 스타일 변형입니다.',
      table: { defaultValue: { summary: 'body-md' } },
    },
    as: {
      control: 'select',
      options: ['p', 'span', 'div', 'label', 'legend', 'figcaption', 'small', 'strong', 'em'],
      description: '렌더링할 HTML 요소입니다.',
      table: { defaultValue: { summary: 'p' } },
    },
    children: {
      control: 'text',
      description: '텍스트 내용입니다.',
    },
    className: {
      control: 'text',
      description: '추가 Tailwind 클래스입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: '기본 본문 텍스트로, 일반적인 서비스 설명과 안내 문구에 사용합니다.',
    variant: 'body-md',
  },
}

export const Code: Story = {
  args: {
    children: 'const region = "서울"',
    variant: 'code',
    as: 'code',
  },
}

export const Variants: Story = {
  name: '변형 비교',
  render: () => (
    <div className="flex flex-col gap-4">
      <Text variant="body-lg">body-lg: 강조된 본문 텍스트</Text>
      <Text variant="body-md">body-md: 기본 본문 텍스트</Text>
      <Text variant="body-sm">body-sm: 보조 설명 텍스트</Text>
      <Text variant="caption">caption: 도움말과 메타 정보</Text>
      <Text variant="overline">overline: 카테고리 라벨</Text>
      <Text variant="code" as="code">
        code: 고정폭 코드 텍스트
      </Text>
    </div>
  ),
}
