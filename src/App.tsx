import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import { UserList } from './components/users/UserList'
import { LoadingState } from './components/ui-states/LoadingState'
import { ErrorState } from './components/ui-states/ErrorState'
import type { User } from './types/users'

/**
 * Componente raiz da aplicação.
 * Orquestra os estados de loading, erro e listagem de usuários.
 * O estado selectedUser será usado pelo modal de detalhes (próximo commit).
 */
function App() {
  const { users, loading, error } = useUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  return (
    <div className="min-h-screen bg-background-alt font-sans">
      <header className="bg-primary shadow-sm">
        <div className="max-w-300 mx-auto px-6 py-5">
          <h1 className="text-white text-xl font-medium tracking-wide">
            User Directory
          </h1>
        </div>
      </header>

      <main className="max-w-300 mx-auto px-6 py-10">
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && (
          <UserList
            users={users}
            onUserClick={setSelectedUser}
          />
        )}
      </main>
    </div>
  )
}

export default App