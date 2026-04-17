/**
 * 포커스 트랩 유틸리티
 * Dialog 같은 오버레이 컴포넌트의 포커스 관리
 * KWCAG 2.2, ARIA Authoring Practices Guide 준수
 */

/** 포커스 가능한 엘리먼트 셀렉터 */
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable="true"]',
  'details > summary',
].join(', ')

/**
 * 컨테이너 내의 모든 포커스 가능한 엘리먼트 목록 반환
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
  ).filter(el => !el.closest('[inert]') && isVisible(el))
}

/**
 * 엘리먼트가 시각적으로 보이는지 확인
 */
function isVisible(el: HTMLElement): boolean {
  return (
    !el.hidden &&
    getComputedStyle(el).display !== 'none' &&
    getComputedStyle(el).visibility !== 'hidden'
  )
}

/**
 * 포커스 트랩 이벤트 핸들러 생성
 * Tab / Shift+Tab 키로 포커스가 컨테이너 내에서만 순환하도록 한다.
 *
 * @returns Tab 키 이벤트 핸들러
 */
export function createFocusTrapHandler(
  container: HTMLElement
): (event: KeyboardEvent) => void {
  return (event: KeyboardEvent) => {
    if (event.key !== 'Tab') return

    const focusable = getFocusableElements(container)
    if (focusable.length === 0) {
      event.preventDefault()
      return
    }

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    const current = document.activeElement as HTMLElement

    if (event.shiftKey) {
      // Shift+Tab: 첫 번째 요소에서 마지막으로 순환
      if (current === first || !container.contains(current)) {
        event.preventDefault()
        last.focus()
      }
    } else {
      // Tab: 마지막 요소에서 첫 번째로 순환
      if (current === last || !container.contains(current)) {
        event.preventDefault()
        first.focus()
      }
    }
  }
}

/**
 * 컨테이너의 첫 번째 포커스 가능 엘리먼트로 포커스 이동
 * 포커스 가능한 요소가 없으면 컨테이너 자체에 포커스
 */
export function focusFirstElement(container: HTMLElement): void {
  const focusable = getFocusableElements(container)

  if (focusable.length > 0) {
    focusable[0].focus()
  } else {
    // 포커스 가능한 요소가 없으면 컨테이너 자체에 포커스
    if (!container.hasAttribute('tabindex')) {
      container.setAttribute('tabindex', '-1')
    }
    container.focus()
  }
}
