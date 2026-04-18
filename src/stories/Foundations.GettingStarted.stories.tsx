import type { Meta, StoryObj } from '@storybook/react'

function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-bg-subtle px-6 py-10 text-text-default">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            기초
          </p>
          <h1 className="mt-3 text-4xl font-bold">시작하기</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-subtle">
            이 디자인 시스템은 KRDS에서 영감을 받은 컴포넌트를 접근성, 예측 가능한 시맨틱,
            재사용 가능한 조합성을 기준으로 정리한 React API입니다.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: '1. 설치',
              body: '의존성을 설치한 뒤 Vite 앱이나 Storybook을 실행해 컴포넌트를 개별적으로 확인합니다.',
            },
            {
              title: '2. 가져오기',
              body: '패키지 엔트리포인트에서 컴포넌트를 불러와 카테고리 단위 export를 일관되게 유지합니다.',
            },
            {
              title: '3. 검증',
              body: '새 컴포넌트를 추가할 때는 스토리, 테스트, 필요 시 데모 갱신까지 함께 포함합니다.',
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-card border border-border-default bg-bg-default p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-text-subtle">
                {item.body}
              </p>
            </article>
          ))}
        </section>

        <section className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <h2 className="text-2xl font-semibold">카테고리 구성</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['기초', 'Box, Text, Heading'],
              ['UI', 'Button, Alert, Badge, Link, SearchBar, 입력 컴포넌트'],
              ['데이터', 'Table'],
              ['아이덴티티', 'Masthead, Identifier'],
              ['내비게이션', 'Breadcrumb, Pagination, 메뉴, 단계 흐름'],
              ['피드백', 'Toast, Snackbar, 로딩과 빈 상태'],
              ['도움말', 'Tooltip, ContextualHelp'],
              ['레이아웃', 'Header, Footer'],
              ['오버레이', 'Dialog, Tabs, Accordion, BottomSheet'],
              ['패턴', '동의, 필터링, 결과 요약과 목록'],
            ].map(([title, body]) => (
              <article
                key={title}
                className="rounded-card border border-border-default bg-bg-subtle p-5"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-text-subtle">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <h2 className="text-2xl font-semibold">작업 흐름</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              '적절한 카테고리 디렉터리에 컴포넌트를 구현합니다.',
              '카테고리 배럴과 src/index.ts에서 export를 연결합니다.',
              '상태와 사용 의도를 설명하는 Storybook 스토리를 추가합니다.',
              '시맨틱, 상호작용, 접근성에 대한 Vitest를 작성합니다.',
              '필요하면 데모 쇼케이스에도 의미 있는 변경을 반영합니다.',
              '변경 마무리 전 lint와 test:run을 실행합니다.',
            ].map((item) => (
              <div
                key={item}
                className="rounded-card border border-border-default bg-bg-subtle px-4 py-3 text-sm text-text-subtle"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

const meta = {
  title: '기초/시작하기',
  component: GettingStartedPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
} satisfies Meta<typeof GettingStartedPage>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
