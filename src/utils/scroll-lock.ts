/**
 * Body 스크롤 잠금 유틸리티
 * Dialog 열림 시 배경 스크롤 방지
 * 스크롤바 너비 보상으로 레이아웃 이동 방지
 */

let lockCount = 0
let savedPaddingRight = ''
let savedOverflow = ''

/**
 * body 스크롤 잠금
 * 중첩 호출을 지원하기 위해 카운터 방식 사용
 */
export function lockScroll(): void {
  if (lockCount === 0) {
    const scrollbarWidth = getScrollbarWidth()

    savedOverflow = document.body.style.overflow
    savedPaddingRight = document.body.style.paddingRight

    // 스크롤바 너비만큼 패딩 추가 (레이아웃 이동 방지)
    const currentPaddingRight = parseInt(
      getComputedStyle(document.body).paddingRight,
      10
    ) || 0

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`
  }
  lockCount++
}

/**
 * body 스크롤 잠금 해제
 */
export function unlockScroll(): void {
  lockCount = Math.max(0, lockCount - 1)

  if (lockCount === 0) {
    document.body.style.overflow = savedOverflow
    document.body.style.paddingRight = savedPaddingRight
  }
}

/**
 * 스크롤바 너비 계산
 * 스크롤바가 없는 경우 0 반환
 */
function getScrollbarWidth(): number {
  if (typeof document === 'undefined') return 0

  const outer = document.createElement('div')
  outer.style.visibility = 'hidden'
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)

  const inner = document.createElement('div')
  outer.appendChild(inner)

  const width = outer.offsetWidth - inner.offsetWidth
  outer.remove()

  return width
}
