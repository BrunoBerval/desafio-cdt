/**
 * Em produção, a BASE_URL deveria ser extraída para uma variável de ambiente (.env),
 * acessada via import.meta.env.VITE_API_BASE_URL.
 * Como este projeto deve rodar com apenas `npm install` e `npm run dev`,
 * a URL está declarada inline para não exigir configuração adicional.
 */

import type { User } from '../types/users'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch(`${BASE_URL}/users`)

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`)
  }

  return response.json()
}