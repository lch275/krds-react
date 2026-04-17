import type { ReactNode } from 'react'
import { Heading } from '@/index'

type SectionProps = {
  title: string
  children: ReactNode
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <Heading as="h2" className="border-b border-border-default pb-2 text-2xl font-bold">
        {title}
      </Heading>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export { Section }
