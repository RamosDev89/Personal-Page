# Fernando Rafael Ramos — Personal Page

Portfolio pessoal em [ramosfrdev.com.br](https://www.ramosfrdev.com.br).

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **next-themes** (dark/light mode)
- Deploy via **GitHub Pages** (`output: 'export'`)

## Estrutura de pastas

```
├── app/
│   ├── layout.tsx       # Root layout, fontes, metadata
│   ├── page.tsx         # Página principal (composição das seções)
│   └── globals.css      # CSS global, variáveis de tema, Tailwind
├── components/
│   ├── Providers.tsx    # ThemeProvider wrapper (client)
│   ├── RevealObserver.tsx # IntersectionObserver para animações (client)
│   ├── Navbar.tsx       # Nav fixa com hamburger e toggle de tema
│   ├── ThemeToggle.tsx  # Botão dark/light
│   ├── Hero.tsx         # Seção hero com foto
│   ├── Marquee.tsx      # Faixa de skills em loop
│   ├── About.tsx        # Sobre + stats
│   ├── Skills.tsx       # Skills por categoria
│   ├── Projects.tsx     # Projetos via GitHub API (client)
│   ├── Experience.tsx   # Timeline de experiência
│   ├── Education.tsx    # Cards de formação
│   ├── Contact.tsx      # Seção de contato
│   └── Footer.tsx       # Rodapé
├── data/
│   └── portfolio.ts     # Todos os dados do portfólio centralizados
├── public/
│   ├── CNAME            # Domínio customizado para GitHub Pages
│   └── img/             # Foto de perfil
├── next.config.ts       # output: 'export', images unoptimized
├── tailwind.config.ts   # darkMode: 'class', tema estendido
└── tsconfig.json        # strict: true
```

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
# Gera a pasta /out com o site estático
```

## Deploy

O deploy é automático via GitHub Actions (`.github/workflows/deploy.yml`) ao fazer push na branch `developer`. O workflow builda o projeto e publica o conteúdo de `/out` no GitHub Pages.

**Pré-requisito:** nas configurações do repositório (Settings → Pages), selecione a source como **GitHub Actions**.

## Atualizar conteúdo

Todo o conteúdo do portfólio está centralizado em `data/portfolio.ts`. Projetos são carregados dinamicamente via GitHub API.

## Contato

LinkedIn: https://www.linkedin.com/in/fernandorramos/
