/**
 * useAnnounce
 * aria-live 영역을 통한 스크린리더 공지 훅
 *
 * 중요: aria-live 영역은 항상 DOM에 존재해야 하고,
 * 콘텐츠는 그 후에 삽입해야 스크린리더가 감지할 수 있다.
 *
 * @example
 * const { announce } = useAnnounce()
 * announce('저장되었습니다', 'polite')
 * announce('오류가 발생했습니다', 'assertive')
 */

import { useCallback, useEffect, useRef } from 'react'

type Priority = 'polite' | 'assertive'

interface AnnounceOptions {
  clearDelay?: number  // 메시지 자동 지우기 딜레이 (ms), 기본 5000
}

let politeRegion: HTMLElement | null = null
let assertiveRegion: HTMLElement | null = null

/**
 * aria-live 영역 DOM 요소 생성 및 반환
 * 앱 전체에서 한 쌍만 유지
 */
function getOrCreateLiveRegions(): {
  polite: HTMLElement
  assertive: HTMLElement
} {
  if (!politeRegion) {
    politeRegion = document.createElement('div')
    politeRegion.setAttribute('aria-live', 'polite')
    politeRegion.setAttribute('aria-atomic', 'true')
    politeRegion.setAttribute('aria-relevant', 'additions text')
    Object.assign(politeRegion.style, {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    })
    document.body.appendChild(politeRegion)
  }

  if (!assertiveRegion) {
    assertiveRegion = document.createElement('div')
    assertiveRegion.setAttribute('aria-live', 'assertive')
    assertiveRegion.setAttribute('aria-atomic', 'true')
    Object.assign(assertiveRegion.style, {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      borderWidth: '0',
    })
    document.body.appendChild(assertiveRegion)
  }

  return { polite: politeRegion, assertive: assertiveRegion }
}

export function useAnnounce() {
  const clearTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    // 컴포넌트 마운트 시 aria-live 영역 초기화
    if (typeof document !== 'undefined') {
      getOrCreateLiveRegions()
    }
    return () => {
      clearTimeout(clearTimeoutRef.current)
    }
  }, [])

  const announce = useCallback(
    (
      message: string,
      priority: Priority = 'polite',
      options: AnnounceOptions = {}
    ) => {
      if (typeof document === 'undefined') return

      const { clearDelay = 5000 } = options
      const { polite, assertive } = getOrCreateLiveRegions()
      const region = priority === 'assertive' ? assertive : polite

      // 이전 메시지 초기화 후 새 메시지 삽입 (스크린리더 재공지 트리거)
      region.textContent = ''
      clearTimeout(clearTimeoutRef.current)

      // 다음 tick에 메시지 삽입 (빈값 후 삽입이어야 스크린리더가 감지)
      const timeout = setTimeout(() => {
        region.textContent = message

        // 일정 시간 후 영역 초기화
        if (clearDelay > 0) {
          clearTimeoutRef.current = setTimeout(() => {
            region.textContent = ''
          }, clearDelay)
        }
      }, 100)

      clearTimeoutRef.current = timeout
    },
    []
  )

  return { announce }
}
