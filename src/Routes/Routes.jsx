import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/main'
import Home from '@/Pages/Home'
import NotFound from '@/Shared/NotFound'

// Central route map
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      // Private route examples:
      // { path: 'dashboard', element: <PrivateRoutes><Dashboard /></PrivateRoutes> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

export default router
