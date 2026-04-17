import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/cva'

const linkVariants = cva(
  [
    'inline-flex items-center gap-1 rounded-sm',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
  ],
  {
    variants: {
      tone: {
        default: 'text-text-link hover:text-primary-hover active:text-primary-active',
        subtle: 'text-text-default hover:text-primary active:text-primary-active',
      },
      size: {
        sm: 'min-h-8 text-sm',
        md: 'min-h-10 text-base',
        lg: 'min-h-11 text-lg',
      },
      underline: {
        always: 'underline underline-offset-4',
        hover: 'no-underline hover:underline hover:underline-offset-4',
        none: 'no-underline',
      },
      disabled: {
        true: 'cursor-not-allowed text-text-disabled no-underline opacity-60',
        false: '',
      },
    },
    defaultVariants: {
      tone: 'default',
      size: 'md',
      underline: 'always',
      disabled: false,
    },
  }
)

type LinkProps = {
  disabled?: boolean
  className?: string
} & VariantProps<typeof linkVariants> &
  ComponentPropsWithoutRef<'a'>

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      disabled = false,
      tone,
      size,
      underline,
      className,
      href,
      children,
      tabIndex,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        data-slot="link"
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : tabIndex}
        className={cn(linkVariants({ tone, size, underline, disabled }), className)}
        {...rest}
      >
        {children}
      </a>
    )
  }
)

Link.displayName = 'Link'

export { Link, linkVariants }
export type { LinkProps }
