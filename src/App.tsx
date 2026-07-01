import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import { UserList } from './components/users/UserList'
import { LoadingState } from './components/ui-states/LoadingState'
import { ErrorState } from './components/ui-states/ErrorState'
import { SearchBar } from './components/users/SearchBar'
import { UserDetailsModal } from './components/users/UserDetailsModal'
import type { User } from './types/users'

/**
 * Componente raiz da aplicação.
 * Orquestra os estados de loading, erro, busca e listagem de usuários.
 * Gerencia o usuário selecionado para exibição no modal de detalhes.
 */
function App() {
  const { users, loading, error } = useUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [search, setSearch] = useState<string>('')

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background-alt font-sans">
      <header className="bg-primary shadow-sm">
        <div className="max-w-300 mx-auto px-6 py-5">
          <h1 className="text-white text-xl font-medium tracking-wide">
            Lista de Usuários
          </h1>
        </div>
      </header>

      <main className="max-w-300 mx-auto px-6 py-10">
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && (
          <div className="flex flex-col gap-8">
            <SearchBar value={search} onChange={setSearch} />
            <UserList
              users={filteredUsers}
              onUserClick={setSelectedUser}
            />
          </div>
        )}
      </main>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}

export default App