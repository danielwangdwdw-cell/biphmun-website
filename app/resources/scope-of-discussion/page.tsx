import type { Metadata } from 'next'
import { Check, X } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Scope of Discussion' }

const focus = [
  'Resolution drafting, debate, and points of procedure',
  'Academic reasoning, research, and logical argument',
]

const avoid = [
  'References to real-world political conflicts, current events, or religious groups that are not related to the committee topics',
  'Topics that could be seen as sensitive, provocative, or extreme',
  'Discussion that is unrelated to the educational goals of the conference',
]

export default function ScopeOfDiscussionPage() {
  return (
    <main>
      <PageHeader title="Scope of Discussion" />
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          <section aria-labelledby="focus-heading" className="bg-muted p-8 md:p-10">
            <h2 id="focus-heading" className="text-center text-3xl font-bold tracking-tight">
              Delegates should focus on
            </h2>
            <ul className="mt-8 flex flex-col gap-5">
              {focus.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-relaxed">
                  <Check className="mt-1 size-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="avoid-heading" className="bg-brand p-8 text-white md:p-10">
            <h2 id="avoid-heading" className="text-center text-3xl font-bold tracking-tight">
              Delegates should avoid
            </h2>
            <ul className="mt-8 flex flex-col gap-5">
              {avoid.map((item) => (
                <li key={item} className="flex gap-4 text-lg leading-relaxed">
                  <X className="mt-1 size-5 shrink-0 text-white/60" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-balance text-center text-xl leading-relaxed md:text-2xl">
          Delegates are encouraged to be creative in their simulations, as long as all discussion
          stays professional and academically focused.
        </p>
      </section>
    </main>
  )
}
