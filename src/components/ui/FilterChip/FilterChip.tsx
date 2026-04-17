import { cn } from '@/utils/cn'

type FilterChipProps = {
  selected?: boolean
  removable?: boolean
  disabled?: boolean
  onRemove?: () => void
  className?: string
  children: string
}

function FilterChip({
  selected = false,
  removable = false,
  disabled = false,
  onRemove,
  className,
  children,
}: FilterChipProps) {
  return (
    <span
      data-slot="filter-chip"
      data-state={selected ? 'selected' : 'default'}
      className={cn(
        'inline-flex min-h-10 items-center gap-2 rounded-badge border px-3 py-1.5 text-sm',
        selected
          ? 'border-primary bg-primary-subtle text-text-default'
          : 'border-border-default bg-bg-default text-text-default',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <span>{children}</span>
      {selected && <span aria-hidden="true">v</span>}
      {removable && (
        <button
          type="button"
          aria-label={`Remove ${children}`}
          disabled={disabled}
          className="rounded-full p-1 hover:bg-bg-subtle"
          onClick={onRemove}
        >
          x
        </button>
      )}
    </span>
  )
}

export { FilterChip }
export type { FilterChipProps }
