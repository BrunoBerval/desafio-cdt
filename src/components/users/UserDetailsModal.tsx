/**
 * Modal de detalhes do usuário.
 *
 * Estados internos:
 * - companyExpanded: controla a exibição do slogan e ramo da empresa.
 * - mapOpen: controla a visibilidade do MapModal com as coordenadas do usuário.
 *   O UserDetailsModal permanece visível por baixo do mapa (z-40) enquanto
 *   o MapModal renderiza em z-50 — o usuário pode fechar o mapa e retornar
 *   aos detalhes sem perder o contexto.
 *
 * Fecha com ESC ou clique no backdrop.
 * Ações de CRUD (Editar/Excluir) chamam onNotExist pois ainda não implementadas.
 */

import { useEffect, useState } from 'react'
import {
  FiX,
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMapPin,
  FiEdit2,
  FiTrash2,
  FiInfo,
  FiExternalLink,
  FiMap,
} from 'react-icons/fi'
import type { User } from '../../types/users'
import { MapModal } from './MapModal'

interface UserDetailsModalProps {
  user: User
  onClose: () => void
  onNotExist: (featureName?: string) => void
}

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-accent mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-text-secondary text-xs mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  )
}

/**
 * Modal de detalhes do usuário.
 *
 * Estados internos:
 * - companyExpanded: controla a exibição do slogan e ramo da empresa.
 * - mapOpen: controla a visibilidade do MapModal com as coordenadas do usuário.
 *   O UserDetailsModal permanece visível por baixo do mapa (z-40) enquanto
 *   o MapModal renderiza em z-50 — o usuário pode fechar o mapa e retornar
 *   aos detalhes sem perder o contexto.
 *
 * Fecha com ESC ou clique no backdrop.
 * Ações de CRUD (Editar/Excluir) chamam onNotExist pois ainda não implementadas.
 */
export function UserDetailsModal({ user, onClose, onNotExist }: UserDetailsModalProps) {
  const [companyExpanded, setCompanyExpanded] = useState(false)
  const [mapOpen, setMapOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (mapOpen) {
          setMapOpen(false)
        } else {
          onClose()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, mapOpen])

  return (
    <>
      <div
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-40 p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          className="bg-white rounded-card shadow-card w-full max-w-md relative max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Fechar modal"
            >
              <FiX size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-background-alt flex items-center justify-center shrink-0">
                <FiUser className="text-primary" size={22} />
              </div>
              <div className="min-w-0">
                <h2
                  id="modal-title"
                  className="text-text-primary font-medium text-lg leading-tight"
                >
                  {user.name}
                </h2>
                <p className="text-text-secondary text-xs">@{user.username}</p>
              </div>
            </div>

            {/* CRUD actions */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => onNotExist('Editar Usuário')}
                className="flex items-center gap-1.5 border border-border text-text-secondary text-xs px-3 py-1.5 rounded-lg hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                <FiEdit2 size={13} />
                Editar
              </button>
              <button
                onClick={() => onNotExist('Excluir Usuário')}
                className="flex items-center gap-1.5 border border-border text-text-secondary text-xs px-3 py-1.5 rounded-lg hover:border-red-400 hover:text-red-500 transition-colors duration-200 cursor-pointer"
              >
                <FiTrash2 size={13} />
                Excluir
              </button>
            </div>

            <div className="border-t border-border mb-6" />

            <div className="flex flex-col gap-5">

              {/* Email */}
              <DetailRow icon={<FiMail size={16} />} label="Email">
                <p className="text-text-primary text-sm font-medium break-all">
                  {user.email}
                </p>
              </DetailRow>

              {/* Phone */}
              <DetailRow icon={<FiPhone size={16} />} label="Telefone">
                <p className="text-text-primary text-sm font-medium">
                  {user.phone}
                </p>
              </DetailRow>

              {/* Website */}
              <DetailRow icon={<FiExternalLink size={16} />} label="Website">
                
                <a  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  {user.website}
                </a>
              </DetailRow>

              {/* Company */}
              <DetailRow icon={<FiBriefcase size={16} />} label="Empresa">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-text-primary text-sm font-medium">
                    {user.company.name}
                  </p>
                  <button
                    onClick={() => setCompanyExpanded((prev) => !prev)}
                    title={companyExpanded ? 'Ocultar detalhes' : 'Ver ramo e slogan'}
                    className={`shrink-0 p-1 rounded-md transition-colors duration-200 cursor-pointer ${
                      companyExpanded
                        ? 'text-primary bg-background-alt'
                        : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <FiInfo size={15} />
                  </button>
                </div>
                {companyExpanded && (
                  <div className="mt-2 p-3 bg-background-alt rounded-lg flex flex-col gap-2">
                    <div>
                      <p className="text-text-secondary text-xs mb-0.5">Slogan</p>
                      <p className="text-text-primary text-xs">{user.company.catchPhrase}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs mb-0.5">Ramo</p>
                      <p className="text-text-primary text-xs">{user.company.bs}</p>
                    </div>
                  </div>
                )}
              </DetailRow>

              {/* Full address + map button */}
              <DetailRow icon={<FiMapPin size={16} />} label="Endereço">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-text-primary text-sm font-medium">
                      {user.address.street}, {user.address.suite}
                    </p>
                    <p className="text-text-secondary text-xs mt-0.5">
                      {user.address.city} — {user.address.zipcode}
                    </p>
                  </div>
                  <button
                    onClick={() => setMapOpen(true)}
                    className="shrink-0 flex items-center gap-1 text-xs text-primary hover:text-primary-dark border border-primary/30 hover:border-primary px-2 py-1 rounded-md transition-colors duration-200 cursor-pointer mt-0.5"
                  >
                    <FiMap size={13} />
                    Ver no mapa
                  </button>
                </div>
              </DetailRow>

            </div>
          </div>
        </div>
      </div>

      {mapOpen && (
        <MapModal
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
          cityName={user.address.city}
          onClose={() => setMapOpen(false)}
        />
      )}
    </>
  )
}