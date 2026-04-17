import { useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean {
  const getSnapshot = () => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  }

  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === 'undefined') {
      return () => undefined
    }

    const mediaQuery = window.matchMedia(query)
    const handler = () => onStoreChange()

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }

  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

export function usePrefersDarkMode(): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)')
}

export function useForcedColors(): boolean {
  return useMediaQuery('(forced-colors: active)')
}
