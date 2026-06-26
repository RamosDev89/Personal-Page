import Image from 'next/image'
import { personalInfo } from '@/data/portfolio'

export function Hero() {
  return (
    <section className="h-screen grid md:grid-cols-2 overflow-hidden relative">
      {/* Left */}
      <div className="flex flex-col justify-end px-6 md:px-12 pb-20 pt-24 z-10 relative">
        <div
          className="text-xs font-semibold tracking-[0.15em] uppercase mb-8"
          style={{ color: 'var(--section-label)' }}
        >
          Desenvolvedor Full Stack · Curitiba, PR
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
          Fernando
          <br />
          <span className="text-accent">Rafael</span>
          <br />
          Ramos
        </h1>

        <p
          className="text-lg max-w-md mb-10 leading-relaxed"
          style={{ color: 'var(--fg-muted)' }}
        >
          De 11 anos resolvendo problemas complexos na saúde para construir
          soluções web escaláveis. JavaScript, Node.js, React — e muita
          resiliência.
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="mailto:ramosvst89@gmail.com"
            className="px-6 py-3 bg-accent text-[#080808] rounded-lg text-sm font-semibold hover:bg-accent2 transition-colors"
          >
            Entrar em contato →
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg text-sm font-semibold transition-colors hover:bg-accent/10"
            style={{
              border: '1px solid var(--card-border)',
              color: 'var(--fg)',
            }}
          >
            Ver projetos
          </a>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            GitHub
          </a>
          <span style={{ color: 'var(--card-border)' }}>|</span>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            LinkedIn
          </a>
          <span style={{ color: 'var(--card-border)' }}>|</span>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-sm transition-colors hover:text-accent"
            style={{ color: 'var(--fg-muted)' }}
          >
            Email
          </a>
        </div>
      </div>

      {/* Right — full-height photo, desktop only */}
      <div className="hidden md:block relative overflow-hidden">
        <Image
          src={personalInfo.profilePhoto}
          alt="Fernando Rafael Ramos"
          fill
          className="object-cover object-top"
          priority
          sizes="50vw"
        />
        {/* gradient fades photo into background on left and bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, var(--bg) 0%, transparent 30%), linear-gradient(to top, var(--bg) 0%, transparent 25%)',
          }}
        />
      </div>

      {/* Mobile: photo as bottom strip */}
      <div
        className="md:hidden absolute inset-x-0 bottom-0 h-[45%] opacity-30"
        aria-hidden="true"
      >
        <Image
          src={personalInfo.profilePhoto}
          alt=""
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--bg) 0%, transparent 40%), linear-gradient(to top, var(--bg) 0%, transparent 30%)',
          }}
        />
      </div>
    </section>
  )
}
