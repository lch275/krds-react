import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useAriaIds, type AriaIds } from '@/utils/id'
import { cn } from '@/utils/cn'

interface FieldContextValue extends AriaIds {
  disabled: boolean
  required: boolean
  hasError: boolean
  hasDescription: boolean
  registerDescription: () => void
  unregisterDescription: () => void
  registerError: () => void
  unregisterError: () => void
}

const FieldContext = createContext<FieldContextValue | null>(null)

export function useFieldContext(): FieldContextValue | null {
  return useContext(FieldContext)
}

interface FieldProps {
  children: ReactNode
  disabled?: boolean
  required?: boolean
  invalid?: boolean
  className?: string
}

function Field({
  children,
  disabled = false,
  required = false,
  invalid = false,
  className,
}: FieldProps) {
  const ids = useAriaIds('field')
  const [descriptionCount, setDescriptionCount] = useState(0)
  const [errorCount, setErrorCount] = useState(0)

  const contextValue = useMemo<FieldContextValue>(
    () => ({
      ...ids,
      disabled,
      required,
      hasError: invalid || errorCount > 0,
      hasDescription: descriptionCount > 0,
      registerDescription: () => setDescriptionCount((prev) => prev + 1),
      unregisterDescription: () => setDescriptionCount((prev) => Math.max(0, prev - 1)),
      registerError: () => setErrorCount((prev) => prev + 1),
      unregisterError: () => setErrorCount((prev) => Math.max(0, prev - 1)),
    }),
    [ids, disabled, required, invalid, descriptionCount, errorCount]
  )

  return (
    <FieldContext.Provider value={contextValue}>
      <div
        data-slot="field"
        data-disabled={disabled || undefined}
        data-invalid={(invalid || errorCount > 0) || undefined}
        className={cn('grid gap-1.5', className)}
      >
        {children}
      </div>
    </FieldContext.Provider>
  )
}

interface FieldLabelProps {
  children: ReactNode
  className?: string
  hideRequired?: boolean
}

function FieldLabel({ children, className, hideRequired = false }: FieldLabelProps) {
  const ctx = useFieldContext()

  return (
    <label
      id={ctx?.labelId}
      htmlFor={ctx?.inputId}
      data-slot="field-label"
      data-required={ctx?.required && !hideRequired ? true : undefined}
      className={cn('text-sm font-medium text-text-default', className)}
    >
      {children}
      {ctx?.required && !hideRequired && (
        <span aria-hidden="true" className="ml-1 text-status-error" title="required">
          *
        </span>
      )}
    </label>
  )
}

interface FieldDescriptionProps {
  children: ReactNode
  className?: string
}

function FieldDescription({ children, className }: FieldDescriptionProps) {
  const ctx = useFieldContext()

  useEffect(() => {
    if (!ctx) return
    ctx.registerDescription()
    return () => ctx.unregisterDescription()
  }, [ctx])

  return (
    <p
      id={ctx?.descriptionId}
      data-slot="field-description"
      className={cn('text-sm text-text-subtle', className)}
    >
      {children}
    </p>
  )
}

interface FieldErrorProps {
  children?: ReactNode
  className?: string
}

function FieldError({ children, className }: FieldErrorProps) {
  const ctx = useFieldContext()
  const hasChildren = Boolean(children)

  useEffect(() => {
    if (!ctx || !hasChildren) return
    ctx.registerError()
    return () => ctx.unregisterError()
  }, [ctx, hasChildren])

  if (!hasChildren) {
    return null
  }

  return (
    <p
      id={ctx?.errorId}
      data-slot="field-error"
      role="alert"
      aria-live="polite"
      className={cn('text-sm text-status-error', className)}
    >
      {children}
    </p>
  )
}

export { Field, FieldLabel, FieldDescription, FieldError }
export type { FieldProps, FieldLabelProps, FieldDescriptionProps, FieldErrorProps }
