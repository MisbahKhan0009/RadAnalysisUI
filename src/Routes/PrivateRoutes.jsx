import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/context/useAuth'

export default function PrivateRoutes({ children }) {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />
  }

  return children
}
