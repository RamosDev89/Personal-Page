export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="px-6 py-8"
      style={{ borderTop: '1px solid var(--card-border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm" style={{ color: 'var(--fg-muted)' }}>
        <span>© {year} Fernando Rafael Ramos. Todos os direitos reservados.</span>
        <span>Curitiba, PR — Brasil</span>
      </div>
    </footer>
  )
}
