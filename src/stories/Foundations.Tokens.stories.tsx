import type { Meta, StoryObj } from '@storybook/react'

const colorGroups = [
  {
    title: '브랜드',
    items: [
      ['기본', 'var(--color-primary)'],
      ['호버', 'var(--color-primary-hover)'],
      ['활성', 'var(--color-primary-active)'],
      ['은은한 강조', 'var(--color-primary-subtle)'],
    ],
  },
  {
    title: '텍스트',
    items: [
      ['기본', 'var(--color-text-default)'],
      ['보조', 'var(--color-text-subtle)'],
      ['약한 강조', 'var(--color-text-muted)'],
      ['반전', 'var(--color-text-inverse)'],
    ],
  },
  {
    title: '표면',
    items: [
      ['기본 배경', 'var(--color-bg-default)'],
      ['보조 배경', 'var(--color-bg-subtle)'],
      ['약한 배경', 'var(--color-bg-muted)'],
      ['기본 테두리', 'var(--color-border-default)'],
    ],
  },
  {
    title: '상태',
    items: [
      ['안내', 'var(--color-status-info)'],
      ['성공', 'var(--color-status-success)'],
      ['주의', 'var(--color-status-warning)'],
      ['오류', 'var(--color-status-error)'],
    ],
  },
]

const spacingScale = [
  '0',
  '0_5',
  '1',
  '1_5',
  '2',
  '2_5',
  '3',
  '3_5',
  '4',
  '5',
  '6',
  '8',
  '10',
  '11',
  '12',
]

const radiusScale = ['sm', 'md', 'lg', 'xl', '2xl', 'full']

function TokensPage() {
  return (
    <div className="min-h-screen bg-bg-subtle px-6 py-10 text-text-default">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            기초
          </p>
          <h1 className="mt-3 text-4xl font-bold">디자인 토큰</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-subtle">
            원시 토큰은 기본 스케일을 정의하고, 시맨틱 토큰은 이를 배경, 텍스트, 테두리,
            상태, 모션 같은 컴포넌트 친화적 값으로 매핑합니다.
          </p>
        </header>

        <section className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <h2 className="text-2xl font-semibold">색상 토큰</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {colorGroups.map((group) => (
              <article key={group.title} className="rounded-card border border-border-default p-5">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.items.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center gap-4 rounded-card border border-border-default bg-bg-subtle p-3"
                    >
                      <div
                        aria-hidden="true"
                        className="h-12 w-12 shrink-0 rounded-md border border-border-default"
                        style={{ background: value }}
                      />
                      <div>
                        <p className="font-medium">{label}</p>
                        <code className="text-xs text-text-subtle">{value}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-2">
          <article className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
            <h2 className="text-2xl font-semibold">간격 스케일</h2>
            <div className="mt-6 flex flex-col gap-3">
              {spacingScale.map((token) => (
                <div key={token} className="flex items-center gap-4">
                  <code className="w-24 text-xs text-text-subtle">{`--space-${token}`}</code>
                  <div
                    aria-hidden="true"
                    className="h-4 rounded-full bg-primary"
                    style={{ width: `var(--space-${token})` }}
                  />
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
            <h2 className="text-2xl font-semibold">모서리 반경 스케일</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
              {radiusScale.map((token) => (
                <div
                  key={token}
                  className="rounded-card border border-border-default bg-bg-subtle p-4"
                >
                  <div
                    aria-hidden="true"
                    className="h-16 w-full border border-border-strong bg-primary-subtle"
                    style={{ borderRadius: `var(--radius-${token})` }}
                  />
                  <code className="mt-3 block text-xs text-text-subtle">{`--radius-${token}`}</code>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <h2 className="text-2xl font-semibold">시맨틱 사용 가이드</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              '컴포넌트는 원시 스케일보다는 시맨틱 토큰을 우선 사용해야 합니다.',
              '다크 모드는 data-theme를 기준으로 동작하고, 필요하면 prefers-color-scheme를 보조로 활용합니다.',
              '중요한 컨트롤은 44px 이상의 터치 타깃 기준을 고려합니다.',
              '모션 토큰은 상호작용 컴포넌트에서 reduced-motion 대응과 함께 사용합니다.',
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
  title: '기초/토큰',
  component: TokensPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    controls: { disable: true },
  },
} satisfies Meta<typeof TokensPage>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}
