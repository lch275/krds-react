# Accessibility Checklist

KRDS 성격의 공공 서비스 디자인 시스템을 기준으로 한 최소 체크리스트입니다.

## Global
- 모든 인터랙션은 키보드만으로 수행 가능해야 합니다.
- `:focus-visible` 상태는 배경색과 무관하게 명확해야 합니다.
- 상태 전달을 색상에만 의존하지 않습니다.
- 모션이 있는 컴포넌트는 `prefers-reduced-motion`를 존중합니다.
- 클릭 가능한 비시맨틱 요소보다 네이티브 요소를 우선합니다.

## Form Controls
- 모든 입력 요소는 접근 가능한 이름을 가져야 합니다.
- 힌트와 에러는 `aria-describedby`로 연결합니다.
- `required`, `disabled`, `invalid`, `readonly`는 시각 상태와 시맨틱 상태가 일치해야 합니다.
- 날짜, 파일 업로드처럼 형식 제약이 큰 입력은 보조 설명을 함께 제공합니다.

## Navigation
- `Breadcrumb`, `Pagination`, `SideNavigation`, `MainMenu`, `InPageNavigation`는 현재 위치를 명확하게 드러내야 합니다.
- 페이지 내 이동용 링크는 실제 대상 `id`와 연결되어야 합니다.
- 단계형 UI는 현재 단계와 완료 단계를 텍스트로도 구분해야 합니다.

## Overlays And Composite Components
- `Dialog`와 `BottomSheet`는 포커스를 내부에 유지하고 닫을 때 트리거 포커스를 복원해야 합니다.
- `Accordion`은 헤더 버튼과 패널의 관계를 ARIA 속성으로 연결합니다.
- `Tabs`는 `tab`, `tablist`, `tabpanel` 관계와 방향키 이동을 보장해야 합니다.
- `Tooltip`은 보조 설명만 맡고 필수 정보는 항상 화면에 보여야 합니다.

## Feedback
- `Alert`, `Toast`, `Snackbar`는 중요도에 맞는 라이브 리전 강도를 사용합니다.
- `ProgressBar`는 determinate 상태에서 현재 값과 최대값을 노출합니다.
- `Skeleton`은 스크린 리더에 실제 콘텐츠처럼 읽히지 않도록 합니다.
- `EmptyState`는 문제 상황, 다음 행동, 대안 경로를 함께 제시하는 편이 좋습니다.

## Content And Structure
- `Heading` 계층은 선형적으로 유지합니다.
- `Header`, `Masthead`, `Footer`, `Identifier`는 역할이 겹치지 않게 배치합니다.
- 표 형식 정보가 아닌 레이아웃에는 `Table`을 사용하지 않습니다.

## Common Misuse
- `div`에 클릭 핸들러만 달고 키보드 지원을 생략하는 경우
- 링크를 버튼처럼 사용하거나 버튼을 페이지 이동에 사용하는 경우
- 아이콘 버튼, 검색 버튼, 닫기 버튼에 이름이 없는 경우
- 툴팁 안에만 중요한 유효성 검사 규칙을 숨기는 경우
