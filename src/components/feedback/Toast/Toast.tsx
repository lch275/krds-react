import { useEffect } from 'react'
import { cn } from '@/utils/cn'

type ToastProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  duration?: number
  tone?: 'info' | 'warning'
  children: string
  className?: string
}

function Toast({
  open = true,
  onOpenChange,
  duration = 3000,
  tone = 'info',
  children,
  className,
}: ToastProps) {
  useEffect(() => {
    if (!open || duration <= 0) {
      return
    }
    const timeout = window.setTimeout(() => onOpenChange?.(false), duration)
    return () => window.clearTimeout(timeout)
  }, [duration, onOpenChange, open])

  if (!open) {
    return null
  }

  return (
    <div
      role="status"
      aria-live="polite"
      data-slot="toast"
      className={cn(
        'fixed bottom-6 left-1/2 z-toast -translate-x-1/2 rounded-card px-4 py-3 text-sm text-text-on-primary shadow-dropdown',
        tone === 'info' ? 'bg-bg-inverse' : 'bg-status-warning-text',
        className
      )}
    >
      {children}
    </div>
  )
}

export { Toast }
export type { ToastProps }
