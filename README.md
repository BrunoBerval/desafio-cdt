<div align="center">

<h1>Desafio CDT</h1>

<p>Diretório de usuários desenvolvido como desafio técnico para a <strong>CDT Software</strong>.<br/>
Aplicação React que consome a API pública JSONPlaceholder, permitindo listar, buscar e visualizar detalhes de usuários.</p>

<br/>

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

</div>

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como Executar](#como-executar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Testes](#testes)
- [Histórico de Commits](#histórico-de-commits)

---

## Sobre o Projeto

Aplicação desenvolvida como parte do processo seletivo da CDT Software para a vaga de **Desenvolvedor Front-End Júnior**.

O objetivo foi construir um diretório de usuários consumindo a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), com foco em organização de código, componentização, tipagem TypeScript e qualidade de interface.

A identidade visual segue o guia de estilo corporativo da CDT Software, com paleta de cores, tipografia e componentes fiéis ao padrão da empresa.

---

## Funcionalidades

- ✅ Listagem de usuários via API pública
- ✅ Exibição de nome e e-mail em cards clicáveis
- ✅ Campo de busca para filtrar usuários pelo nome em tempo real
- ✅ Modal de detalhes com nome completo, e-mail, telefone, empresa e cidade
- ✅ Estado visual de carregamento (spinner animado)
- ✅ Estado visual de erro com mensagem descritiva
- ✅ Fechar modal com ESC, clique no backdrop ou botão X
- ✅ Layout responsivo — mobile, tablet e desktop
- ✅ Acessibilidade básica (aria-modal, aria-label, role="dialog", uso de `<button>` semântico)

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca principal de UI |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipagem estática |
| [Vite](https://vite.dev/) | 8 | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária com design tokens customizados |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Ícones Feather (Fi) |
| [Jest](https://jestjs.io/) | — | Test runner |
| [React Testing Library](https://testing-library.com/react) | — | Testes de componentes |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | — | API pública de usuários fake |

---

## Como Executar

> Pré-requisitos: **Node.js 20+** e **npm**

```bash
# 1. Clone o repositório
git clone https://github.com/BrunoBerval/desafio-cdt.git
cd desafio-cdt

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

### Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run test:unit` | Executa os testes unitários |
| `npm run test:integration` | Executa os testes de integração |
| `npm test` | Executa todos os testes |

---

## Estrutura de Pastas

```
desafio-cdt/
├── public/
├── src/
│   ├── services/          # Chamadas à API
│   │   └── users.ts
│   ├── types/             # Interfaces TypeScript (contrato da API)
│   │   └── user.ts
│   ├── hooks/             # Custom hooks
│   │   └── useUsers.ts
│   ├── components/        # Componentes React
│   │   ├── ErrorState/
│   │   ├── LoadingState/
│   │   ├── SearchBar/
│   │   ├── UserCard/
│   │   ├── UserDetailsModal/
│   │   └── UserList/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          # Tailwind v4 + design tokens da CDT
├── tests/
│   ├── unit/              # Testes unitários (componentes e hooks isolados)
│   │   ├── components/
│   │   └── hooks/
│   └── integration/       # Testes de integração (fluxos completos do usuário)
├── index.html
├── vite.config.ts
└── package.json
```

> **Por que `tests/` separado do `src/`?**
> Testes unitários e de integração têm responsabilidades distintas e são executados por scripts separados (`test:unit` e `test:integration`). Manter pastas separadas torna essa distinção explícita no repositório e evita ambiguidade sobre o propósito de cada arquivo de teste.

---

## Testes

### Unitários (`tests/unit/`)

Isolam uma única peça com tudo mockado. Exemplos:

- `UserCard` recebe props e renderiza nome e e-mail corretamente
- `SearchBar` chama o callback com o texto digitado
- `useUsers` retorna `loading: true` inicialmente e os dados após a resolução (fetch mockado)

### Integração (`tests/integration/`)

Montam vários componentes juntos e seguem o fluxo real do usuário. Exemplos:

- Renderiza a tela, digita no campo de busca e verifica que a lista filtra
- Clica em um card e verifica que o modal abre com os dados corretos
- Pressiona ESC e verifica que o modal fecha

---

## Histórico de Commits

O projeto foi desenvolvido com commits granulares para tornar a linha de raciocínio legível no histórico do repositório.

### Fase 1 — Núcleo Obrigatório

| # | Commit | Descrição |
|---|---|---|
| 1 | `chore: scaffold Vite + React ( TypeScript)` | Setup inicial do projeto com Vite, React 19 e TypeScript |
| 2 | `chore: configuração do Tailwind v4, paleta de cores e fonte Roboto alinhando o projeto ao estilo da empresa` | Fontes, cores definidos com base no site da empresa |
| 3 | `chore: instalado icones react para UI e add logo para favicon` | Modelo de icones inspirado no icones do site da empresa e logo retirado do site |
| 4 | `feat: add User types e service para fetching de usuários` | Interface usuários para estabelecer um contrato com os dados do endpoint e service que realiza o fetching para API |
| 5 | `feat: add useUsers hook com estados de erro e loading` | Hook responsável por buscar e gerenciar o estado da lista de usuários  |
| 6 | `feat: add componentes de estado de erro e loading, card de usuário e lista de cards com estilos em tailwind` | componentes UI (erro e loading) e componentes de Usuário (card e lista de cards) |
| 7 | `feat: add SearchBar com filtro pelo nome, add modal com detalhes do usuário` | Componente de filtragem e modal de detalhes  |
| 8 | `docs: add README com documentação` | Documentação do projeto e instruções de como rodar |

### Fase 2 — Diferenciais

| # | Commit | Descrição |
|---|---|---|
| 9 | `test: configuração do Jest + Testing Library para TS/Vite` | Configuração do Jest com ts-jest e jsdom para rodar em projeto Vite/TypeScript |
| 10 | `test: add testes unitários para components e hook` | Testes unitários de UserCard, SearchBar e useUsers |
| 11 | `test: add testes de integração para buscas e modal` | Testes de integração cobrindo busca e abertura de modal |
| 12 | `feat: UI/UX polish (debounce na busca, estado vazio, foco/teclado)` | Melhorias de experiência — debounce, estado vazio e navegação por teclado |
| 13 | `docs: documentação técnica README` | Documentação com decisões técnicas e do design system aplicado |

---

<div align="center">
  <sub>Desenvolvido por <a href="https://github.com/BrunoBerval">Bruno Berval</a></sub>
</div>