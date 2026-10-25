import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'

export const metadata: Metadata = { title: 'Conference Theme' }

export default function ThemePage() {
  return (
    <main>
      <PageHeader title="Conference Theme" />
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          To be announced
        </h2>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">TBD</p>
      </section>
    </main>
  )
}
