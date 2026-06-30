/**
 * Exibido enquanto a requisição à API está em andamento.
 * Usa um spinner CSS com a cor primária da marca.
 */
export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <div className="w-8 h-8 border-4 border-border border-t-primary rounded-full animate-spin" />
      <p className="text-text-secondary text-sm">Carregando usuários...</p>
    </div>
  )
}