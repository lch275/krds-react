import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/cva'

const alertVariants = cva(['relative flex gap-3 rounded-lg border p-4'], {
  variants: {
    variant: {
      info: 'bg-status-info-subtle border-status-info/30 text-status-info-text',
      success:
        'bg-status-success-subtle border-status-success/30 text-status-success-text',
      warning:
        'bg-status-warning-subtle border-status-warning/30 text-status-warning-text',
      error: 'bg-status-error-subtle border-status-error/30 text-status-error-text',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

const ALERT_ICONS = {
  info: 'i',
  success: 'v',
  warning: '!',
  error: 'x',
} as const

const ALERT_PREFIXES = {
  info: 'Info',
  success: 'Success',
  warning: 'Warning',
  error: 'Error',
} as const

type AlertProps = {
  title?: ReactNode
  children?: ReactNode
  live?: 'assertive' | 'polite' | 'off'
  className?: string
} &
  VariantProps<typeof alertVariants> &
  Omit<ComponentPropsWithoutRef<'div'>, 'role'>

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', title, children, live = 'off', className, ...rest }, ref) => {
    const resolvedVariant = (variant ?? 'info') as keyof typeof ALERT_ICONS
    const icon = ALERT_ICONS[resolvedVariant]
    const prefix = ALERT_PREFIXES[resolvedVariant]
    const role = live === 'assertive' ? 'alert' : live === 'polite' ? 'status' : 'region'

    return (
      <div
        ref={ref}
        data-slot="alert"
        data-variant={resolvedVariant}
        role={role}
        aria-live={live !== 'off' ? live : undefined}
        aria-label={role === 'region' ? `${prefix}: ${String(title ?? '')}` : undefined}
        aria-atomic="true"
        className={cn(alertVariants({ variant: resolvedVariant }), className)}
        {...rest}
      >
        <span aria-hidden="true" data-slot="alert-icon" className="mt-0.5 shrink-0 text-lg">
          {icon}
        </span>

        <div data-slot="alert-content" className="min-w-0 flex-1">
          <span className="sr-only">{prefix}: </span>

          {title && (
            <p data-slot="alert-title" className="mb-1 font-semibold">
              {title}
            </p>
          )}
          {children && (
            <div data-slot="alert-description" className="text-sm opacity-90">
              {children}
            </div>
          )}
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export { Alert, alertVariants }
export type { AlertProps }
