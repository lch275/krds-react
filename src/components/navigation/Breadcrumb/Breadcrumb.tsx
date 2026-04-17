import { cn } from '@/utils/cn'
import { Link } from '@/components/ui/Link/Link'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
  className?: string
  maxItems?: number
  ariaLabel?: string
}

function collapseItems(items: BreadcrumbItem[], maxItems: number) {
  if (items.length <= maxItems) {
    return items
  }

  if (maxItems < 3) {
    return [items[0], items[items.length - 1]]
  }

  return [items[0], { label: '...', href: undefined }, ...items.slice(-(maxItems - 2))]
}

function Breadcrumb({
  items,
  className,
  maxItems = 4,
  ariaLabel = 'Breadcrumb',
}: BreadcrumbProps) {
  const visibleItems = collapseItems(items, maxItems)
  const lastIndex = visibleItems.length - 1

  return (
    <nav aria-label={ariaLabel} className={cn('w-full', className)}>
      <ol
        data-slot="breadcrumb"
        className="flex min-w-0 items-center gap-2 overflow-hidden text-sm text-text-subtle"
      >
        {visibleItems.map((item, index) => {
          const isCurrent = index === lastIndex && item.label !== '...'
          const isEllipsis = item.label === '...'

          return (
            <li
              key={`${item.label}-${index}`}
              data-slot="breadcrumb-item"
              className="flex min-w-0 items-center gap-2"
            >
              {index > 0 && (
                <span aria-hidden="true" className="text-text-muted">
                  /
                </span>
              )}

              {isEllipsis ? (
                <span
                  aria-hidden="true"
                  className="inline-flex min-h-10 items-center px-1 text-text-muted"
                >
                  ...
                </span>
              ) : isCurrent || !item.href ? (
                <span
                  aria-current={isCurrent ? 'page' : undefined}
                  className="truncate font-medium text-text-default"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  underline="hover"
                  size="md"
                  className="min-w-0 truncate px-0 py-0 text-sm"
                >
                  {item.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { Breadcrumb }
export type { BreadcrumbProps, BreadcrumbItem }
