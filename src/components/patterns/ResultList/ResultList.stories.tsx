import type { Meta, StoryObj } from '@storybook/react'
import { ResultList } from './ResultList'

const meta: Meta<typeof ResultList> = {
  title: '패턴/결과 목록',
  component: ResultList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**ResultList**는 검색 또는 탐색 결과를 설명과 메타 정보와 함께 목록 형태로 보여 줍니다.

## 접근성 메모
- 결과 제목만으로도 어느 정도 맥락을 이해할 수 있어야 합니다.
- 메타 정보는 제목을 보완해야지 대체하면 안 됩니다.
- 표 형식 데이터보다는 탐색 가능한 콘텐츠 목록에 사용합니다.
        `,
      },
    },
  },
  argTypes: {
    items: {
      description: '제목, 링크, 설명, 선택적 메타 정보를 포함하는 결과 항목입니다.',
    },
  },
}

export default meta
type Story = StoryObj<typeof ResultList>

export const Default: Story = {
  args: {
    items: [
      {
        title: '주거 지원 신청',
        href: '#',
        description: '주거 지원 사업 신청 방법과 대상 조건을 확인합니다.',
        metadata: '업데이트 2026-04-10',
      },
      {
        title: '주거 급여 안내',
        href: '#',
        description: '최신 급여 기준과 제출 서류를 확인합니다.',
        metadata: '업데이트 2026-03-28',
      },
    ],
  },
}
