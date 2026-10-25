import { cn } from '@/lib/utils'

const conferences = [
  {
    year: 2022,
    theme: 'Remembering the Forgotten: Addressing the Neglected Crises in a Re-emerging World',
  },
  {
    year: 2023,
    theme: 'Crises on the Margins: Addressing the Unacknowledged Issues in a Troubled World',
  },
  {
    year: 2024,
    theme: 'Sustainability and Privilege: Interconnected Strife in the Age of Digital Diplomacy',
  },
  {
    year: 2025,
    theme: 'Innovations and Conflicts: A Trek in Balancing Power, Responsibility, and Ethics',
  },
  {
    year: 2026,
    theme: 'Confronting Contemporary Challenges: Climate, Crypto, Commerce, Conflict',
  },
  { year: 2027, theme: 'TBD', upcoming: true },
]

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <h2
          id="timeline-heading"
          className="text-center text-5xl font-bold tracking-tight md:text-7xl"
        >
          Timeline
        </h2>

        <ol className="relative mt-16 flex flex-col gap-14 md:mt-24 md:gap-20">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[7px] top-0 w-0.5 bg-brand/20 md:left-1/2 md:-translate-x-1/2"
          />
          {conferences.map((conference, index) => {
            const right = index % 2 === 1
            return (
              <li key={conference.year} className="relative pl-12 md:grid md:grid-cols-2 md:pl-0">
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-0 top-3 size-4 md:left-1/2 md:-translate-x-1/2',
                    conference.upcoming ? 'border-2 border-brand bg-muted' : 'bg-brand',
                  )}
                />
                <div
                  className={cn(
                    right ? 'md:col-start-2 md:pl-16' : 'md:col-start-1 md:pr-16 md:text-right',
                  )}
                >
                  <h3 className="text-4xl font-bold tracking-tight text-brand md:text-6xl">
                    {conference.year}
                  </h3>
                  <p className="mt-3 text-pretty text-lg leading-snug md:text-2xl">
                    {conference.theme}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
