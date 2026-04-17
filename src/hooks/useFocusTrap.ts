/**
 * useFocusTrap
 * Dialog 같은 오버레이 컴포넌트의 포커스 트랩 훅
 * ARIA Authoring Practices Guide: Modal Dialog Pattern 준수
 *
 * @example
 * const dialogRef = useRef<HTMLDivElement>(null)
 * useFocusTrap(dialogRef, isOpen)
 */

import { useEffect, useRef, type RefObject } from 'react'
import {
  createFocusTrapHandler,
  focusFirstElement,
} from '../utils/focus-trap'

export function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  active: boolean
): void {
  // 트랩 활성화 전 포커스를 가졌던 엘리먼트 저장
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active) return

    const container = ref.current
    if (!container) return

    // 현재 포커스된 요소 저장
    previousFocusRef.current = document.activeElement as HTMLElement

    // 첫 번째 포커스 가능 요소로 이동 (setTimeout으로 렌더 완료 후 실행)
    const focusTimeout = setTimeout(() => {
      focusFirstElement(container)
    }, 0)

    // Tab 키 트랩 핸들러 등록
    const handleKeyDown = createFocusTrapHandler(container)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      clearTimeout(focusTimeout)
      document.removeEventListener('keydown', handleKeyDown)

      // 트랩 비활성화 시 이전 포커스 복귀
      if (previousFocusRef.current && document.contains(previousFocusRef.current)) {
        previousFocusRef.current.focus()
      }
    }
  }, [active, ref])
}
