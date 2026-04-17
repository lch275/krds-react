import type { ElementType } from 'react'
import { cn } from '@/utils/cn'
import { cva, type VariantProps } from '@/utils/cva'
import { Spinner } from '@/components/ui/Spinner/Spinner'
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '@/types/polymorphic'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium leading-none whitespace-nowrap',
    'rounded-control border',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-3',
    'focus-visible:ring-border-focus focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-40',
    'aria-busy:cursor-wait',
    'select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary text-text-on-primary border-transparent',
          'hover:bg-primary-hover active:bg-primary-active',
        ],
        secondary: [
          'bg-transparent text-primary border-border-default',
          'hover:bg-bg-subtle active:bg-bg-muted',
        ],
        ghost: [
          'bg-transparent text-text-default border-transparent',
          'hover:bg-bg-subtle active:bg-bg-muted',
        ],
        danger: [
          'bg-status-error text-text-on-primary border-transparent',
          'hover:opacity-90 active:opacity-80',
        ],
        link: [
          'bg-transparent text-text-link border-transparent',
          'hover:text-text-link-hover underline-offset-4 hover:underline',
          'h-auto px-0 py-0',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-11 px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

type ButtonOwnProps = {
  loading?: boolean
  className?: string
} & VariantProps<typeof buttonVariants>

export type ButtonProps<E extends ElementType = 'button'> =
  PolymorphicComponentProps<E, ButtonOwnProps>

const ButtonImpl = <E extends ElementType = 'button'>(
  {
    as,
    variant = 'primary',
    size = 'md',
    loading = false,
    className,
    children,
    disabled,
    ...rest
  }: ButtonProps<E>
) => {
  const Component = (as ?? 'button') as ElementType
  const isButton = Component === 'button'
  const isAnchor = Component === 'a'
  const isDisabled = Boolean(disabled ?? false)
  const disabledLike = isDisabled || loading
  const hasContent = children !== null && children !== undefined

  if (import.meta.env.DEV) {
    if (!hasContent && !('aria-label' in rest) && !('aria-labelledby' in rest)) {
      console.warn('[KRDS/Button] Icon-only button requires aria-label or aria-labelledby.')
    }

    if (isAnchor && !('href' in rest)) {
      console.warn('[KRDS/Button] as="a" requires href for link semantics.')
    }
  }

  return (
    <Component
      type={isButton ? 'button' : undefined}
      data-slot="button"
      data-state={loading ? 'loading' : disabledLike ? 'disabled' : undefined}
      disabled={isButton ? disabledLike : undefined}
      aria-disabled={!isButton ? disabledLike || undefined : undefined}
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
      tabIndex={!isButton && disabledLike ? -1 : (rest as { tabIndex?: number }).tabIndex}
    >
      {loading && <Spinner aria-hidden={true} size="sm" className="shrink-0" />}
      {children}
    </Component>
  )
}

const Button = ButtonImpl as PolymorphicComponent<'button', ButtonOwnProps>

export { Button }
