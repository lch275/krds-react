import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ResultSummaryProps = {
  total: number
  query?: string
  actions?: ReactNode
  className?: string
}

function ResultSummary({
  total,
  query,
  actions,
  className,
}: ResultSummaryProps) {
  return (
    <section
      data-slot="result-summary"
      className={cn('flex flex-wrap items-center justify-between gap-3 rounded-card border border-border-default bg-bg-default px-4 py-3', className)}
    >
      <p className="text-sm text-text-default">
        <span className="font-semibold">{total}</span> results
        {query ? ` for "${query}"` : ''}
      </p>
      {actions}
    </section>
  )
}

export { ResultSummary }
export type { ResultSummaryProps }
