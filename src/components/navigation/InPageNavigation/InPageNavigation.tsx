import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

type InPageNavigationItem = {
  id: string
  label: string
  level?: 1 | 2 | 3
}

type InPageNavigationProps = {
  title?: string
  items: InPageNavigationItem[]
  className?: string
  ariaLabel?: string
}

function InPageNavigation({
  title = 'On this page',
  items,
  className,
  ariaLabel = 'In-page navigation',
}: InPageNavigationProps) {
  const [activeId, setActiveId] = useState(items[0]?.id)

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      items.length === 0 ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          setActiveId(visible.target.id)
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label={ariaLabel}
      data-slot="in-page-navigation"
      className={cn('rounded-card border border-border-default bg-bg-default p-4', className)}
    >
      <p className="mb-3 text-sm font-semibold text-text-default">{title}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-state={activeId === item.id ? 'active' : 'inactive'}
              className={cn(
                'block rounded-sm px-3 py-2 text-sm transition-colors',
                'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                activeId === item.id
                  ? 'border-l-2 border-primary bg-primary-subtle font-medium text-text-default'
                  : 'text-text-subtle hover:bg-bg-subtle hover:text-text-default',
                item.level === 2 && 'pl-6',
                item.level === 3 && 'pl-9'
              )}
              onClick={(event) => {
                const target = document.getElementById(item.id)
                if (!target) {
                  return
                }

                event.preventDefault()
                if (typeof target.scrollIntoView === 'function') {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                target.focus({ preventScroll: true })
                setActiveId(item.id)
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export { InPageNavigation }
export type { InPageNavigationProps, InPageNavigationItem }
