/**
 * Barra de paginação com botões de navegação e número da página atual.
 * Os botões de avançar e voltar chamam onPrevious/onNext, que no contexto
 * atual acionam o NotExistModal — a funcionalidade real de paginação
 * seria implementada junto com um endpoint que suporte limit/offset.
 */

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

interface PaginationProps {
  currentPage: number
  onPrevious: () => void
  onNext: () => void
}

export function Pagination({ currentPage, onPrevious, onNext }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      <button
        onClick={onPrevious}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-white text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
        aria-label="Página anterior"
      >
        <FiChevronLeft size={16} />
      </button>

      <div className="h-9 px-4 flex items-center justify-center rounded-lg border border-primary bg-primary text-white text-sm font-medium min-w-9">
        {currentPage}
      </div>

      <button
        onClick={onNext}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-white text-text-secondary hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
        aria-label="Próxima página"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  )
}