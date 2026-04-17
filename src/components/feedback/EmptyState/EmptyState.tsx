import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type EmptyStateProps = {
  title: string
  description?: string
  actions?: ReactNode
  illustration?: ReactNode
  className?: string
}

function EmptyState({
  title,
  description,
  actions,
  illustration,
  className,
}: EmptyStateProps) {
  return (
    <section
      data-slot="empty-state"
      className={cn(
        'rounded-card border border-dashed border-border-default bg-bg-subtle px-6 py-10 text-center',
        className
      )}
    >
      <div className="mx-auto max-w-md space-y-4">
        <div
          aria-hidden="true"
          className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-bg-default text-2xl text-text-subtle"
        >
          {illustration ?? '○'}
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-text-default">{title}</h2>
          {description && <p className="text-sm text-text-subtle">{description}</p>}
        </div>
        {actions && <div className="flex flex-wrap items-center justify-center gap-3">{actions}</div>}
      </div>
    </section>
  )
}

export { EmptyState }
export type { EmptyStateProps }
