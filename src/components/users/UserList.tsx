/**
 * Renderiza a grade de UserCards.
 * Responsivo: 1 coluna no mobile, 2 no tablet, 3 no desktop.
 * Recebe onUserClick para propagar o usuário selecionado ao App.
 */

import { UserCard } from './UserCard'
import type { User } from '../../types/users'

interface UserListProps {
  users: User[]
  onUserClick: (user: User) => void
}


export function UserList({ users, onUserClick }: UserListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => onUserClick(user)}
        />
      ))}
    </div>
  )
}