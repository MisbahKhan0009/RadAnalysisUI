import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/context/useTheme'
import { useSidebar } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className, showLabel = false }) {
	const { theme, toggle } = useTheme()
	const { state } = useSidebar()
	const isDark = theme === 'dark'
	const isExpanded = state === 'expanded'
	const label = isDark ? 'Dark' : 'Light'

	return (
		<Button
			variant="ghost"
			aria-label="Toggle theme"
			onClick={toggle}
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
			className={cn(
				'flex  items-center gap-2 rounded-md  hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 ring-sidebar-ring',
				!isExpanded && 'justify-center w-8 px-0',
				className
			)}
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
			{showLabel && isExpanded && (
				<span className="text-xs font-medium">{label} Theme</span>
			)}
		</Button>
	)
}
