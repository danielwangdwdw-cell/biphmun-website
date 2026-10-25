export function PageHeader({ title }: { title: string }) {
  return (
    <section className="bg-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <h1 className="text-balance text-center text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          {title}
        </h1>
      </div>
    </section>
  )
}
