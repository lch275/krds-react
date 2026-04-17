import type { Meta, StoryObj } from '@storybook/react'

function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-bg-subtle px-6 py-10 text-text-default">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="rounded-dialog border border-border-default bg-bg-default p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
            Foundations
          </p>
          <h1 className="mt-3 text-4xl font-bold">Getting Started</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-text-subtle">
            This design system organizes KRDS-inspired components into a stable
            React API with accessibility, predictable semantics, and reusable
            composition as the baseline.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: '1. Install',
              body: 'Use npm install, then run the Vite app or Storybook to inspect components in isolation.',
            },
            {
              title: '2. Import',
              body: 'Consume components from the package entrypoint so category-level exports stay stable over time.',
            },
            {
              title: '3. Verify',
              body: 'Every component addition should include stories, tests, and a demo update when it changes showcase coverage.',
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
          <h2 className="text-2xl font-semibold">Category map</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Primitives', 'Box, Text, Heading'],
              ['UI', 'Button, Alert, Badge, Link, SearchBar, inputs'],
              ['Data', 'Table'],
              ['Identity', 'Masthead, Identifier'],
              ['Navigation', 'Breadcrumb, Pagination, menus, step flows'],
              ['Feedback', 'Toast, Snackbar, loading and empty states'],
              ['Help', 'Tooltip, ContextualHelp'],
              ['Layout', 'Header, Footer'],
              ['Overlays', 'Dialog, Tabs, Accordion, BottomSheet'],
              ['Patterns', 'Consent, filtering, result summaries and lists'],
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
          <h2 className="text-2xl font-semibold">Workflow</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              'Implement the component in the appropriate category directory.',
              'Export it from the category barrel and from src/index.ts.',
              'Add a Storybook story that documents states and intended usage.',
              'Add Vitest coverage for semantics, interaction, and accessibility.',
              'Reflect meaningful additions in the demo showcase when needed.',
              'Run lint and test:run before closing the change.',
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
  title: 'Foundations/Getting Started',
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
