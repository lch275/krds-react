import { cn } from '@/utils/cn'

type ProgressBarProps = {
  value: number
  max?: number
  label?: string
  showValue?: boolean
  className?: string
}

function ProgressBar({
  value,
  max = 100,
  label = 'Progress',
  showValue = true,
  className,
}: ProgressBarProps) {
  const clamped = Math.min(Math.max(value, 0), max)
  const percent = max > 0 ? Math.round((clamped / max) * 100) : 0

  return (
    <div data-slot="progress-bar" className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-text-default">{label}</span>
        {showValue && <span className="text-sm text-text-subtle">{percent}%</span>}
      </div>
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={clamped}
        className="h-3 w-full overflow-hidden rounded-badge bg-bg-muted"
      >
        <div
          data-slot="progress-bar-fill"
          className="h-full rounded-badge bg-primary transition-[width]"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}

export { ProgressBar }
export type { ProgressBarProps }
