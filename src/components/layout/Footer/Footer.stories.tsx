import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: '레이아웃/푸터',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Footer**는 기관 정보, 정책 링크, 보조 링크를 담는 하단 공통 영역입니다.

## 접근성 메모
- 법적 고지와 정책 링크는 쉽게 찾을 수 있어야 합니다.
- 기관 정보는 조밀한 레이아웃에서도 읽기 쉬워야 합니다.
- 푸터를 두 번째 주 내비게이션처럼 과도하게 사용하지 않습니다.
        `,
      },
    },
  },
  argTypes: {
    organization: {
      control: 'text',
      description: '기관명입니다.',
    },
    address: {
      control: 'text',
      description: '기관 주소 또는 연락처 위치 정보입니다.',
    },
    utilityLinks: {
      description: '보조 링크 목록입니다.',
    },
    policyLinks: {
      description: '정책 및 법률 관련 링크입니다.',
    },
    copyright: {
      control: 'text',
      description: '저작권 표시 문구입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    organization: '정부 대표 포털',
    address: '서울특별시 세종대로 110',
    utilityLinks: [
      { label: '찾아오시는 길', href: '#' },
      { label: '문의하기', href: '#' },
    ],
    policyLinks: [
      { label: '개인정보 처리방침', href: '#' },
      { label: '이용약관', href: '#' },
    ],
    copyright: '© 2026 정부 대표 포털.',
  },
}
