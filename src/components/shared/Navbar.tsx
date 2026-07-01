/**
 * Navbar principal da aplicação.
 * Exibe o logo da CDT à esquerda e uma sessão de usuário simulada à direita.
 * O usuário fictício tem role 'admin' e um menu dropdown com opção de logout.
 * Em um sistema real, esses dados viriam de um contexto de autenticação (ex: AuthContext).
 */

import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiLogOut, FiShield } from 'react-icons/fi'


export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-[#0D1424] shadow-sm">
      <div className="max-w-300 mx-auto px-6 py-3 flex items-center justify-between">

        <img
          src="/logo-cdt-para-fundo-escuro.png"
          alt="CDT Software"
          className="h-10 w-auto"
        />

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex items-center gap-3 text-white hover:text-accent transition-colors duration-200 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-primary-light flex items-center justify-center">
              <FiShield size={16} />
            </div>
            <div className="text-left hidden sm:block">
              <p className="text-sm font-medium leading-tight">Admin User</p>
              <p className="text-xs text-white/70 leading-tight">admin</p>
            </div>
            <FiChevronDown
              size={16}
              className={`transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-card shadow-card border border-border z-50">
              <div className="px-4 py-3 border-b border-border sm:hidden">
                <p className="text-text-primary text-sm font-medium">Admin User</p>
                <p className="text-text-secondary text-xs">admin</p>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-text-primary text-sm hover:bg-background-alt transition-colors duration-200 cursor-pointer"
              >
                <FiLogOut size={16} className="text-text-secondary" />
                Sair
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  )
}