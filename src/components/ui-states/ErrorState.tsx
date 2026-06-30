import { FiAlertCircle } from 'react-icons/fi'

interface ErrorStateProps {
  message: string
}

/**
 * Exibido quando a requisição à API falha.
 * Recebe a mensagem de erro e a exibe de forma clara ao usuário.
 */
export function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <FiAlertCircle className="text-red-500" size={32} />
      <p className="text-text-primary font-medium">Algo deu errado</p>
      <p className="text-text-secondary text-sm">{message}</p>
    </div>
  )
}