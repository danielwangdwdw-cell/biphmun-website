import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Conference Committees' }

type Committee = {
  name: string
  short: string
  tag?: string
  topics: string[]
}

const committees: Committee[] = [
  {
    name: 'World Health Assembly',
    short: 'WHA',
    tag: 'Crisis Committee',
    topics: ['Resolving the Global Marburg Outbreak'],
  },
  { name: 'Security Council', short: 'SC', topics: ['To be announced', 'To be announced'] },
  {
    name: 'Economic and Social Council',
    short: 'ECOSOC',
    topics: ['To be announced', 'To be announced'],
  },
  {
    name: 'United Nations Environment Programme',
    short: 'UNEP',
    topics: ['To be announced', 'To be announced'],
  },
  { name: 'Human Rights Council', short: 'HRC', topics: ['To be announced', 'To be announced'] },
  { name: 'General Assembly', short: 'GA', topics: ['To be announced', 'To be announced'] },
]

export default function CommitteesPage() {
  return (
    <main>
      <PageHeader title="Conference Committees" />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {committees.map((committee) => {
            return (
              <li
                key={committee.short}
                className="bg-muted p-8 md:p-10"
              >
                <p
                  className="text-4xl font-bold tracking-tight md:text-5xl"
                >
                  {committee.short}
                </p>
                <h2
                  className="mt-2 text-lg font-medium text-muted-foreground"
                >
                  {committee.name}
                </h2>
                {committee.tag && (
                  <p className="mt-4 inline-block bg-brand px-3 py-1 text-base font-bold uppercase tracking-wide text-white md:text-lg">
                    {committee.tag}
                  </p>
                )}
                <dl className="mt-10 flex flex-col gap-5">

                  {committee.topics.map((topic, i) => (
                    <div key={i}>
                      <dt
                        className="text-sm font-semibold text-muted-foreground"
                      >
                        {committee.topics.length > 1
                          ? `Topic ${String.fromCharCode(65 + i)}`
                          : 'Topic'}
                      </dt>
                      <dd className="mt-1 text-xl font-semibold leading-snug md:text-2xl">
                        {topic}
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
