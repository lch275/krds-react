/**
 * Vitest 테스트 셋업 파일
 * 모든 테스트 실행 전 자동으로 로드됨
 */

import '@testing-library/jest-dom'
import { toHaveNoViolations } from 'jest-axe'
import { cleanup } from '@testing-library/react'
import { afterEach, expect } from 'vitest'

// jest-axe 매처 확장
expect.extend(toHaveNoViolations)

// 각 테스트 후 React 렌더 트리 정리
afterEach(() => {
  cleanup()
})
