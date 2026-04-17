import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type FilterPanelProps = {
  title?: string
  actions?: ReactNode
  children: ReactNode
  className?: string
}

function FilterPanel({
  title = 'Filters',
  actions,
  children,
  className,
}: FilterPanelProps) {
  return (
    <section
      data-slot="filter-panel"
      className={cn('space-y-4 rounded-card border border-border-default bg-bg-default p-4', className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-text-default">{title}</h2>
        {actions}
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  )
}

export { FilterPanel }
export type { FilterPanelProps }
