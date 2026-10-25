import { GroupPhoto } from '@/components/home/group-photo'
import { Hero } from '@/components/home/hero'
import { Introduction } from '@/components/home/introduction'
import { Timeline } from '@/components/home/timeline'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Timeline />
      <GroupPhoto />
    </main>
  )
}
