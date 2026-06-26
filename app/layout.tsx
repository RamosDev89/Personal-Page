import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/Providers'
import { RevealObserver } from '@/components/RevealObserver'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Fernando Rafael Ramos — Desenvolvedor Full Stack',
  description:
    'Portfólio de Fernando Rafael Ramos, Desenvolvedor Full Stack baseado em Curitiba, PR. React, Next.js, TypeScript, Node.js.',
  keywords: [
    'desenvolvedor full stack',
    'react',
    'next.js',
    'typescript',
    'curitiba',
    'fernando ramos',
  ],
  openGraph: {
    title: 'Fernando Rafael Ramos — Desenvolvedor Full Stack',
    description:
      'De 11 anos resolvendo problemas complexos na saúde para construir soluções web escaláveis.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={inter.variable}>
      <body>
        <Providers>
          {children}
          <RevealObserver />
        </Providers>
      </body>
    </html>
  )
}
