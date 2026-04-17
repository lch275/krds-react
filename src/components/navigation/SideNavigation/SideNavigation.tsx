import { useState } from 'react'
import { cn } from '@/utils/cn'

type SideNavigationLink = {
  label: string
  href: string
}

type SideNavigationItem = {
  label: string
  href?: string
  current?: boolean
  children?: SideNavigationLink[]
}

type SideNavigationProps = {
  title?: string
  titleHref?: string
  items: SideNavigationItem[]
  className?: string
  ariaLabel?: string
}

function SideNavigation({
  title,
  titleHref,
  items,
  className,
  ariaLabel = 'Side navigation',
}: SideNavigationProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    items.filter((item) => item.current || item.children?.some((child) => child.href === item.href)).map((item) => item.label)
  )

  const toggleItem = (label: string) => {
    setOpenItems((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  return (
    <nav
      aria-label={ariaLabel}
      data-slot="side-navigation"
      className={cn('rounded-card border border-border-default bg-bg-default', className)}
    >
      {title && (
        <div className="border-b border-border-default px-4 py-4">
          {titleHref ? (
            <a
              href={titleHref}
              className="text-base font-semibold text-text-default underline-offset-4 hover:underline"
            >
              {title}
            </a>
          ) : (
            <p className="text-base font-semibold text-text-default">{title}</p>
          )}
        </div>
      )}

      <ul className="divide-y divide-border-default">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const isOpen = openItems.includes(item.label)

          return (
            <li key={item.label} className="px-2 py-1">
              <div className="flex items-center gap-2">
                {hasChildren ? (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={cn(
                      'flex w-full items-center justify-between rounded-control px-3 py-2 text-left',
                      'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                      item.current ? 'bg-primary-subtle font-medium text-text-default' : 'text-text-default hover:bg-bg-subtle'
                    )}
                    onClick={() => toggleItem(item.label)}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
                  </button>
                ) : (
                  <a
                    href={item.href ?? '#'}
                    aria-current={item.current ? 'page' : undefined}
                    className={cn(
                      'block w-full rounded-control px-3 py-2',
                      'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                      item.current ? 'bg-primary-subtle font-medium text-text-default' : 'text-text-default hover:bg-bg-subtle'
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>

              {hasChildren && isOpen && (
                <ul className="mt-1 space-y-1 pl-4">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        className="block rounded-control px-3 py-2 text-sm text-text-subtle hover:bg-bg-subtle hover:text-text-default focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { SideNavigation }
export type { SideNavigationProps, SideNavigationItem, SideNavigationLink }
