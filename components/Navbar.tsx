'use client'

import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#education', label: 'Formação' },
  { href: '#contact', label: 'Contato' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-lg tracking-tight"
          style={{ color: 'var(--fg)' }}
        >
          FR — Ramos
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[11px] font-medium tracking-[0.14em] uppercase transition-colors hover:text-accent"
              style={{ color: 'var(--fg-muted)' }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span
              className="block h-0.5 bg-current origin-center transition-transform duration-300"
              style={{ transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }}
            />
            <span
              className="block h-0.5 bg-current transition-opacity duration-300"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-0.5 bg-current origin-center transition-transform duration-300"
              style={{ transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: 'var(--bg)',
            borderTop: '1px solid var(--card-border)',
          }}
        >
          <nav className="flex flex-col px-6 py-4">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="py-3 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors hover:text-accent"
                style={{
                  color: 'var(--fg-muted)',
                  borderBottom: '1px solid var(--card-border)',
                }}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
