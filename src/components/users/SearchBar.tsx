/**
 * Campo de busca para filtrar usuários pelo nome.
 * Componente controlado — recebe value e onChange do pai,
 * mantendo o estado de busca no App.
 */

import { FiSearch } from 'react-icons/fi'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <FiSearch
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
        size={16}
      />
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-9 pr-4 py-2.5 bg-white border border-border rounded-lg text-text-primary text-sm placeholder:text-text-secondary focus:outline-none focus:border-primary transition-colors duration-200"
      />
    </div>
  )
}