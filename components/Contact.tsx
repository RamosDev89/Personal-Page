import { personalInfo } from '@/data/portfolio'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="section-label">06 — Contato</div>

        <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-12 reveal">
          Vamos
          <br />
          <em className="not-italic text-accent">conversar?</em>
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10 reveal reveal-delay-1">
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm font-medium transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            {personalInfo.email}
          </a>
          <span className="hidden sm:inline" style={{ color: 'var(--card-border)' }}>
            /
          </span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            LinkedIn
          </a>
          <span className="hidden sm:inline" style={{ color: 'var(--card-border)' }}>
            /
          </span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            GitHub
          </a>
          <span className="hidden sm:inline" style={{ color: 'var(--card-border)' }}>
            /
          </span>
          <span className="text-sm font-medium" style={{ color: 'var(--fg-muted)' }}>
            {personalInfo.location}
          </span>
        </div>

        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#080808] rounded-xl font-semibold text-sm hover:bg-accent2 transition-colors reveal reveal-delay-2"
        >
          Enviar mensagem →
        </a>
      </div>
    </section>
  )
}
