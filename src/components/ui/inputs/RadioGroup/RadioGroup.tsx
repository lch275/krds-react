import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useId,
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'

interface RadioGroupContextValue {
  name: string
  value: string | undefined
  onValueChange: (value: string) => void
  disabled: boolean
  required: boolean
  orientation: 'horizontal' | 'vertical'
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroupContext() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) {
    throw new Error('[KRDS] Radio must be used inside RadioGroup.')
  }
  return ctx
}

type RadioGroupProps = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  orientation?: 'horizontal' | 'vertical'
  name?: string
  children: ReactNode
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onValueChange,
      disabled = false,
      required = false,
      orientation = 'vertical',
      name: nameProp,
      children,
      className,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...rest
    },
    ref
  ) => {
    const generatedName = useId()
    const name = nameProp ?? generatedName

    const [value, setValue] = useControllable<string | undefined>(
      controlledValue,
      defaultValue,
      (nextValue) => {
        if (nextValue !== undefined) {
          onValueChange?.(nextValue)
        }
      }
    )

    const handleValueChange = useCallback(
      (newValue: string) => {
        setValue(newValue)
      },
      [setValue]
    )

    return (
      <RadioGroupContext.Provider
        value={{
          name,
          value,
          onValueChange: handleValueChange,
          disabled,
          required,
          orientation,
        }}
      >
        <div
          ref={ref}
          role="radiogroup"
          data-slot="radiogroup"
          aria-orientation={orientation}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          aria-required={required || undefined}
          aria-disabled={disabled || undefined}
          className={cn(
            orientation === 'horizontal' ? 'flex flex-row gap-4' : 'flex flex-col gap-2',
            className
          )}
          {...rest}
        >
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

type RadioProps = {
  value: string
  disabled?: boolean
  className?: string
  children?: ReactNode
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'value' | 'checked' | 'onChange' | 'name'
>

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, disabled: disabledProp, className, children, ...rest }, ref) => {
    const ctx = useRadioGroupContext()

    const isDisabled = disabledProp ?? ctx.disabled
    const isChecked = ctx.value === value

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        const group = e.currentTarget.closest('[role="radiogroup"]')
        if (!group) return

        const radios = Array.from(
          group.querySelectorAll<HTMLInputElement>('input[type="radio"]:not([disabled])')
        )
        const currentIndex = radios.indexOf(e.currentTarget)

        const isHorizontal = ctx.orientation === 'horizontal'
        const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp'
        const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown'

        let targetIndex = currentIndex

        if (e.key === prevKey) {
          e.preventDefault()
          targetIndex = (currentIndex - 1 + radios.length) % radios.length
        } else if (e.key === nextKey) {
          e.preventDefault()
          targetIndex = (currentIndex + 1) % radios.length
        } else {
          return
        }

        const target = radios[targetIndex]
        target.focus()
        target.click()
      },
      [ctx.orientation]
    )

    return (
      <label
        data-slot="radio-root"
        data-state={isChecked ? 'checked' : 'unchecked'}
        data-disabled={isDisabled || undefined}
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer',
          isDisabled && 'cursor-not-allowed opacity-40',
          className
        )}
      >
        <input
          ref={ref}
          type="radio"
          name={ctx.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          required={ctx.required}
          data-slot="radio-control"
          onChange={() => ctx.onValueChange(value)}
          onKeyDown={handleKeyDown}
          className={cn(
            'h-4 w-4 rounded-full border border-border-default',
            'accent-primary cursor-inherit',
            'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed'
          )}
          {...rest}
        />
        {children && <span data-slot="radio-label" className="text-text-default">{children}</span>}
      </label>
    )
  }
)

Radio.displayName = 'Radio'

export { RadioGroup, Radio }
export type { RadioGroupProps, RadioProps }
