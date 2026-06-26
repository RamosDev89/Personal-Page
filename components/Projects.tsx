'use client'

import { useState, useEffect } from 'react'
import { featuredProject, personalInfo } from '@/data/portfolio'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  has_pages: boolean
  languages_url: string
  owner: { login: string }
}

interface ProjectCard {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  languages: string[]
  isFeatured: boolean
  badge?: string
}

const LANG_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  Shell: '#89e051',
}

function getLangColor(lang: string): string {
  return LANG_COLORS[lang] ?? '#00e5ff'
}

function ProjectSkeleton() {
  return (
    <div
      className="p-6 rounded-2xl animate-pulse"
      style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
    >
      <div className="h-5 rounded-md mb-3 w-3/4" style={{ backgroundColor: 'var(--card-border)' }} />
      <div className="h-4 rounded-md mb-2 w-full" style={{ backgroundColor: 'var(--card-border)' }} />
      <div className="h-4 rounded-md mb-5 w-2/3" style={{ backgroundColor: 'var(--card-border)' }} />
      <div className="flex gap-2">
        <div className="h-5 w-16 rounded-full" style={{ backgroundColor: 'var(--card-border)' }} />
        <div className="h-5 w-20 rounded-full" style={{ backgroundColor: 'var(--card-border)' }} />
      </div>
    </div>
  )
}

export function Projects() {
  const [projects, setProjects] = useState<ProjectCard[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=12`
        )
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const repos: GitHubRepo[] = await res.json()

        const filtered = repos.filter((r) => r.name !== 'Personal-Page')

        const withLangs = await Promise.all(
          filtered.map(async (repo) => {
            try {
              const langRes = await fetch(repo.languages_url)
              const langData: Record<string, number> = langRes.ok
                ? await langRes.json()
                : {}
              const languages = Object.keys(langData).slice(0, 4)

              const isFeatured = repo.name === featuredProject.name

              return {
                id: repo.id,
                name: repo.name,
                description: isFeatured
                  ? featuredProject.customDescription
                  : (repo.description ?? ''),
                html_url: repo.html_url,
                homepage: repo.homepage,
                languages,
                isFeatured,
                badge: isFeatured ? featuredProject.badge : undefined,
              } satisfies ProjectCard
            } catch {
              return {
                id: repo.id,
                name: repo.name,
                description: repo.description ?? '',
                html_url: repo.html_url,
                homepage: repo.homepage,
                languages: [],
                isFeatured: repo.name === featuredProject.name,
                badge: repo.name === featuredProject.name ? featuredProject.badge : undefined,
              } satisfies ProjectCard
            }
          })
        )

        const sorted = [
          ...withLangs.filter((p) => p.isFeatured),
          ...withLangs.filter((p) => !p.isFeatured),
        ]

        setProjects(sorted)
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-label">03 — Projetos</div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-14 reveal">
          Portfólio de
          <br />
          projetos.
        </h2>

        {error && (
          <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
            Não foi possível carregar os projetos. Veja em{' '}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              github.com/RamosDev89
            </a>
            .
          </p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)
            : projects.map((project) => (
                <article
                  key={project.id}
                  className="p-6 rounded-2xl flex flex-col gap-4 transition-colors group"
                  style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--card-border)' }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-base leading-tight break-all" style={{ color: 'var(--fg)' }}>
                      {project.name}
                    </h3>
                    {project.badge && (
                      <span className="shrink-0 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-accent/15 text-accent">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {project.description && (
                    <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--fg-muted)' }}>
                      {project.description}
                    </p>
                  )}

                  {project.languages.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {project.languages.map((lang) => (
                        <span
                          key={lang}
                          className="flex items-center gap-1.5 text-xs"
                          style={{ color: 'var(--fg-muted)' }}
                        >
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: getLangColor(lang) }}
                          />
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 pt-1">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-accent text-[#080808] hover:bg-accent2 transition-colors"
                    >
                      Repositório
                    </a>
                    {project.homepage && project.homepage.trim() !== '' && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg text-xs font-semibold transition-colors hover:bg-accent/10"
                        style={{ border: '1px solid var(--card-border)', color: 'var(--fg)' }}
                      >
                        Visitar site
                      </a>
                    )}
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  )
}
