import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Schedule' }

const days = [
  {
    day: 'Friday',
    events: [
      ['15:30–16:20', 'Delegate Registration'],
      ['16:30–16:50', 'Committee Orientation'],
      ['17:00–17:50', 'Opening Ceremony'],
      ['18:00–19:00', 'Dinner'],
      ['19:00–20:00', 'Session One'],
      ['20:00–21:00', 'Session Two'],
    ],
  },
  {
    day: 'Saturday',
    events: [
      ['9:00–10:00', 'Session Three'],
      ['10:00', 'Approval Panel Opens'],
      ['10:00–11:00', 'Session Four'],
      ['11:00–12:00', 'Session Five'],
      ['12:00–13:00', 'Lunch'],
      ['13:00–14:00', 'Session Six'],
      ['14:00–15:00', 'Session Seven'],
      ['15:00–15:30', 'Snack Break'],
      ['15:30–16:30', 'Session Eight'],
      ['16:30–17:30', 'Session Nine'],
      ['17:30–18:30', 'Dinner'],
    ],
  },
  {
    day: 'Sunday',
    events: [
      ['9:00–10:00', 'Session Ten'],
      ['10:00–11:00', 'Session Eleven'],
      ['11:00–12:00', 'Session Twelve'],
      ['12:00–13:00', 'Lunch'],
      ['13:00–14:00', 'Group Photos'],
      ['14:00–14:50', 'Closing Ceremony'],
    ],
  },
]

export default function SchedulePage() {
  return (
    <main>
      <PageHeader title="Schedule" />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-3">
          {days.map(({ day, events }) => (
            <section key={day} aria-labelledby={`${day}-heading`} className="bg-muted p-8">
              <h2 id={`${day}-heading`} className="text-center text-3xl font-bold tracking-tight">
                {day}
              </h2>
              <table className="mt-8 w-full text-left">
                <caption className="sr-only">{`${day} schedule`}</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map(([time, event]) => (
                    <tr key={`${time}-${event}`} className="border-t border-border">
                      <td className="whitespace-nowrap py-3 pr-4 align-top text-sm font-medium tabular-nums text-muted-foreground">
                        {time}
                      </td>
                      <td className="py-3 text-base font-semibold">{event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
