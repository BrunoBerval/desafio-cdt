/**
 * Modal dedicado à exibição do mapa com as coordenadas do usuário.
 *
 * Estratégia de z-index:
 * O UserDetailsModal opera em z-40. Este componente opera em z-50,
 * renderizando acima do modal de detalhes sem fechá-lo.
 * O estado mapOpen no UserDetailsModal controla a visibilidade deste componente —
 * ao fechar o mapa, o usuário retorna diretamente ao modal de detalhes,
 * mantendo o contexto da sessão sem precisar reabrir nada.
 *
 * Mapa via OpenStreetMap (gratuito, sem API key):
 * A URL de embed aceita um bbox (bounding box) calculado a partir das
 * coordenadas da API, com um delta de 0.05 para definir o nível de zoom.
 */

import { useEffect } from 'react'
import { FiX, FiMapPin } from 'react-icons/fi'

interface MapModalProps {
  lat: string
  lng: string
  cityName: string
  onClose: () => void
}

export function MapModal({ lat, lng, cityName, onClose }: MapModalProps) {
  const delta = 0.05
  const latNum = parseFloat(lat)
  const lngNum = parseFloat(lng)

  const bbox = `${lngNum - delta},${latNum - delta},${lngNum + delta},${latNum + delta}`
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${latNum},${lngNum}`

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-modal-title"
    >
      <div
        className="bg-white rounded-card shadow-card w-full max-w-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <FiMapPin size={16} className="text-primary" />
            <h2
              id="map-modal-title"
              className="text-text-primary text-sm font-medium"
            >
              {cityName}
            </h2>
            <span className="text-text-secondary text-xs">
              ({lat}, {lng})
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Fechar mapa"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="w-full h-72 sm:h-96">
          <iframe
            title={`Mapa de ${cityName}`}
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

        <div className="px-6 py-3 border-t border-border">
          
          <a  href={`https://www.openstreetmap.org/?mlat=${latNum}&mlon=${lngNum}#map=14/${latNum}/${lngNum}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-xs hover:underline"
          >
            Abrir no OpenStreetMap →
          </a>
        </div>
      </div>
    </div>
  )
}