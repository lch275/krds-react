import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'
import { useFieldControlProps } from '@/components/ui/inputs/shared/useFieldControlProps'

type TextareaProps = {
  invalid?: boolean
  className?: string
} & ComponentPropsWithoutRef<'textarea'>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
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
      <textarea
        ref={ref}
        id={inputId}
        data-slot="textarea"
        data-state={isDisabled ? 'disabled' : hasError ? 'error' : undefined}
        disabled={isDisabled}
        required={isRequired}
        aria-invalid={hasError || undefined}
        aria-required={isRequired || undefined}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-label={ariaLabel}
        className={cn(
          'flex min-h-24 w-full rounded-control border px-3 py-2',
          'bg-bg-default text-text-default',
          'placeholder:text-text-muted',
          'transition-colors resize-y',
          'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:bg-bg-muted disabled:text-text-disabled disabled:border-border-disabled',
          hasError
            ? 'border-border-error focus-visible:ring-status-error'
            : 'border-border-default',
          className
        )}
        {...rest}
      />
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }
export type { TextareaProps }
