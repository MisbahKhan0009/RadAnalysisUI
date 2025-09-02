import { useMemo, useState } from 'react'
import { AuthContext } from './auth-context'

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const login = (mockUser = { id: 1, name: 'Demo' }) => setUser(mockUser)
  const logout = () => setUser(null)

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
