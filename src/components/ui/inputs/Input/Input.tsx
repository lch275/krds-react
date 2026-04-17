import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'
import { cva } from '@/utils/cva'
import { useFieldContext } from '@/components/ui/Field'
import { useFieldControlProps } from '@/components/ui/inputs/shared/useFieldControlProps'

const inputVariants = cva(
  [
    'flex w-full rounded-control border bg-bg-default px-3 text-text-default',
    'placeholder:text-text-muted',
    'transition-colors',
    'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1',
    'disabled:cursor-not-allowed disabled:bg-bg-muted disabled:text-text-disabled disabled:border-border-disabled',
    'aria-invalid:border-border-error aria-invalid:focus-visible:ring-status-error',
  ],
  {
    variants: {
      size: {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-11 text-base',
      },
      variant: {
        default: 'border-border-default',
        error: 'border-border-error',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
)

type InputSize = 'sm' | 'md' | 'lg'

type InputOwnProps = {
  inputSize?: InputSize
  invalid?: boolean
  className?: string
}

type InputProps = InputOwnProps & Omit<ComponentPropsWithoutRef<'input'>, 'size'>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputSize = 'md',
      invalid,
      className,
      disabled,
      required,
      id,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedByProp,
      ...rest
    },
    ref
  ) => {
    const field = useFieldContext()

    if (import.meta.env.DEV && !field && !ariaLabel && !ariaLabelledBy) {
      console.warn(
        '[KRDS/Input] Provide an accessible name with FieldLabel or aria-label/aria-labelledby.'
      )
    }

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
      <input
        ref={ref}
        id={inputId}
        data-slot="input"
        data-state={isDisabled ? 'disabled' : hasError ? 'error' : undefined}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={hasError || undefined}
        aria-required={isRequired || undefined}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-label={ariaLabel}
        className={cn(
          inputVariants({
            size: inputSize,
            variant: hasError ? 'error' : 'default',
          }),
          className
        )}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input, inputVariants }
export type { InputProps, InputSize }
