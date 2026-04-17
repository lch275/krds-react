import type { Meta, StoryObj } from '@storybook/react'

const colorGroups = [
  {
    title: 'Brand',
    items: [
      ['Primary', 'var(--color-primary)'],
      ['Primary hover', 'var(--color-primary-hover)'],
      ['Primary active', 'var(--color-primary-active)'],
      ['Primary subtle', 'var(--color-primary-subtle)'],
    ],
  },
  {
    title: 'Text',
    items: [
      ['Default', 'var(--color-text-default)'],
      ['Subtle', 'var(--color-text-subtle)'],
      ['Muted', 'var(--color-text-muted)'],
      ['Inverse', 'var(--color-text-inverse)'],
    ],
  },
  {
    title: 'Surface',
    items: [
      ['Default background', 'var(--color-bg-default)'],
      ['Subtle background', 'var(--color-bg-subtle)'],
      ['Muted background', 'var(--color-bg-muted)'],
      ['Default border', 'var(--color-border-default)'],
    ],
  },
  {
    title: 'Status',
    items: [
      ['Info', 'var(--color-status-info)'],
      ['Success', 'var(--color-status-success)'],
      ['Warning', 'var(--color-status-warning)'],
      ['Error', 'var(--color-status-error)'],
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
            Foundations
          </p>
          <h1 className="mt-3 text-4xl font-bold">Design Tokens</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-subtle">
            Raw tokens define base scales. Semantic tokens map those scales into
            component-facing values such as surface, text, border, status, and
            motion primitives.
          </p>
        </header>

        <section className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <h2 className="text-2xl font-semibold">Color tokens</h2>
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
            <h2 className="text-2xl font-semibold">Spacing scale</h2>
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
            <h2 className="text-2xl font-semibold">Radius scale</h2>
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
          <h2 className="text-2xl font-semibold">Semantic guidance</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              'Components should consume semantic tokens first and avoid binding directly to raw scales.',
              'Dark mode is driven by data-theme and mirrored by prefers-color-scheme fallback.',
              'Touch targets should respect the 44px minimum interaction size for critical controls.',
              'Motion tokens should be paired with reduced-motion fallbacks in interactive components.',
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
  title: 'Foundations/Tokens',
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
