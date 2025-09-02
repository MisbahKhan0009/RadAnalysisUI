import { SidebarTrigger } from '@/components/ui/sidebar'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  return (
    <header className="border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
         
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  )
}
