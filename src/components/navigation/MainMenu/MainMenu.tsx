import { useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'

type MainMenuChildLink = {
  label: string
  href: string
  description?: string
}

type MainMenuItem = {
  label: string
  href?: string
  current?: boolean
  children?: MainMenuChildLink[]
}

type MainMenuProps = {
  items: MainMenuItem[]
  className?: string
  ariaLabel?: string
}

function MainMenu({
  items,
  className,
  ariaLabel = 'Main menu',
}: MainMenuProps) {
  const [openLabel, setOpenLabel] = useState<string | null>(null)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!navRef.current?.contains(target)) {
        setOpenLabel(null)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenLabel(null)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      data-slot="main-menu"
      className={cn('border-b border-border-default bg-bg-default', className)}
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3">
        {items.map((item) => {
          const hasChildren = Boolean(item.children?.length)
          const isOpen = openLabel === item.label

          return (
            <li key={item.label} className="relative">
              {hasChildren ? (
                <>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-current={item.current ? 'true' : undefined}
                    className={cn(
                      'rounded-control px-4 py-2 text-sm font-medium',
                      'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                      item.current || isOpen
                        ? 'bg-primary-subtle text-text-default'
                        : 'text-text-default hover:bg-bg-subtle'
                    )}
                    onClick={() => setOpenLabel((prev) => (prev === item.label ? null : item.label))}
                  >
                    {item.label}
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full z-dropdown mt-2 min-w-72 rounded-card border border-border-default bg-bg-default p-3 shadow-dropdown">
                      <ul className="space-y-1">
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className="block rounded-control px-3 py-2 hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2"
                            >
                              <span className="block text-sm font-medium text-text-default">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="block text-xs text-text-subtle">
                                  {child.description}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href ?? '#'}
                  aria-current={item.current ? 'page' : undefined}
                  className={cn(
                    'block rounded-control px-4 py-2 text-sm font-medium',
                    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
                    item.current
                      ? 'bg-primary-subtle text-text-default'
                      : 'text-text-default hover:bg-bg-subtle'
                  )}
                >
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { MainMenu }
export type { MainMenuProps, MainMenuItem, MainMenuChildLink }
