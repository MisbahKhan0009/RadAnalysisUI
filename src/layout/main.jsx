import { SidebarLeft } from "@/components/sidebar-left"
import { SidebarRight } from "@/components/sidebar-right"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export default function Page() {
  return (
    <SidebarProvider>
      <SidebarLeft />
      <SidebarInset
        className="
          transition-[padding] duration-200 ease-linear
          md:peer-data-[state=collapsed]:px-[calc((var(--sidebar-width)-var(--sidebar-width-icon))/2)]
        "
      >
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  )
}
