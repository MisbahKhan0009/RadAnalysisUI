import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/main'
import Login from '@/Pages/Login'
import NotFound from '@/Shared/NotFound'
import Dashboard from '@/Pages/Dashboard'

// Central route map
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      // Private route examples:
      // { path: 'dashboard', element: <PrivateRoutes><Dashboard /></PrivateRoutes> },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '*', element: <NotFound /> },
])

export default router
