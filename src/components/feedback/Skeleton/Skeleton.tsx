import { cn } from '@/utils/cn'

type SkeletonProps = {
  className?: string
}

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      data-testid="skeleton"
      data-slot="skeleton"
      className={cn(
        'animate-pulse rounded-control bg-bg-muted',
        className
      )}
    />
  )
}

export { Skeleton }
export type { SkeletonProps }
