import { useState } from 'react'
import { FiUsers, FiUserPlus } from 'react-icons/fi'
import { useUsers } from './hooks/useUsers'
import { UserList } from './components/users/UserList'
import { LoadingState } from './components/ui-states/LoadingState'
import { ErrorState } from './components/ui-states/ErrorState'
import { SearchBar } from './components/users/SearchBar'
import { UserDetailsModal } from './components/users/UserDetailsModal'
import { Navbar } from './components/shared/Navbar'
import { NotExistModal } from './components/shared/NotExistModal'
import type { User } from './types/users'

/**
 * Componente raiz da aplicação.
 * Orquestra os estados de loading, erro, busca, listagem de usuários,
 * modal de detalhes e modal de funcionalidade indisponível.
 */
function App() {
  const { users, loading, error } = useUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [search, setSearch] = useState<string>('')
  const [notExistOpen, setNotExistOpen] = useState(false)
  const [notExistFeature, setNotExistFeature] = useState<string | undefined>()

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  function openNotExist(featureName?: string) {
    setNotExistFeature(featureName)
    setNotExistOpen(true)
  }

  return (
    <div className="min-h-screen bg-background-alt font-sans">
      <Navbar />

      <main className="max-w-300 mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FiUsers size={22} className="text-primary" />
            <h1 className="text-text-primary text-xl font-medium">
              Lista de Usuários
            </h1>
          </div>
          <button
            onClick={() => openNotExist('Criar Usuário')}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <FiUserPlus size={16} />
            <span className="hidden sm:inline">Criar Usuário</span>
            <span className="sm:hidden">+</span>
          </button>
        </div>

        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && (
          <div className="flex flex-col gap-6">
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
          onNotExist={openNotExist}
        />
      )}

      {notExistOpen && (
        <NotExistModal
          featureName={notExistFeature}
          onClose={() => setNotExistOpen(false)}
        />
      )}
    </div>
  )
}

export default App