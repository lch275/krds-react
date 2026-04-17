export function hasAccessibleName(
  ariaLabel?: string,
  ariaLabelledBy?: string,
  visibleText?: string | null
): boolean {
  return Boolean(ariaLabel || ariaLabelledBy || (visibleText && visibleText.trim().length > 0))
}

export function toAriaInvalid(invalid?: boolean): true | undefined {
  return invalid ? true : undefined
}

export function toAriaRequired(required?: boolean): true | undefined {
  return required ? true : undefined
}

export function toDataState(states: Record<string, boolean>): string | undefined {
  const active = Object.entries(states)
    .filter(([, enabled]) => enabled)
    .map(([name]) => name)
  return active.length > 0 ? active.join(' ') : undefined
}
