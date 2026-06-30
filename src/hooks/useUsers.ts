/**
 * Hook responsável por buscar e gerenciar o estado da lista de usuários.
 * Encapsula loading e error para que os componentes não precisem
 * lidar diretamente com a camada de serviço.
 */

import { useState, useEffect } from 'react'
import type { User } from '../types/users'
import { fetchUsers } from '../services/users'

interface UseUsersReturn {
  users: User[]
  loading: boolean
  error: string | null
}


export function useUsers(): UseUsersReturn {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : 'Unexpected error'
        setError(message)
      })
      .finally(() => setLoading(false))
  }, [])

  return { users, loading, error }
}