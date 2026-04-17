import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'
import { useFieldControlProps } from '@/components/ui/inputs/shared/useFieldControlProps'

type SelectProps = {
  invalid?: boolean
  inputSize?: 'sm' | 'md' | 'lg'
  className?: string
} & Omit<ComponentPropsWithoutRef<'select'>, 'size'>

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      invalid,
      inputSize = 'md',
      className,
      disabled,
      required,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedByProp,
      children,
      ...rest
    },
    ref
  ) => {
    const { hasError, isDisabled, isRequired, inputId, labelledBy, describedBy } =
      useFieldControlProps({
        id,
        disabled,
        required,
        invalid,
        ariaLabelledBy,
        ariaDescribedBy: ariaDescribedByProp,
      })

    return (
      <select
        ref={ref}
        id={inputId}
        data-slot="select"
        data-state={isDisabled ? 'disabled' : hasError ? 'error' : undefined}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={hasError || undefined}
        aria-required={isRequired || undefined}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-label={ariaLabel}
        className={cn(
          'flex w-full appearance-none rounded-control border bg-bg-default',
          'text-text-default cursor-pointer',
          'transition-colors',
          'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:bg-bg-muted disabled:text-text-disabled disabled:border-border-disabled',
          hasError ? 'border-border-error' : 'border-border-default',
          inputSize === 'sm' && 'h-8 px-3 text-sm',
          inputSize === 'md' && 'h-10 px-3 text-base',
          inputSize === 'lg' && 'h-11 px-3 text-base',
          className
        )}
        {...rest}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = 'Select'

export { Select }
export type { SelectProps }
