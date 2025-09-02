import { Link, useLocation } from 'react-router-dom'
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar'
import { Home as HomeIcon } from 'lucide-react'

const iconMap = {
  home: HomeIcon,
}

export default function SidebarNav({ items = [] }) {
  const { pathname } = useLocation()
  return (
    <>
      {items.map(({ to, label, icon }) => {
        const Icon = iconMap[icon] || HomeIcon
        const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)
        return (
          <SidebarMenuItem key={to}>
            <SidebarMenuButton asChild isActive={isActive}>
              <Link to={to}>
                <Icon />
                <span>{label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </>
  )
}
