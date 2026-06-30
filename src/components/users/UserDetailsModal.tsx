/**
 * Componente auxiliar que renderiza uma linha de detalhe com ícone, label e valor.
 * Mantido no mesmo arquivo pois é exclusivo deste modal.
 */

import { useEffect } from 'react'
import { FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin } from 'react-icons/fi'
import type { User } from '../../types/users'

interface UserDetailsModalProps {
  user: User
  onClose: () => void
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-accent mt-0.5">{icon}</span>
      <div>
        <p className="text-text-secondary text-xs mb-0.5">{label}</p>
        <p className="text-text-primary text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}

/**
 * Modal de detalhes do usuário.
 * - Fecha ao clicar no backdrop ou pressionar ESC.
 * - Clique dentro do card não propaga para o backdrop.
 * - aria-modal e aria-labelledby garantem acessibilidade básica.
 */
export function UserDetailsModal({ user, onClose }: UserDetailsModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-card shadow-card w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
          aria-label="Fechar modal"
        >
          <FiX size={20} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center">
            <FiUser className="text-primary" size={22} />
          </div>
          <h2
            id="modal-title"
            className="text-text-primary font-medium text-lg"
          >
            {user.name}
          </h2>
        </div>

        <div className="border-t border-border mb-6" />

        <div className="flex flex-col gap-5">
          <DetailRow icon={<FiMail size={16} />} label="Email" value={user.email} />
          <DetailRow icon={<FiPhone size={16} />} label="Telefone" value={user.phone} />
          <DetailRow icon={<FiBriefcase size={16} />} label="Empresa" value={user.company.name} />
          <DetailRow icon={<FiMapPin size={16} />} label="Cidade" value={user.address.city} />
        </div>
      </div>
    </div>
  )
}