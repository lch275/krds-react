/**
 * className 병합 유틸리티
 * clsx + tailwind-merge 조합으로 Tailwind 클래스 충돌 해결
 *
 * @example
 * cn('px-4 py-2', 'px-2')          // → 'py-2 px-2' (px-4 제거됨)
 * cn('bg-red-500', false, 'text-white')  // → 'bg-red-500 text-white'
 * cn({ 'opacity-50': isDisabled })  // → 'opacity-50' (if isDisabled is true)
 */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
