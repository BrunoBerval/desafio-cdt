/**
 * Modal genérico para funcionalidades ainda não implementadas.
 * Recebe um featureName opcional para personalizar a mensagem exibida.
 * Fecha com ESC ou clique no backdrop — mesmo padrão do UserDetailsModal.
 * Reutilizável em qualquer ação futura que ainda não tenha implementação real.
 */

import { useEffect } from 'react'
import { FiX, FiTool } from 'react-icons/fi'

interface NotExistModalProps {
  onClose: () => void
  featureName?: string
}

export function NotExistModal({ onClose, featureName }: NotExistModalProps) {
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
      aria-labelledby="not-exist-modal-title"
    >
      <div
        className="bg-white rounded-card shadow-card w-full max-w-sm p-8 relative text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
          aria-label="Fechar modal"
        >
          <FiX size={20} />
        </button>

        <div className="w-14 h-14 rounded-full bg-background-alt flex items-center justify-center mx-auto mb-5">
          <FiTool size={24} className="text-primary" />
        </div>

        <h2
          id="not-exist-modal-title"
          className="text-text-primary text-lg font-medium mb-2"
        >
          {featureName ? `${featureName}` : 'Funcionalidade indisponível'}
        </h2>

        <p className="text-text-secondary text-sm mb-6">
          Esta funcionalidade ainda não foi implementada e estará disponível em uma versão futura.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-primary hover:bg-primary-dark text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}