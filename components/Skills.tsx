import { skills } from '@/data/portfolio'

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-label">02 — Habilidades técnicas</div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14 reveal">
          Stack em
          <br />
          construção.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className={`p-6 rounded-2xl reveal reveal-delay-${Math.min(i, 3) as 0 | 1 | 2 | 3}`}
              style={{ backgroundColor: 'var(--bg)', border: '1px solid var(--card-border)' }}
            >
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'var(--card-bg)', color: 'var(--fg)', border: '1px solid var(--card-border)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
