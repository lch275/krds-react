import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/Button/Button'

type SnackbarProps = {
  open?: boolean
  title?: string
  children: string
  actionLabel?: string
  onAction?: () => void
  onClose?: () => void
  className?: string
}

function Snackbar({
  open = true,
  title,
  children,
  actionLabel,
  onAction,
  onClose,
  className,
}: SnackbarProps) {
  if (!open) {
    return null
  }

  return (
    <div
      role="status"
      aria-live="polite"
      data-slot="snackbar"
      className={cn(
        'fixed bottom-6 left-1/2 z-toast flex w-[min(32rem,calc(100vw-2rem))] -translate-x-1/2 items-start gap-3 rounded-card border border-border-strong bg-bg-inverse px-4 py-3 text-text-inverse shadow-dropdown',
        className
      )}
    >
      <div className="min-w-0 flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <p className="text-sm opacity-90">{children}</p>
      </div>
      {actionLabel && (
        <Button size="sm" variant="link" className="text-text-on-primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
      <Button size="sm" variant="ghost" className="text-text-on-primary" onClick={onClose}>
        x
      </Button>
    </div>
  )
}

export { Snackbar }
export type { SnackbarProps }
