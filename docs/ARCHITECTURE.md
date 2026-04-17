# Architecture

## Repository Shape
현재는 단일 Vite 애플리케이션 안에서 디자인 시스템을 관리합니다. 목적은 빠른 반복과 Storybook/Vitest 기반 검증이며, 패키지 분리는 필요 시점까지 미룹니다.

핵심 디렉터리:
- `src/components`: 카테고리별 컴포넌트 구현
- `src/hooks`: 상태 및 미디어 쿼리 관련 공통 훅
- `src/utils`: 스타일 조합, a11y, id 유틸리티
- `src/demo`: 수동 검증용 쇼케이스
- `docs`: 운영 문서

## Public API
외부 노출 진입점은 [src/index.ts](/C:/Users/chanh/workspace/frontend/react-krds/src/index.ts:1) 하나로 고정합니다.

원칙:
- 카테고리별 barrel file에서 컴포넌트를 묶어 export
- 내부 구현 세부사항은 category `index.ts` 뒤에 숨김
- 훅, 유틸, 타입은 별도 명시 export 유지

## Component Layers
### 1. Primitive layer
`Box`, `Text`, `Heading` 같은 기본 시맨틱 래퍼입니다. 다른 컴포넌트가 이 계층 위에서 조합됩니다.

### 2. Control layer
`Button`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `DateInput`, `FileUpload`처럼 독립 사용 가능한 입력/행동 컴포넌트입니다.

### 3. Composite layer
`Dialog`, `Tabs`, `Accordion`, `BottomSheet`, `Table`, `Pagination`, `Tooltip`처럼 상태와 구조를 함께 갖는 조합형 컴포넌트입니다.

### 4. Pattern layer
`ConsentSection`, `FilterPanel`, `ResultSummary`, `ResultList`처럼 서비스 화면에서 반복되는 UI 묶음입니다.

## Form Architecture
폼 계열은 `Field`와 공유 입력 연동 로직을 중심으로 구성합니다.

원칙:
- 레이블, 설명, 에러 메시지 연결은 `Field` 기준으로 통일
- 제어 컴포넌트는 공유 훅에서 `id`, `aria-describedby`, `aria-invalid`를 주입
- 시각 상태와 시맨틱 상태를 분리하지 않음

## Styling Model
- Tailwind CSS utility 기반
- `cva`로 variant/size/tone 조합 관리
- `cn`/`cx`로 클래스 병합 일관성 유지
- KRDS 감성을 유지하되 React 컴포넌트 API에 맞게 단순화

## Accessibility Model
- 네이티브 요소 우선
- 필요한 경우에만 ARIA 추가
- overlay/navigation/pattern 계열은 키보드 계약을 먼저 정의
- toast/snackbar/alert는 라이브 리전 강도를 역할에 맞게 분리

## Growth Path
패키지 분리를 고려할 시점:
- npm 배포 필요
- 토큰/컴포넌트/문서를 독립 버저닝해야 함
- 다중 앱에서 공용 패키지를 소비해야 함

그 전까지는 현재 단일 저장소 구조가 유지 보수 비용 대비 가장 효율적입니다.
