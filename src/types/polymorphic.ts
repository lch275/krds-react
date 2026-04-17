import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from 'react'

type AsProp<E extends ElementType> = {
  as?: E
}

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P)

export type PolymorphicComponentProps<
  E extends ElementType,
  P = object,
> = PropsWithChildren<P & AsProp<E>> &
  Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>

export type PolymorphicRef<E extends ElementType> =
  ComponentPropsWithRef<E>['ref']

export type PolymorphicComponentPropsWithRef<
  E extends ElementType,
  P = object,
> = PolymorphicComponentProps<E, P> & { ref?: PolymorphicRef<E> }

export type PolymorphicComponent<
  DefaultElement extends ElementType,
  OwnProps = object,
> = <E extends ElementType = DefaultElement>(
  props: PolymorphicComponentPropsWithRef<E, OwnProps>
) => ReactElement | null
