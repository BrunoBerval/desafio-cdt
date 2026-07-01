/**
 * Renderiza a grade de UserCards.
 * Responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop.
 * Recebe onUserClick para propagar o usuário selecionado ao App.
 */

import { useState } from 'react'
import { FiGrid, FiList } from 'react-icons/fi'
import { UserCard } from './UserCard'
import { UserRow } from './UserRow'
import type { User } from '../../types/users'

type ViewMode = 'grid' | 'list'

interface UserListProps {
  users: User[]
  onUserClick: (user: User) => void
}

/**
 * Renderiza a lista de usuários com suporte a dois modos de visualização:
 * - Grid: cards em grade responsiva (1 → 2 → 3 colunas)
 * - List: linhas horizontais compactas
 * O estado de viewMode é local — é uma decisão de apresentação,
 * não precisa subir para o App.
 */
export function UserList({ users, onUserClick }: UserListProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <div className="flex border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode('grid')}
            title="Visualização em grade"
            aria-label="Visualização em grade"
            className={`p-2 transition-colors duration-200 cursor-pointer ${
              viewMode === 'grid'
                ? 'bg-primary text-white'
                : 'bg-white text-text-secondary hover:text-primary'
            }`}
          >
            <FiGrid size={16} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            title="Visualização em lista"
            aria-label="Visualização em lista"
            className={`p-2 transition-colors duration-200 cursor-pointer border-l border-border ${
              viewMode === 'list'
                ? 'bg-primary text-white'
                : 'bg-white text-text-secondary hover:text-primary'
            }`}
          >
            <FiList size={16} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onClick={() => onUserClick(user)}
            />
          ))}
        </div>
      )}

      {viewMode === 'list' && (
        <div className="flex flex-col gap-2">
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onClick={() => onUserClick(user)}
            />
          ))}
        </div>
      )}
    </div>
  )
}