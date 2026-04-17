import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { useControllable } from '@/hooks/useControllable'

type SwitchProps = {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  children?: ReactNode
} & Omit<
  ComponentPropsWithoutRef<'button'>,
  'role' | 'type' | 'onClick' | 'aria-checked'
>

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onCheckedChange,
      disabled = false,
      className,
      children,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      id,
      ...rest
    },
    ref
  ) => {
    const [checked, setChecked] = useControllable<boolean>(
      controlledChecked,
      defaultChecked,
      onCheckedChange
    )

    const toggle = () => {
      if (!disabled) {
        setChecked(!checked)
      }
    }

    return (
      <div
        className={cn('inline-flex items-center gap-3', disabled && 'opacity-40', className)}
        data-slot="switch-root"
        data-state={checked ? 'checked' : 'unchecked'}
        data-disabled={disabled || undefined}
      >
        <button
          ref={ref}
          id={id}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled || undefined}
          aria-label={!children ? ariaLabel : undefined}
          aria-labelledby={!children ? ariaLabelledBy : undefined}
          disabled={disabled}
          data-slot="switch-control"
          onClick={toggle}
          className={cn(
            'relative inline-flex h-6 w-11 items-center rounded-full',
            'transition-colors duration-200',
            'focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-border-focus focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed',
            checked ? 'bg-primary' : 'bg-border-default'
          )}
          {...rest}
        >
          <span
            data-slot="switch-thumb"
            aria-hidden="true"
            className={cn(
              'inline-block h-5 w-5 rounded-full bg-bg-default shadow-sm',
              'transition-transform duration-200',
              checked ? 'translate-x-5' : 'translate-x-0.5'
            )}
          />
          <span className="sr-only">{checked ? 'On' : 'Off'}</span>
        </button>
        {children && <span data-slot="switch-label" className="text-text-default">{children}</span>}
      </div>
    )
  }
)

Switch.displayName = 'Switch'

export { Switch }
export type { SwitchProps }
