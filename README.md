# react-krds

KRDS UI와 서비스 패턴을 React + TypeScript 기반 디자인 시스템으로 정리한 프로젝트입니다. 공공 서비스 환경에 맞는 접근성, 예측 가능한 API, 재사용 가능한 조합성을 우선합니다.

## Stack
- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Storybook
- Vitest + Testing Library + jest-axe
- ESLint

## Quick Start
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`
- `npm run test:run`
- `npm run storybook`
- `npm run build-storybook`

## Storybook Deploy
GitHub Pages deployment is configured through [deploy-storybook.yml](/C:/Users/chanh/workspace/frontend/react-krds/.github/workflows/deploy-storybook.yml:1).

Deployment flow:
- Set `Settings > Pages > Source` to `GitHub Actions`
- Push to `main`
- GitHub Actions builds Storybook and publishes `storybook-static`

Current Pages base path is configured for a repository named `react-krds`:
- workflow env: `STORYBOOK_BASE_PATH=/react-krds/`
- Storybook reads that value in [.storybook/main.js](/C:/Users/chanh/workspace/frontend/react-krds/.storybook/main.js:1)

If the target repository name is different, update the workflow value:
```yaml
env:
  STORYBOOK_BASE_PATH: /your-repository-name/
```

Expected Pages URL shape for a project repository:
- `https://<user-or-org>.github.io/<repository-name>/`

## Package Surface
모든 공개 컴포넌트는 [src/index.ts](/C:/Users/chanh/workspace/frontend/react-krds/src/index.ts:1)에서 재수출합니다.

### Primitives
- `Box`
- `Text`
- `Heading`

### UI
- `Button`
- `Badge`
- `Alert`
- `Field`
- `Spinner`
- `Link`
- `SearchBar`
- `FilterChip`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Radio`
- `Switch`
- `DateInput`
- `FileUpload`

### Data
- `Table`

### Identity
- `Masthead`
- `Identifier`

### Navigation
- `Breadcrumb`
- `Pagination`
- `StepIndicator`
- `InPageNavigation`
- `SideNavigation`
- `MainMenu`

### Feedback
- `Toast`
- `Snackbar`
- `EmptyState`
- `ProgressBar`
- `Skeleton`

### Help
- `Tooltip`
- `ContextualHelp`

### Layout
- `Header`
- `Footer`

### Overlays
- `Dialog`
- `Tabs`
- `Accordion`
- `BottomSheet`

### Patterns
- `ConsentSection`
- `FilterPanel`
- `ResultSummary`
- `ResultList`

## Project Structure
- `src/components/primitives`: semantic primitives
- `src/components/ui`: controls, form fields, indicators
- `src/components/data`: tabular data presentation
- `src/components/identity`: KRDS identity layer
- `src/components/navigation`: local and global navigation
- `src/components/feedback`: status, loading, transient feedback
- `src/components/help`: tooltip and contextual guidance
- `src/components/layout`: header/footer shells
- `src/components/overlays`: layered interactions
- `src/components/patterns`: higher-level reusable service patterns
- `src/demo`: showcase page and demo fixture data
- `src/hooks`: reusable interaction hooks
- `src/utils`: styling, a11y, id helpers
- `docs`: architecture, accessibility, testing, documentation notes

## Engineering Baseline
- Keyboard-first interaction for every interactive component
- `Field`-based label, hint, error linkage across form controls
- Reduced-motion aware transitions where motion is used
- Story + test coverage for newly added components
- Barrel export structure by category for stable public API

## Verification
Latest verified on April 17, 2026:
- `npm.cmd run lint`
- `npm.cmd run test:run`

Current result:
- `37` test files passed
- `120` tests passed

## Docs
- [docs/ARCHITECTURE.md](/C:/Users/chanh/workspace/frontend/react-krds/docs/ARCHITECTURE.md:1)
- [docs/ACCESSIBILITY.md](/C:/Users/chanh/workspace/frontend/react-krds/docs/ACCESSIBILITY.md:1)
- [docs/COMPONENTS.md](/C:/Users/chanh/workspace/frontend/react-krds/docs/COMPONENTS.md:1)
- [docs/TESTING.md](/C:/Users/chanh/workspace/frontend/react-krds/docs/TESTING.md:1)
- [docs/DOCUMENTATION.md](/C:/Users/chanh/workspace/frontend/react-krds/docs/DOCUMENTATION.md:1)
