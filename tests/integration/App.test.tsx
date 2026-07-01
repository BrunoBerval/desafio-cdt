/**
 * Testes de integração do componente App.
 * Renderizam a árvore completa de componentes com o serviço de API mockado,
 * simulando o fluxo real do usuário: carregamento, busca, abertura e fechamento do modal.
 */

import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../src/App'
import { fetchUsers } from '../../src/services/users'

jest.mock('../../src/services/users')

const mockedFetchUsers = fetchUsers as jest.MockedFunction<typeof fetchUsers>

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: { lat: '-37.3159', lng: '81.1496' },
    },
    phone: '1-770-736-8031',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: { lat: '-43.9509', lng: '-34.4618' },
    },
    phone: '010-692-6593',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
]

beforeEach(() => {
  mockedFetchUsers.mockResolvedValue(mockUsers)
})

afterEach(() => {
  jest.resetAllMocks()
})

describe('App — integration', () => {
  it('shows loading state then renders the user list', async () => {
    render(<App />)
    expect(screen.getByText(/carregando/i)).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
      expect(screen.getByText('Ervin Howell')).toBeInTheDocument()
    })
  })

  it('filters the list when the user types in the search bar', async () => {
    const user = userEvent.setup()
    render(<App />)
    await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument())

    await user.type(screen.getByRole('textbox'), 'Leanne')

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument()
    expect(screen.queryByText('Ervin Howell')).not.toBeInTheDocument()
  })

  it('opens the modal with full user details when a card is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument())

    await user.click(screen.getByRole('button', { name: /leanne graham/i }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByText('Sincere@april.biz')).toBeInTheDocument()
    expect(within(dialog).getByText('1-770-736-8031')).toBeInTheDocument()
    expect(within(dialog).getByText('Romaguera-Crona')).toBeInTheDocument()
    expect(within(dialog).getByText('Gwenborough')).toBeInTheDocument()
  })

  it('closes the modal when the close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument())

    await user.click(screen.getByRole('button', { name: /leanne graham/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /fechar modal/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the modal when ESC is pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    await waitFor(() => expect(screen.getByText('Leanne Graham')).toBeInTheDocument())

    await user.click(screen.getByRole('button', { name: /leanne graham/i }))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('shows the error state when the API call fails', async () => {
    mockedFetchUsers.mockRejectedValue(new Error('Failed to fetch users: 500'))

    render(<App />)
    await waitFor(() =>
      expect(screen.getByText(/algo deu errado/i)).toBeInTheDocument()
    )
  })
})