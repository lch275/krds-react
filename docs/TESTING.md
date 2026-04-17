# Testing Strategy

## Current Gates
- `npm run lint`
- `npm run test:run`

## Coverage Goals
- 렌더링 분기: variant, size, tone, disabled, loading
- 상호작용 분기: click, keyboard, focus movement, open/close
- 접근성 분기: role, name, description, error linkage, live region
- 패턴 분기: 요약 정보와 액션 조합이 실제 사용 시나리오를 재현하는지 확인

## Required By Component Type
### Form controls
- `Field` 연결 상태 검증
- `aria-invalid`, `aria-describedby`, `required` 반영 확인
- controlled/uncontrolled 동작 확인

### Navigation
- 현재 항목 강조
- 클릭 또는 키보드로 상태 전환
- anchor 기반 컴포넌트는 실제 타깃 연동 또는 가드 검증

### Overlays
- 열기/닫기
- Escape 처리
- 포커스 이동 또는 최소한의 포커스 안정성 확인

### Feedback
- 라이브 리전 속성 검증
- 닫기 액션과 자동 숨김이 있으면 타이머 동작 검증
- 로딩 상태는 시맨틱 속성과 시각 상태 둘 다 검증

## Tooling
- Vitest
- Testing Library
- `user-event`
- `jest-axe`

## Practical Rules
- 스냅샷보다 명시적 semantic assertion을 우선합니다.
- 스타일 클래스 전체 비교보다 의미 있는 state class 존재 여부만 확인합니다.
- Story 추가 시 중요한 상호작용이 있으면 테스트도 함께 추가합니다.
- 버그 수정 시 재현 테스트를 먼저 추가하는 쪽을 우선합니다.

## Current Status
Latest verified on April 17, 2026:
- `37` test files passed
- `120` tests passed
