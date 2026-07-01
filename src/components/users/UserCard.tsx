/**
 * Exibe nome e email de um usuário em formato de card clicável.
 * Usa <button> em vez de <div> para garantir acessibilidade
 * por teclado e leitores de tela.
 * O prop onClick será usado para abrir o modal de detalhes.
 */

import { FiUser, FiMail } from 'react-icons/fi'
import type { User } from '../../types/users'

interface UserCardProps {
  user: User
  onClick: () => void
}

export function UserCard({ user, onClick }: UserCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white border border-border rounded-card shadow-card p-6 hover:border-primary transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-background-alt flex items-center justify-center">
          <FiUser className="text-primary" size={18} />
        </div>
        <div className="min-w-0">
          <h2 className="text-text-primary font-medium text-base leading-tight">
            {user.name}
          </h2>
          <p className="text-text-secondary text-xs">@{user.username}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FiMail size={14} className="text-text-secondary" />
        <span className="text-text-secondary text-sm truncate">{user.email}</span>
      </div>
    </button>
  )
}