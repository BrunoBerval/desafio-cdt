/**
 * Exibe um usuário em formato de linha horizontal para a visualização em lista.
 * Complementa o UserCard que é usado na visualização em grade.
 * No mobile mostra apenas nome e username; no desktop exibe email também.
 */

import { FiUser, FiMail, FiChevronRight } from 'react-icons/fi'
import type { User } from '../../types/users'

interface UserRowProps {
  user: User
  onClick: () => void
}


export function UserRow({ user, onClick }: UserRowProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-border rounded-lg px-4 py-3 hover:border-primary transition-all duration-200 cursor-pointer flex items-center gap-4"
      aria-label={`Ver detalhes de ${user.name}`}
    >
      <div className="w-9 h-9 rounded-full bg-background-alt flex items-center justify-center shrink-0">
        <FiUser className="text-primary" size={16} />
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-4">
        <div className="min-w-0">
          <p className="text-text-primary text-sm font-medium truncate">{user.name}</p>
          <p className="text-accent text-xs">@{user.username}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 min-w-0">
          <FiMail size={13} className="text-text-secondary shrink-0" />
          <span className="text-text-secondary text-sm truncate lowercase">{user.email}</span>
        </div>
      </div>

      <FiChevronRight size={16} className="text-text-secondary shrink-0" />
    </button>
  )
}