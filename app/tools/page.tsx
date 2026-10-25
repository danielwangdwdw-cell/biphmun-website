import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ResolutionFormatter } from '@/components/tools/resolution-formatter'
import { VoteCounter } from '@/components/tools/vote-counter'

export const metadata: Metadata = { title: 'Tools' }

const tools = [
  { id: 'resolution-formatter', title: 'Resolution Formatter', Component: ResolutionFormatter },
  { id: 'vote-counter', title: 'Vote Counter', Component: VoteCounter },
]

export default function ToolsPage() {
  return (
    <main>
      <PageHeader title="Tools" />
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-20 md:py-28">
        {tools.map(({ id, title, Component }) => (
          <section
            key={id}
            id={id}
            aria-labelledby={`${id}-heading`}
            className="scroll-mt-24 bg-muted p-6 md:p-12"
          >
            <h2
              id={`${id}-heading`}
              className="mb-8 text-center text-4xl font-bold tracking-tight md:text-5xl"
            >
              {title}
            </h2>
            <Component />
          </section>
        ))}
      </div>
    </main>
  )
}
