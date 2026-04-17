/**
 * ARIA ID 연결 유틸리티
 * React 19의 useId를 활용해 label-input-description-error를 안전하게 연결
 *
 * @example
 * function MyField() {
 *   const ids = useAriaIds('email-field')
 *   return (
 *     <div>
 *       <label id={ids.labelId} htmlFor={ids.inputId}>이메일</label>
 *       <input id={ids.inputId} aria-labelledby={ids.labelId} />
 *     </div>
 *   )
 * }
 */

import { useId } from 'react'

export interface AriaIds {
  inputId: string
  labelId: string
  descriptionId: string
  errorId: string
}

/**
 * 폼 컨트롤 ARIA ID 세트 생성
 * React의 useId를 사용해 SSR 안전하고 충돌 없는 ID를 생성한다.
 *
 * @param prefix - ID 접두사 (선택적, 가독성 향상용)
 */
export function useAriaIds(prefix?: string): AriaIds {
  const id = useId()
  const base = prefix ? `${prefix}-${id}` : id

  return {
    inputId:       `${base}-input`,
    labelId:       `${base}-label`,
    descriptionId: `${base}-description`,
    errorId:       `${base}-error`,
  }
}

/**
 * aria-describedby 값 조합 헬퍼
 * 여러 ID를 공백으로 연결하고, 빈 값은 자동으로 제거한다.
 *
 * @example
 * ariaDescribedBy(descriptionId, hasError && errorId)
 * // → 'desc-id' or 'desc-id error-id' or undefined
 */
export function ariaDescribedBy(
  ...ids: Array<string | false | null | undefined>
): string | undefined {
  const joined = ids.filter(Boolean).join(' ')
  return joined || undefined
}
