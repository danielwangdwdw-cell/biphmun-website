import type { Metadata } from 'next'
import { User } from 'lucide-react'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Leadership Team' }

const team = [
  { role: 'Secretary-General', name: 'Daniel Wang' },
  { role: 'Deputy Secretary-General', name: 'Marilyn Jiang' },
  { role: 'Deputy Secretary-General', name: 'Megan Chang' },
  { role: 'Deputy Secretary-General', name: 'Teresa Jiang' },
  { role: 'Advisor', name: 'Mr. Robert March' },
]

export default function LeadershipPage() {
  return (
    <main>
      <PageHeader title="Leadership Team" />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-12">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex w-full flex-col sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <div className="flex aspect-[4/5] items-center justify-center bg-muted">
                <User className="size-16 text-muted-foreground/40" aria-hidden="true" />
                <span className="sr-only">Photo to be added</span>
              </div>
              <p className="mt-6 text-sm font-semibold text-muted-foreground">{member.role}</p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight">{member.name}</h2>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
