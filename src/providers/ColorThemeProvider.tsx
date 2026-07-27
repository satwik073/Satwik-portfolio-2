'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  COLOR_THEMES,
  COLOR_THEME_STORAGE_KEY,
  DEFAULT_COLOR_THEME,
  applyColorThemeToDocument,
  getColorTheme,
  type ColorTheme,
  type ColorThemeId,
} from '@/constants/themes'

type ColorThemeContextValue = {
  themeId: ColorThemeId
  theme: ColorTheme
  themes: ColorTheme[]
  setThemeId: (id: ColorThemeId) => void
}

const ColorThemeContext = createContext<ColorThemeContextValue | null>(null)

export function ColorThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ColorThemeId>(DEFAULT_COLOR_THEME)

  useEffect(() => {
    const saved = window.localStorage.getItem(COLOR_THEME_STORAGE_KEY)
    const theme = getColorTheme(saved)
    setThemeIdState(theme.id)
    applyColorThemeToDocument(theme)
  }, [])

  const setThemeId = useCallback((id: ColorThemeId) => {
    const theme = getColorTheme(id)
    setThemeIdState(theme.id)
    applyColorThemeToDocument(theme)
    window.localStorage.setItem(COLOR_THEME_STORAGE_KEY, theme.id)
  }, [])

  const value = useMemo(
    () => ({
      themeId,
      theme: getColorTheme(themeId),
      themes: COLOR_THEMES,
      setThemeId,
    }),
    [themeId, setThemeId]
  )

  return (
    <ColorThemeContext.Provider value={value}>{children}</ColorThemeContext.Provider>
  )
}

export function useColorTheme() {
  const ctx = useContext(ColorThemeContext)
  if (!ctx) {
    throw new Error('useColorTheme must be used within ColorThemeProvider')
  }
  return ctx
}
