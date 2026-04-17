import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button/Button'
import { Link } from '@/components/ui/Link/Link'

type ContextualHelpProps = {
  title: string
  children: ReactNode
  linkHref?: string
  linkLabel?: string
  className?: string
}

function ContextualHelp({
  title,
  children,
  linkHref,
  linkLabel = 'Learn more',
  className,
}: ContextualHelpProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const titleId = `contextual-help-title-${useId()}`

  useEffect(() => {
    if (!open) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      if (!rootRef.current?.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handlePointerDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [open])

  return (
    <div ref={rootRef} data-slot="contextual-help" className={cn('relative inline-flex', className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={titleId}
        aria-label="Help"
        data-slot="contextual-help-trigger"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          'inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border-default bg-bg-default text-text-default',
          'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2'
        )}
      >
        ?
      </button>

      {open && (
        <div
          id={titleId}
          data-slot="contextual-help-popover"
          className="absolute left-0 top-full z-toast mt-2 w-72 rounded-card border border-border-default bg-bg-default p-4 shadow-dropdown"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-text-default">{title}</h3>
              <div className="text-sm text-text-subtle">{children}</div>
              {linkHref && <Link href={linkHref}>{linkLabel}</Link>}
            </div>
            <Button size="sm" variant="ghost" aria-label="Close help" onClick={() => setOpen(false)}>
              x
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export { ContextualHelp }
export type { ContextualHelpProps }
