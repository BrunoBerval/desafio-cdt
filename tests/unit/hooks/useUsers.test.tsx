/**
 * Testes unitários do hook useUsers.
 * O módulo de serviço é mockado para isolar o hook da camada de rede,
 * cobrindo os três estados possíveis: loading inicial, sucesso e erro.
 */

import { renderHook, waitFor } from '@testing-library/react'
import { useUsers } from '../../../src/hooks/useUsers'
import { fetchUsers } from '../../../src/services/users'
import type { User } from '../../../src/types/users'

jest.mock('../../../src/services/users')

const mockedFetchUsers = fetchUsers as jest.MockedFunction<typeof fetchUsers>

const mockUsers: User[] = [
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
]

describe('useUsers', () => {
  it('returns loading: true on initial render', () => {
  mockedFetchUsers.mockReturnValue(new Promise(() => {}))
  const { result } = renderHook(() => useUsers())
  expect(result.current.loading).toBe(true)
})

  it('returns users after successful fetch', async () => {
    mockedFetchUsers.mockResolvedValue(mockUsers)
    const { result } = renderHook(() => useUsers())
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.users).toEqual(mockUsers)
    expect(result.current.error).toBeNull()
  })

  it('returns error message when fetch fails', async () => {
    mockedFetchUsers.mockRejectedValue(new Error('Network error'))
    const { result } = renderHook(() => useUsers())
    await waitFor(() => expect(result.current.loading).toBe(false))
    expect(result.current.error).toBe('Network error')
    expect(result.current.users).toEqual([])
  })
})