import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

type ConsentSectionProps = {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

function ConsentSection({
  title,
  description,
  children,
  className,
}: ConsentSectionProps) {
  return (
    <section
      data-slot="consent-section"
      className={cn('space-y-4 rounded-card border border-border-default bg-bg-default p-4', className)}
    >
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-text-default">{title}</h2>
        {description && <p className="text-sm text-text-subtle">{description}</p>}
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

export { ConsentSection }
export type { ConsentSectionProps }
