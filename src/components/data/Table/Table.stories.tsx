import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Data/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table caption="Service status">
      <TableHeader>
        <TableRow>
          <TableHead>Service</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead numeric>Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Application review</TableCell>
          <TableCell>Policy team</TableCell>
          <TableCell numeric>128</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Citizen support</TableCell>
          <TableCell>Support center</TableCell>
          <TableCell numeric>84</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
}
