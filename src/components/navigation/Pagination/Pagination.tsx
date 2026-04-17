import { cn } from '@/utils/cn'

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPageChange?: (page: number) => void
  className?: string
  ariaLabel?: string
  siblingCount?: number
}

function getPageRange(currentPage: number, totalPages: number, siblingCount: number) {
  const pages = new Set<number>()
  pages.add(1)
  pages.add(totalPages)

  for (
    let page = Math.max(1, currentPage - siblingCount);
    page <= Math.min(totalPages, currentPage + siblingCount);
    page += 1
  ) {
    pages.add(page)
  }

  return Array.from(pages).sort((a, b) => a - b)
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ariaLabel = 'Pagination',
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages < 1) {
    return null
  }

  const pages = getPageRange(currentPage, totalPages, siblingCount)
  const items: Array<number | 'ellipsis'> = []

  pages.forEach((page, index) => {
    if (index > 0 && page - pages[index - 1] > 1) {
      items.push('ellipsis')
    }
    items.push(page)
  })

  return (
    <nav aria-label={ariaLabel} className={cn('w-full', className)}>
      <ul
        data-slot="pagination"
        className="flex flex-wrap items-center gap-2 text-sm text-text-default"
      >
        <li>
          <button
            type="button"
            data-slot="pagination-prev"
            aria-label="Previous page"
            disabled={currentPage <= 1}
            onClick={() => onPageChange?.(currentPage - 1)}
            className={cn(
              'inline-flex min-h-10 min-w-10 items-center justify-center rounded-control border px-3',
              'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-40',
              'border-border-default bg-bg-default hover:bg-bg-subtle'
            )}
          >
            Prev
          </button>
        </li>

        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            {item === 'ellipsis' ? (
              <span
                aria-hidden="true"
                className="inline-flex min-h-10 min-w-10 items-center justify-center text-text-muted"
              >
                ...
              </span>
            ) : item === currentPage ? (
              <span
                data-slot="pagination-current"
                aria-current="page"
                aria-label={`Page ${item}`}
                className={cn(
                  'inline-flex min-h-10 min-w-10 items-center justify-center rounded-control border px-3 font-semibold',
                  'border-primary bg-primary text-text-on-primary underline underline-offset-4'
                )}
              >
                {item}
              </span>
            ) : (
              <button
                type="button"
                data-slot="pagination-page"
                aria-label={`Page ${item}`}
                onClick={() => onPageChange?.(item)}
                className={cn(
                  'inline-flex min-h-10 min-w-10 items-center justify-center rounded-control border px-3',
                  'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                  'border-border-default bg-bg-default hover:bg-bg-subtle'
                )}
              >
                {item}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            data-slot="pagination-next"
            aria-label="Next page"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange?.(currentPage + 1)}
            className={cn(
              'inline-flex min-h-10 min-w-10 items-center justify-center rounded-control border px-3',
              'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
              'disabled:cursor-not-allowed disabled:opacity-40',
              'border-border-default bg-bg-default hover:bg-bg-subtle'
            )}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export { Pagination }
export type { PaginationProps }
