import { useCallback, useEffect, useRef, useState } from 'react'

type SetStateFn<T> = (value: T | ((prev: T) => T)) => void

export function useControllable<T>(
  controlledValue: T | undefined,
  defaultValue: T,
  onChange?: (value: T) => void
): [T, SetStateFn<T>] {
  const isControlled = controlledValue !== undefined
  const [internalValue, setInternalValue] = useState<T>(defaultValue)
  const value = isControlled ? controlledValue : internalValue
  const onChangeRef = useRef(onChange)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  const setValue = useCallback(
    (nextValue: T | ((prev: T) => T)) => {
      const resolved =
        typeof nextValue === 'function'
          ? (nextValue as (prev: T) => T)(value)
          : nextValue

      if (!isControlled) {
        setInternalValue(resolved)
      }

      onChangeRef.current?.(resolved)
    },
    [isControlled, value]
  )

  return [value, setValue]
}
