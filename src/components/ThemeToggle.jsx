import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import useTheme from '@/context/useTheme'

export default function ThemeToggle({ className }) {
	const { theme, toggle } = useTheme()
	const isDark = theme === 'dark'

	return (
		<Button
			variant="ghost"
			size="icon"
			aria-label="Toggle theme"
			className={className}
			onClick={toggle}
			title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
		>
			{isDark ? <Sun /> : <Moon />}
		</Button>
	)
}
