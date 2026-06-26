import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">05 — Formação</div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14 reveal">
          Aprendizado
          <br />
          contínuo.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((item, i) => (
            <div
              key={item.degree}
              className={`p-7 rounded-2xl reveal reveal-delay-${i as 0 | 1 | 2}`}
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="text-xs font-medium"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  {item.period}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                    item.status === 'Em andamento'
                      ? 'bg-accent/15 text-accent'
                      : 'bg-emerald-500/15 text-emerald-500'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <div className="font-semibold text-base leading-snug mb-2" style={{ color: 'var(--fg)' }}>
                {item.degree}
              </div>

              <div className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                {item.institution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
