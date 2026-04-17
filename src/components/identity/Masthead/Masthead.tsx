import { cn } from '@/utils/cn'

type MastheadProps = {
  text?: string
  className?: string
}

function Masthead({
  text = 'This is an official digital government service of the Republic of Korea.',
  className,
}: MastheadProps) {
  return (
    <div
      data-slot="masthead"
      className={cn('border-b border-border-default bg-bg-subtle px-4 py-2 text-xs text-text-subtle', className)}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-text-on-primary"
        >
          GOV
        </span>
        <p>{text}</p>
      </div>
    </div>
  )
}

export { Masthead }
export type { MastheadProps }
