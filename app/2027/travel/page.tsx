import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Accommodation & Transportation' }

const hotels = [
  {
    name: 'Le Méridien Huizhou',
    description: 'A luxurious five-star hotel by the beach.',
    price: '¥1,300–1,500 per room per night',
  },
  {
    name: 'PLH Hotel Apartments',
    description:
      'Spacious apartment-style rooms with full kitchen facilities, ideal for longer stays.',
    price: '¥200–500 per room per night',
  },
  {
    name: 'Other Options',
    description:
      'There are several other good hotels in the area. You are welcome to book one yourself.',
    price: 'Various prices',
  },
]

export default function TravelPage() {
  return (
    <main>
      <PageHeader title="Accommodation & Transportation" />

      <section aria-labelledby="accommodation-heading" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h2
          id="accommodation-heading"
          className="text-center text-4xl font-bold tracking-tight md:text-6xl"
        >
          Accommodation
        </h2>
        <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-6">
          {hotels.map((hotel) => (
            <li key={hotel.name} className="flex flex-col justify-between gap-10 bg-muted p-8 md:p-10">
              <div>
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{hotel.name}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                  {hotel.description}
                </p>
              </div>
              <p className="text-lg font-semibold text-brand">{hotel.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="transportation-heading" className="bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <h2
            id="transportation-heading"
            className="text-4xl font-bold tracking-tight md:text-6xl"
          >
            Transportation
          </h2>
          <p className="mt-10 text-pretty text-xl leading-relaxed md:text-2xl">
            We will provide a shuttle bus between campus and the hotels listed above. We do{' '}
            <strong className="font-bold">not</strong> provide transportation between Shenzhen and
            campus. If you are staying somewhere not listed above, please arrange your own
            transportation.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            For more information, please ask your advisor to contact our advisor.
          </p>
        </div>
      </section>
    </main>
  )
}
