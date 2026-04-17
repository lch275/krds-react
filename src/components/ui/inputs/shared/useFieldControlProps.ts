import { useFieldContext } from '@/components/ui/Field'
import { ariaDescribedBy } from '@/utils/id'

type FieldControlOptions = {
  id?: string
  disabled?: boolean
  required?: boolean
  invalid?: boolean
  ariaDescribedBy?: string
  ariaLabelledBy?: string
}

function useFieldControlProps({
  id,
  disabled,
  required,
  invalid,
  ariaDescribedBy: ariaDescribedByProp,
  ariaLabelledBy,
}: FieldControlOptions) {
  const field = useFieldContext()

  const hasError = invalid ?? field?.hasError ?? false
  const isDisabled = disabled ?? field?.disabled ?? false
  const isRequired = required ?? field?.required ?? false

  const describedBy = field
    ? ariaDescribedBy(
        field.hasDescription ? field.descriptionId : null,
        hasError ? field.errorId : null,
        ariaDescribedByProp
      )
    : ariaDescribedByProp

  return {
    field,
    hasError,
    isDisabled,
    isRequired,
    inputId: id ?? field?.inputId,
    labelledBy: ariaLabelledBy ?? (field ? field.labelId : undefined),
    describedBy,
  }
}

export { useFieldControlProps }
export type { FieldControlOptions }
