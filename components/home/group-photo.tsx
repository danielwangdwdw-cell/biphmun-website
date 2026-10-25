import Image from 'next/image'

export function GroupPhoto() {
  return (
    <section aria-label="BIPHMUN 2026 group photo" className="bg-muted">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-36">
        <Image
          src="/images/group-2026.jpg"
          alt="Delegates, chairs, and staff of BIPHMUN 2026 in front of the conference banner"
          width={2576}
          height={1368}
          className="h-auto w-full"
          sizes="(min-width: 1280px) 1232px, 100vw"
        />
      </div>
    </section>
  )
}
