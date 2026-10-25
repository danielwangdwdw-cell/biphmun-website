import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { externalLinks } from '@/lib/site'

export const metadata: Metadata = { title: 'Application' }

const applications = [
  {
    title: 'Individual Registration',
    description: 'For students attending as individual delegates.',
    href: externalLinks.individualRegistration,
  },
  {
    title: 'School Registration',
    description: 'For schools registering a delegation of students.',
    href: externalLinks.schoolRegistration,
  },
  {
    title: 'Chair Application',
    description: 'For experienced students applying to chair a committee.',
    href: externalLinks.chairApplication,
  },
  {
    title: 'Volunteer Registration',
    description: 'For BIPH students only.',
    href: externalLinks.volunteerRegistration,
  },
]

export default function ApplicationPage() {
  return (
    <main>
      <PageHeader title="Application" />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {applications.map((app) => {
            const available = app.href !== '#'
            const body = (
              <>
                <div className="flex items-start justify-between gap-6">
                  <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{app.title}</h2>
                  {available && (
                    <ArrowUpRight
                      className="size-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex items-end justify-between gap-6">
                  <p className="text-lg text-muted-foreground transition-colors group-hover:text-white/70 group-focus-visible:text-white/70">
                    {app.description}
                  </p>
                  <span
                    className={
                      available
                        ? 'shrink-0 bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-white group-hover:text-brand group-focus-visible:bg-white group-focus-visible:text-brand'
                        : 'shrink-0 border border-border px-5 py-2.5 text-sm font-semibold text-muted-foreground'
                    }
                  >
                    {available ? 'Open form' : 'Opening soon'}
                  </span>
                </div>
              </>
            )
            const cardClass =
              'group flex h-full flex-col justify-between gap-12 bg-muted p-8 md:min-h-72 md:p-10'
            return (
              <li key={app.title}>
                {available ? (
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} transition-colors hover:bg-brand hover:text-white focus-visible:bg-brand focus-visible:text-white focus-visible:outline-none`}
                  >
                    {body}
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}
