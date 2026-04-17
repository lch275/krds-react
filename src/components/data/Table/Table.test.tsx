import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table'

describe('Table', () => {
  it('renders a semantic table structure', () => {
    render(
      <Table caption="Service data">
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead numeric>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Review</TableCell>
            <TableCell numeric>12</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Service')).toHaveAttribute('scope', 'col')
  })

  it('renders a dash for missing cell content', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell />
          </TableRow>
        </TableBody>
      </Table>
    )

    expect(screen.getByText('-')).toBeInTheDocument()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Table caption="Service data">
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Review</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
