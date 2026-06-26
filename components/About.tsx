import { aboutStats } from '@/data/portfolio'

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">01 — Sobre mim</div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8 reveal">
              Do bisturi ao
              <br />
              terminal.
            </h2>

            <p className="text-base leading-relaxed mb-5 reveal reveal-delay-1" style={{ color: 'var(--fg-muted)' }}>
              Fui dentista e coordenador de pós-graduação por{' '}
              <strong style={{ color: 'var(--fg)' }}>11 anos</strong>. Aprendi a
              operar sob pressão, liderar equipes e entregar resultados que
              importam. Hoje aplico essa mesma mentalidade no desenvolvimento de
              software.
            </p>

            <p className="text-base leading-relaxed mb-8 reveal reveal-delay-2" style={{ color: 'var(--fg-muted)' }}>
              A transição não foi um desvio de rota — foi uma{' '}
              <strong style={{ color: 'var(--fg)' }}>evolução deliberada</strong>.
              Cada linha de código que escrevo carrega a precisão e o cuidado
              que a odontologia me ensinou.
            </p>

            <div
              className="inline-flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium reveal reveal-delay-3"
              style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
            >
              <span>🏆</span>
              3º Lugar — FICTHON 2K23 · Senac/PR
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 reveal reveal-delay-1">
            {aboutStats.map(({ value, label }) => (
              <div
                key={value}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{value}</div>
                <div className="text-sm leading-snug" style={{ color: 'var(--fg-muted)' }}>
                  {label.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
