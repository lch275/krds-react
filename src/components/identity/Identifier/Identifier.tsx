import { cn } from '@/utils/cn'

type IdentifierProps = {
  organization: string
  text?: string
  tone?: 'light' | 'dark'
  className?: string
}

function Identifier({
  organization,
  text,
  tone = 'light',
  className,
}: IdentifierProps) {
  return (
    <section
      data-slot="identifier"
      className={cn(
        'rounded-card px-4 py-3',
        tone === 'light' ? 'bg-bg-default text-text-default' : 'bg-bg-inverse text-text-inverse',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold',
            tone === 'light' ? 'bg-primary text-text-on-primary' : 'bg-bg-default text-text-default'
          )}
        >
          GOV
        </span>
        <div className="space-y-1">
          <p className="text-sm font-semibold">{organization}</p>
          <p className={cn('text-sm', tone === 'light' ? 'text-text-subtle' : 'text-text-inverse/80')}>
            {text ?? `This service is operated and managed by ${organization}.`}
          </p>
        </div>
      </div>
    </section>
  )
}

export { Identifier }
export type { IdentifierProps }
