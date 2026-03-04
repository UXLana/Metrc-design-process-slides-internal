'use client'

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react'
import { SwitchableThemeProvider, useThemeSwitcher } from '@/styles/themes'

// =============================================================================
// DARK PALETTE (Microsoft-style neutral dark theme)
// =============================================================================

export const dark = {
  bg:          '#1e1e1e',
  bgSidebar:   '#181818',
  bgSurface:   '#1e1e1e',
  bgElevated:  '#2d2d2d',
  bgInput:     '#313131',
  bgHover:     'rgba(255,255,255,0.06)',
  bgActive:    'rgba(255,255,255,0.09)',
  border:      '#3c3c3c',
  borderSubtle:'#2d2d2d',
  text:        '#cccccc',
  textMuted:   '#858585',
  textFaint:   '#6e6e6e',
}

// =============================================================================
// DARK MODE CONTEXT
// =============================================================================

interface DarkModeContextValue {
  isDark: boolean
  toggle: () => void
}

const DarkModeContext = createContext<DarkModeContextValue>({
  isDark: false,
  toggle: () => {},
})

export function useDarkMode() {
  return useContext(DarkModeContext)
}

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('rid-dark-mode')
    if (stored === 'true') setIsDark(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('rid-dark-mode', String(isDark))
    document.documentElement.setAttribute('data-dark', String(isDark))
  }, [isDark])

  const toggle = useCallback(() => setIsDark((v) => !v), [])
  const value = useMemo(() => ({ isDark, toggle }), [isDark, toggle])

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

// =============================================================================
// THEME FORCER
// =============================================================================

function ForceTraceTheme({ children }: { children: React.ReactNode }) {
  const { setThemeName } = useThemeSwitcher()
  useEffect(() => { setThemeName('trace') }, [setThemeName])
  return <>{children}</>
}

// =============================================================================
// COMBINED PROVIDERS
// =============================================================================

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SwitchableThemeProvider>
      <ForceTraceTheme>
        <DarkModeProvider>{children}</DarkModeProvider>
      </ForceTraceTheme>
    </SwitchableThemeProvider>
  )
}
