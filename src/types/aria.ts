/**
 * 공유 ARIA 타입 헬퍼
 * 컴포넌트 접근성 구현에 사용되는 공통 타입들
 */

/** aria-live 값 */
export type AriaLive = 'off' | 'polite' | 'assertive'

/** aria-current 값 */
export type AriaCurrent =
  | boolean
  | 'page'
  | 'step'
  | 'location'
  | 'date'
  | 'time'

/** aria-checked 값 (indeterminate 포함) */
export type AriaChecked = boolean | 'mixed'

/** aria-expanded 값 */
export type AriaExpanded = boolean | undefined

/** aria-orientation 값 */
export type AriaOrientation = 'horizontal' | 'vertical'

/** aria-haspopup 값 */
export type AriaHasPopup =
  | boolean
  | 'false'
  | 'true'
  | 'menu'
  | 'listbox'
  | 'tree'
  | 'grid'
  | 'dialog'

/** 접근 가능한 이름을 제공하는 props */
export interface AccessibleNameProps {
  'aria-label'?: string
  'aria-labelledby'?: string
}

/** 공통 폼 접근성 props */
export interface FormA11yProps {
  'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
  'aria-required'?: boolean
  'aria-readonly'?: boolean
  'aria-describedby'?: string
  'aria-errormessage'?: string
}

/** 인터랙티브 상태 props */
export interface InteractiveStateProps {
  disabled?: boolean
  'aria-disabled'?: boolean
  'aria-busy'?: boolean
}
