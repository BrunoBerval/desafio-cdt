<div align="center">

<h1>Desafio CDT</h1>

<p>Diretório de usuários desenvolvido como desafio técnico para a <strong>CDT Software</strong>.<br/>
Aplicação React que consome a API pública JSONPlaceholder, permitindo listar, buscar e visualizar detalhes de usuários.</p>

<br/>

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)

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
- [Decisões Técnicas](#decisões-técnicas)
- [Design System](#design-system)

---

## Sobre o Projeto

Aplicação desenvolvida como parte do processo seletivo da CDT Software para a vaga de **Desenvolvedor Júnior**.

O objetivo foi construir um diretório de usuários consumindo a [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), com foco em organização de código, componentização, tipagem TypeScript e qualidade de interface.

A identidade visual segue o estilo corporativo da CDT Software, com paleta de cores, tipografia e componentes similares aos encontrados na página da empresa.

---

## Funcionalidades

### Núcleo obrigatório
- ✅ Listagem de usuários via API pública
- ✅ Exibição de nome, username e e-mail em cards clicáveis
- ✅ Campo de busca para filtrar usuários pelo nome em tempo real
- ✅ Modal de detalhes com nome completo, e-mail, telefone, empresa e endereço
- ✅ Estado visual de carregamento (spinner animado)
- ✅ Estado visual de erro com mensagem descritiva

### Diferenciais implementados
- ✅ Navbar com logo CDT e sessão de usuário simulada (role admin + dropdown de logout)
- ✅ Alternância de visualização: grade de cards ou lista compacta de linhas
- ✅ Modal de detalhes expandido: endereço completo, website clicável, toggle de informações da empresa (slogan e ramo) e botão "Ver no mapa"
- ✅ Mapa via OpenStreetMap em modal dedicado — gratuito, sem API key, usando coordenadas da API
- ✅ Botões de CRUD (Editar/Excluir) e paginação com `NotExistModal` para funcionalidades futuras
- ✅ Acessibilidade: `aria-modal`, `aria-label`, `role="dialog"`, navegação por teclado (ESC fecha modal camada por camada)
- ✅ Layout responsivo mobile-first em todos os componentes
- ✅ Testes unitários e de integração com Jest + React Testing Library

---

## Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca principal de UI |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipagem estática |
| [Vite](https://vite.dev/) | 8 | Bundler e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilização utilitária com design tokens customizados |
| [react-icons](https://react-icons.github.io/react-icons/) | 5 | Ícones Feather (Fi) |
| [Jest](https://jestjs.io/) | 30 | Test runner |
| [React Testing Library](https://testing-library.com/react) | 16 | Testes de componentes |
| [ts-jest](https://kulshekhar.github.io/ts-jest/) | 29 | Transformador TypeScript para o Jest |
| [OpenStreetMap](https://www.openstreetmap.org/) | — | Mapas via iframe (sem API key) |
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
| `npm run test:unit` | Executa apenas os testes unitários |
| `npm run test:integration` | Executa apenas os testes de integração |
| `npm test` | Executa todos os testes |

---

## Estrutura de Pastas

```
desafio-cdt/
├── public/
│   ├── logo-cdt.png
│   └── logo-cdt-para-fundo-escuro.png
├── src/
│   ├── services/               # Chamadas à API
│   │   └── users.ts
│   ├── types/                  # Interfaces TypeScript (contrato completo da API)
│   │   └── user.ts
│   ├── hooks/                  # Custom hooks
│   │   └── useUsers.ts
│   ├── components/             # Componentes React
│   │   ├── shared/            
│   │   │   ├── Navbar.tsx
│   │   │   ├── NotExistModal.tsx
│   │   │   └── Pagination.tsx
│   │   ├── users/
│   │   │   ├── UserCard.tsx
│   │   │   ├── UserList.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── UserDetailsModal.tsx
│   │   │   ├── UserRow.tsx
│   │   │   └── MapModal.tsx
│   │   ├── ui-states/
│   │   │   ├── ErrorState.tsx
│   │   │   └── LoadingState.tsx 
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css               # Tailwind v4 + design tokens CDT
├── tests/
│   ├── tsconfig.json           # tsconfig local para o VS Code reconhecer tipos do Jest
│   ├── setup.ts                # Configura @testing-library/jest-dom globalmente
│   ├── unit/                   # Testes unitários — isolam um único componente ou hook
│   │   ├── components/
│   │   │   ├── UserCard.test.tsx
│   │   │   ├── UserRow.test.tsx
│   │   │   └── SearchBar.test.tsx
│   │   └── hooks/
│   │       └── useUsers.test.tsx
│   └── integration/            # Testes de integração — simulam fluxos reais do usuário
│       └── App.test.tsx
├── tsconfig.app.json           # Configuração TypeScript para o Vite (produção)
├── tsconfig.test.json          # Configuração TypeScript para o Jest (commonjs, sem verbatimModuleSyntax)
├── jest.config.cjs             # Configuração do Jest com projetos unit e integration separados
├── index.html
├── vite.config.ts
└── package.json
```

---

## Testes

### Por que Jest em vez de Vitest?

O Vite tem suporte nativo ao Vitest (zero-config). A escolha do Jest foi intencional — demonstrar domínio de configuração manual em um ambiente que exige atenção a detalhes como o conflito entre `"type": "module"` do `package.json` e o modo CommonJS do Jest, a incompatibilidade do `verbatimModuleSyntax: true` do TypeScript 6 com o ts-jest, e a necessidade de um `tsconfig.test.json` separado para resolver esses conflitos sem afetar o build de produção.

### Unitários (`tests/unit/`)

Isolam uma única peça com tudo mockado. Cobrem:

- `UserCard` — renderiza nome, username e e-mail; dispara onClick ao clicar
- `UserRow` — renderiza nome e username; dispara onClick ao clicar
- `SearchBar` — exibe value recebido via prop; chama onChange com o texto digitado
- `useUsers` — retorna `loading: true` no render inicial; retorna dados após fetch resolvido; retorna mensagem de erro após fetch rejeitado

### Integração (`tests/integration/`)

Montam vários componentes juntos e seguem o fluxo real do usuário. Cobrem:

- Exibe estado de loading e depois renderiza a lista
- Filtra a lista ao digitar no campo de busca
- Abre o modal com dados completos ao clicar em um card
- Fecha o modal ao clicar no botão X
- Fecha o modal ao pressionar ESC
- Exibe o estado de erro quando a API falha

### Separação unit/integration

Os scripts `test:unit` e `test:integration` são distintos por design — unitários e de integração têm responsabilidades diferentes e precisam de ambientes de execução separados em projetos reais. O `jest.config.cjs` usa `projects` para refletir essa separação no próprio runner.

---

## Fluxo de Desenvolvimento

### Fase 1 — Parte Obrigatória

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
| 9 | `test: configuração do Jest + Testing Library para TS/Vite` | Jest 30 + ts-jest + jsdom com `tsconfig.test.json` dedicado para resolver conflitos com Vite/TS6 |
| 10 | `test: add testes unitários para components e hook` | Testes unitários cobrindo renderização e comportamento isolado |
| 11 | `test: add testes de integração para buscas e modal` | Testes de integração simulando fluxos reais do usuário |
| 12 | `feat: add NotExistModal componente placeholder, add Navabar, atualização do Layout principal + botão create user` | Navbar com logo CDT e dropdown de usuário admin simulado e Modal genérico reutilizável para funcionalidades futuras |
| 13 | `feat: atualizado UserDetailsModal com CRUD actions, toggle com info da empresa, link website e botão mapa + Modal mapa usando OpenStreetMap` | Adicionado botões CRUD (mock), informações da empresa, link para o site e botão mapa com modal de Mapa usando OpenStreetMap |
| 14 | `feat: add endereço completo ao UserDetailsModal e add username ao UserCard` | Corrigido modela de detalhes com endereço completo e adicionado nome do usuário ao card |
| 15 | `feat: add paginação com NotExistModal como aviso para navegação` | Componente de paginação (mock) |
| 16 | `test: atualização dos testes para novo layout e components` | Atualização dos testes  |
| 17 | `docs: documentação final` | Documentação final das decisões técnicas e design system |

---

## Decisões Técnicas

### URL da API inline

Em produção, a `BASE_URL` deveria ser extraída para uma variável de ambiente (`.env`) acessada via `import.meta.env.VITE_API_BASE_URL`. Como o projeto precisa rodar com apenas `npm install` e `npm run dev` sem configuração adicional, a URL está declarada inline com esse motivo documentado no próprio arquivo `services/users.ts`.


### Modal de detalhes em vez de página separada

O requisito permitia modal ou página separada. A escolha pelo modal evita trazer `react-router-dom` para um escopo que não exige navegação, mantém o contexto da lista visível ao fundo e ainda demonstra domínio de acessibilidade em overlays (trap de foco, `aria-modal`, fechamento por ESC e backdrop).

### Tipagem completa do contrato da API

O tipo `User` em `src/types/user.ts` cobre todos os campos retornados pela API — incluindo `address.geo`, `company.catchPhrase` e `company.bs` — mesmo que nem todos sejam exibidos na UI. Tipar apenas os campos visíveis seria um atalho que esconde a forma real do dado e cria dívida técnica ao adicionar novas features.

### `jest.config.cjs` em vez de `jest.config.js`

O `package.json` do Vite usa `"type": "module"`, o que torna todos os `.js` da raiz módulos ESM. O Jest, por padrão, roda em CJS. A extensão `.cjs` força o modo CommonJS para o arquivo de configuração, eliminando o conflito sem modificar o `package.json`.

### `tsconfig.test.json` separado

O `tsconfig.app.json` gerado pelo Vite 8 usa `verbatimModuleSyntax: true` e `moduleResolution: "bundler"`, que são incompatíveis com o ts-jest em modo CommonJS. O `tsconfig.test.json` herda a configuração base e sobrescreve apenas o necessário (`module`, `moduleResolution`, `verbatimModuleSyntax`) sem afetar o build de produção.

### `tests/tsconfig.json` para o VS Code

O VS Code resolve tipos pelo `tsconfig.json` mais próximo ao arquivo aberto. Sem um `tsconfig.json` em `tests/`, o editor usaria o `tsconfig.app.json` da raiz — que não inclui `@types/jest` — e acusaria `describe`, `it`, `expect` e `jest.fn()` como desconhecidos. O arquivo `tests/tsconfig.json` estende o `tsconfig.test.json` e resolve o problema sem duplicar configuração.

### `NotExistModal` como padrão para funcionalidades futuras

Em vez de desabilitar botões ou ocultá-los, ações como Editar, Excluir, Criar Usuário e Paginação abrem um modal informativo. Isso comunica ao avaliador que a arquitetura está preparada para receber essas implementações, e ao usuário que a funcionalidade existe por design, não por acidente.

### OpenStreetMap para o mapa

Alternativa gratuita ao Google Maps — sem necessidade de API key, sem cadastro, sem limite de requisições para uso em desenvolvimento. A URL de embed aceita um `bbox` (bounding box) calculado a partir das coordenadas da API com um delta de `0.05`, o que define o nível de zoom automaticamente.

---

## Design System

A identidade visual foi construída a partir de análise do site da CDT Software, implementado via **Tailwind CSS v4** com tokens definidos no bloco `@theme {}` do `index.css`.

### Paleta de cores

| Token | Valor | Uso |
|---|---|---|
| --- | `#0D1424` | Header |
| `--color-primary` | `#0056A6` | Botões principais, bordas ativas |
| `--color-primary-dark` | `#003E7A` | Hover de botões primários |
| `--color-primary-light` | `#1976D2` | Avatar de usuário na Navbar |
| `--color-accent` | `#00AEEF` | Ícones nos campos de detalhe |
| `--color-background-alt` | `#F5F7FA` | Fundo da página e estados hover |
| `--color-text-primary` | `#1F2937` | Textos principais |
| `--color-text-secondary` | `#6B7280` | Labels, placeholders, textos auxiliares |
| `--color-border` | `#E5E7EB` | Bordas de cards e inputs |

### Tipografia

Fonte **Roboto** carregada via Google Fonts com pesos 300, 400, 500 e 700. Definida no token `--font-sans` e aplicada globalmente via `font-sans` no elemento raiz.

### Tokens de forma

| Token | Valor | Uso |
|---|---|---|
| `--radius-card` | `12px` | Cards, modais e painéis |
| `--shadow-card` | `0 4px 12px rgba(0,0,0,0.08)` | Sombra padrão de cards |

### Ícones

Todos os ícones utilizam o conjunto **Feather Icons** via `react-icons/fi`, tentando chegar o mais próximo do padrão CDT. O conjunto Feather foi escolhido por sua estética limpa e traço uniforme, alinhada à identidade corporativa.

---

<div align="center">
  <sub>Desenvolvido por <a href="https://github.com/BrunoBerval">Bruno Berval</a></sub>
</div>
