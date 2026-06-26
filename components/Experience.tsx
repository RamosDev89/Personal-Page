import { experience } from '@/data/portfolio'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-28 px-6"
      style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-label">04 — Trajetória</div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14 reveal">
          Cada fase
          <br />
          foi escola.
        </h2>

        <div className="relative">
          <div
            className="absolute left-0 md:left-[140px] top-0 bottom-0 w-px"
            style={{ backgroundColor: 'var(--card-border)' }}
          />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <div
                key={item.role}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-10 reveal reveal-delay-${Math.min(i, 3) as 0 | 1 | 2 | 3}`}
              >
                <div
                  className="absolute left-0 md:left-[140px] top-2 w-2.5 h-2.5 rounded-full border-2 border-accent bg-accent z-10"
                  style={{ transform: 'translateX(-50%)' }}
                />

                <div
                  className="md:w-[140px] shrink-0 text-sm font-medium pl-6 md:pl-0 md:text-right"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {item.period}
                </div>

                <div className="pl-6 md:pl-10 pb-2">
                  <div className="font-semibold text-base mb-1" style={{ color: 'var(--fg)' }}>
                    {item.role}
                  </div>
                  <div className="text-sm text-accent mb-3">{item.company}</div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
