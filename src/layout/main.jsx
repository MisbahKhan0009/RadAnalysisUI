import { Outlet } from 'react-router-dom'
import { SidebarProvider, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset, SidebarHeader, SidebarFooter, SidebarSeparator } from '@/components/ui/sidebar'
import Navbar from '@/Shared/Navbar'
import Footer from '@/Shared/Footer'
import SidebarNav from '@/components/SidebarNav'
import sidebarLinks from '@/data/sidebarLinks.json'
import { SquareActivity } from 'lucide-react'



import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Navbar />
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
        <Footer />
      
      </SidebarInset>
    </SidebarProvider>
  )
}

