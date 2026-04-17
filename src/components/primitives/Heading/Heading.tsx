import type { ElementType } from 'react'
import { cn } from '@/utils/cn'
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '@/types/polymorphic'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type HeadingOwnProps = {
  level?: HeadingLevel
  className?: string
}

export type HeadingProps<E extends ElementType = 'h2'> =
  PolymorphicComponentProps<E, HeadingOwnProps>

function getSemanticLevel(tag: ElementType): HeadingLevel {
  if (typeof tag === 'string' && /^h[1-6]$/.test(tag)) {
    return Number.parseInt(tag.slice(1), 10) as HeadingLevel
  }
  return 2
}

const HeadingImpl = <E extends ElementType = 'h2'>(
  { as, level, className, children, ...rest }: HeadingProps<E>
) => {
  const Component = (as ?? 'h2') as ElementType
  const semanticLevel = getSemanticLevel(Component)
  const visualLevel = level ?? semanticLevel

  return (
    <Component
      data-slot="heading"
      data-heading-level={visualLevel}
      className={cn(
        'text-text-default font-sans',
        visualLevel === 1 && 'text-4xl font-bold leading-tight',
        visualLevel === 2 && 'text-3xl font-bold leading-tight',
        visualLevel === 3 && 'text-2xl font-semibold leading-snug',
        visualLevel === 4 && 'text-xl font-semibold leading-snug',
        visualLevel === 5 && 'text-lg font-semibold leading-normal',
        visualLevel === 6 && 'text-base font-semibold leading-normal',
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

const Heading = HeadingImpl as PolymorphicComponent<'h2', HeadingOwnProps>

export { Heading }
