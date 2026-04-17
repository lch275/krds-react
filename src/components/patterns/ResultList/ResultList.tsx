import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ResultItemProps = {
  title: string
  description?: string
  metadata?: ReactNode
  href?: string
}

type ResultListProps = {
  items: ResultItemProps[]
  className?: string
}

function ResultList({ items, className }: ResultListProps) {
  return (
    <ul data-slot="result-list" className={cn('space-y-3', className)}>
      {items.map((item) => (
        <li
          key={`${item.title}-${item.href ?? 'item'}`}
          className="rounded-card border border-border-default bg-bg-default p-4"
        >
          {item.href ? (
            <a
              href={item.href}
              className="text-base font-semibold text-text-link underline-offset-4 hover:underline"
            >
              {item.title}
            </a>
          ) : (
            <p className="text-base font-semibold text-text-default">{item.title}</p>
          )}
          {item.description && <p className="mt-2 text-sm text-text-subtle">{item.description}</p>}
          {item.metadata && <div className="mt-3 text-sm text-text-muted">{item.metadata}</div>}
        </li>
      ))}
    </ul>
  )
}

export { ResultList }
export type { ResultListProps, ResultItemProps }
