import type { ElementType } from 'react'
import { cn } from '@/utils/cn'
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '@/types/polymorphic'

export type TextVariant =
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'caption'
  | 'overline'
  | 'code'

type TextOwnProps = {
  variant?: TextVariant
  className?: string
}

export type TextProps<E extends ElementType = 'p'> =
  PolymorphicComponentProps<E, TextOwnProps>

const TextImpl = <E extends ElementType = 'p'>(
  {
    as,
    variant = 'body-md',
    className,
    children,
    ...rest
  }: TextProps<E>
) => {
  const Component = (as ?? 'p') as ElementType

  return (
    <Component
      data-slot="text"
      data-text-variant={variant}
      className={cn(
        'text-text-default',
        variant === 'body-lg' && 'text-lg leading-relaxed',
        variant === 'body-md' && 'text-base leading-normal',
        variant === 'body-sm' && 'text-sm leading-normal',
        variant === 'caption' && 'text-sm text-text-subtle',
        variant === 'overline' && 'text-xs uppercase tracking-wide text-text-muted',
        variant === 'code' && 'font-mono text-sm',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

const Text = TextImpl as PolymorphicComponent<'p', TextOwnProps>

export { Text }
