import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './theme-context'

const STORAGE_KEY = 'theme'

export function ThemeProvider({ children, defaultTheme = 'light' }) {
		const [theme, setTheme] = useState(() => {
			try {
				const stored = localStorage.getItem(STORAGE_KEY)
				if (stored === 'light' || stored === 'dark') return stored
				} catch {
					// ignore storage errors
				}
		// Respect system preference on first load
		const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		return prefersDark ? 'dark' : defaultTheme
	})

		useEffect(() => {
			try {
				localStorage.setItem(STORAGE_KEY, theme)
				} catch {
					// ignore storage errors
				}
		const root = document.documentElement
		if (theme === 'dark') root.classList.add('dark')
		else root.classList.remove('dark')
	}, [theme])

	// Sync when system theme changes (only if user hasn't explicitly chosen? keep simple: always allow)
	useEffect(() => {
		const mql = window.matchMedia('(prefers-color-scheme: dark)')
		const handler = (e) => {
			const stored = (() => {
				try { return localStorage.getItem(STORAGE_KEY) } catch { return null }
			})()
			// If user has no explicit choice, follow system
			if (stored !== 'light' && stored !== 'dark') {
				setTheme(e.matches ? 'dark' : 'light')
			}
		}
		mql.addEventListener?.('change', handler)
		return () => mql.removeEventListener?.('change', handler)
	}, [])

		const value = useMemo(
			() => ({ theme, setTheme, toggle: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')) }),
			[theme]
		)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
