import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type ThHTMLAttributes,
  type TdHTMLAttributes,
} from 'react'
import { cn } from '@/utils/cn'

type TableProps = {
  caption?: string
  className?: string
  children: ReactNode
} & ComponentPropsWithoutRef<'table'>

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ caption, className, children, ...rest }, ref) => {
    return (
      <div data-slot="table-wrap" className="w-full overflow-x-auto rounded-card border border-border-default">
        <table
          ref={ref}
          data-slot="table"
          className={cn('min-w-full border-collapse text-left text-sm', className)}
          {...rest}
        >
          {caption && <caption className="sr-only">{caption}</caption>}
          {children}
        </table>
      </div>
    )
  }
)

Table.displayName = 'Table'

function TableHeader(props: ComponentPropsWithoutRef<'thead'>) {
  return <thead data-slot="table-header" className="bg-bg-subtle" {...props} />
}

function TableBody(props: ComponentPropsWithoutRef<'tbody'>) {
  return <tbody data-slot="table-body" {...props} />
}

function TableRow(props: ComponentPropsWithoutRef<'tr'>) {
  return <tr data-slot="table-row" className="border-b border-border-default last:border-b-0" {...props} />
}

type TableHeadProps = {
  numeric?: boolean
} & ThHTMLAttributes<HTMLTableCellElement>

function TableHead({ className, numeric = false, scope = 'col', ...rest }: TableHeadProps) {
  return (
    <th
      data-slot="table-head"
      scope={scope}
      className={cn(
        'px-4 py-3 font-semibold text-text-default',
        numeric ? 'text-right' : 'text-left',
        className
      )}
      {...rest}
    />
  )
}

type TableCellProps = {
  numeric?: boolean
} & TdHTMLAttributes<HTMLTableCellElement>

function TableCell({ className, numeric = false, children, ...rest }: TableCellProps) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'px-4 py-3 align-top text-text-subtle',
        numeric ? 'text-right tabular-nums' : 'text-left',
        className
      )}
      {...rest}
    >
      {children ?? '-'}
    </td>
  )
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell }
export type { TableProps, TableHeadProps, TableCellProps }
