import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

const meta: Meta<typeof Table> = {
  title: '데이터/표',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Table**은 행과 열 구조로 정보를 비교해 보여 줄 때 사용하는 데이터 표현 컴포넌트입니다.

## 접근성 메모
- 표 제목이나 캡션으로 데이터 맥락을 알려 주는 것이 좋습니다.
- 숫자 열은 정렬과 읽기 흐름을 고려해 구성합니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table caption="서비스 현황">
      <TableHeader>
        <TableRow>
          <TableHead>서비스</TableHead>
          <TableHead>담당 부서</TableHead>
          <TableHead numeric>건수</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>신청 검토</TableCell>
          <TableCell>정책팀</TableCell>
          <TableCell numeric>128</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>민원 상담</TableCell>
          <TableCell>고객지원센터</TableCell>
          <TableCell numeric>84</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
