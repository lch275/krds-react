import type { ElementType } from 'react'
import { cn } from '@/utils/cn'
import type {
  PolymorphicComponent,
  PolymorphicComponentProps,
} from '@/types/polymorphic'

type BoxOwnProps = {
  className?: string
}

export type BoxProps<E extends ElementType = 'div'> =
  PolymorphicComponentProps<E, BoxOwnProps>

const BoxImpl = <E extends ElementType = 'div'>(
  { as, className, children, ...rest }: BoxProps<E>
) => {
  const Component = (as ?? 'div') as ElementType

  return (
    <Component data-slot="box" className={cn(className)} {...rest}>
      {children}
    </Component>
  )
}

const Box = BoxImpl as PolymorphicComponent<'div', BoxOwnProps>

export { Box }
