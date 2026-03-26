import { createContext, useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import api from '../api/axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('access_token')
    return token ? jwtDecode(token) : null
  })

  const login = async (email, password) => {
    const res = await api.post('/auth/login/', { email, password })
    localStorage.setItem('access_token',  res.data.access)
    localStorage.setItem('refresh_token', res.data.refresh)
    setUser(jwtDecode(res.data.access))
  }

  const logout = () => {
    localStorage.clear()
    setUser(null)
    window.location.href = '/login'
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook personnalisé — usage : const { user, login } = useAuth()
export const useAuth = () => useContext(AuthContext)