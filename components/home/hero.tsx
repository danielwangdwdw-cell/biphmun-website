export function Hero() {
  return (
    <section className="flex h-[calc(100svh-4rem)] min-h-[16rem] flex-col justify-center bg-brand p-4 text-white md:p-6">
      <h1 className="h-[calc(70svh-6rem)] min-h-[12rem] w-full md:h-[calc(70svh-7rem)]">

        <span className="sr-only">BIPHMUN</span>
        {/* viewBox height matches the cap height so the stretched letters fill the frame edge to edge */}
        <svg
          viewBox="0 0 1000 166"
          preserveAspectRatio="none"
          className="block h-full w-full"
          aria-hidden="true"
        >
          <text
            x="0"
            y="166"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            fontWeight="800"
            fontSize="232"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            BIPHMUN
          </text>
        </svg>
      </h1>
    </section>
  )
}
