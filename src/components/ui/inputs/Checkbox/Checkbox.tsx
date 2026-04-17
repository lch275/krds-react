import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'
import { useFieldControlProps } from '@/components/ui/inputs/shared/useFieldControlProps'

type CheckedState = boolean | 'indeterminate'

type CheckboxProps = {
  checked?: CheckedState
  defaultChecked?: CheckedState
  onCheckedChange?: (checked: CheckedState) => void
  disabled?: boolean
  required?: boolean
  invalid?: boolean
  className?: string
  children?: ReactNode
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  'type' | 'checked' | 'defaultChecked' | 'onChange'
>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      required,
      invalid,
      className,
      children,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedByProp,
      ...rest
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLInputElement>(null)

    const setRefs = (el: HTMLInputElement | null) => {
      internalRef.current = el
      if (typeof forwardedRef === 'function') {
        forwardedRef(el)
      } else if (forwardedRef) {
        forwardedRef.current = el
      }
    }

    const [checked, setChecked] = useControllable<CheckedState>(
      controlledChecked,
      defaultChecked,
      onCheckedChange
    )

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = checked === 'indeterminate'
      }
    }, [checked])

    const { hasError, isDisabled, isRequired, inputId, labelledBy, describedBy } =
      useFieldControlProps({
        id,
        disabled,
        required,
        invalid,
        ariaLabelledBy,
        ariaDescribedBy: ariaDescribedByProp,
      })
    const isChecked = checked === true
    const isIndeterminate = checked === 'indeterminate'

    const ariaChecked: boolean | 'mixed' = isIndeterminate ? 'mixed' : isChecked

    return (
      <label
        data-slot="checkbox-root"
        data-state={
          isIndeterminate ? 'indeterminate' : isChecked ? 'checked' : 'unchecked'
        }
        data-disabled={isDisabled || undefined}
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer',
          isDisabled && 'cursor-not-allowed opacity-40',
          className
        )}
      >
        <input
          ref={setRefs}
          type="checkbox"
          id={inputId}
          data-slot="checkbox-control"
          checked={isChecked}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={hasError || undefined}
          aria-checked={ariaChecked}
          aria-required={isRequired || undefined}
          aria-label={!children ? ariaLabel : undefined}
          aria-labelledby={children ? ariaLabelledBy : labelledBy}
          aria-describedby={describedBy}
          onChange={(e) => {
            setChecked(e.target.checked)
          }}
          className={cn(
            'h-4 w-4 rounded border border-border-default',
            'accent-primary cursor-inherit',
            'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1',
            'disabled:cursor-not-allowed'
          )}
          {...rest}
        />
        {children && <span data-slot="checkbox-label" className="text-text-default">{children}</span>}
      </label>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
export type { CheckboxProps, CheckedState }
