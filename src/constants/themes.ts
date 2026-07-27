export type ColorThemeId =
  | 'ember'
  | 'ocean'
  | 'forest'
  | 'rose'
  | 'slate'
  | 'gold'

export type ColorTheme = {
  id: ColorThemeId
  label: string
  /** Small preview chip in the picker */
  swatch: string
  brand: string
  brandSoft: string
  brandHover: string
  brandPink: string
  brandNavy: string
  brandPeach: string
  brandAccent: string
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: 'ember',
    label: 'Classic',
    swatch: '#ff7a1a',
    brand: '#ff7a1a',
    brandSoft: '#ffe2cf',
    brandHover: '#e86a10',
    brandPink: '#ff7bb0',
    brandNavy: '#0a0820',
    brandPeach: '#f7e6d2',
    brandAccent: '#4928fd',
  },
  {
    id: 'ocean',
    label: 'Ocean',
    swatch: '#0ea5e9',
    brand: '#0ea5e9',
    brandSoft: '#38bdf8',
    brandHover: '#0284c7',
    brandPink: '#7dd3fc',
    brandNavy: '#082f49',
    brandPeach: '#e0f2fe',
    brandAccent: '#6366f1',
  },
  {
    id: 'forest',
    label: 'Forest',
    swatch: '#16a34a',
    brand: '#16a34a',
    brandSoft: '#22c55e',
    brandHover: '#15803d',
    brandPink: '#86efac',
    brandNavy: '#052e16',
    brandPeach: '#dcfce7',
    brandAccent: '#0d9488',
  },
  {
    id: 'rose',
    label: 'Rose',
    swatch: '#e11d48',
    brand: '#e11d48',
    brandSoft: '#f43f5e',
    brandHover: '#be123c',
    brandPink: '#fda4af',
    brandNavy: '#4c0519',
    brandPeach: '#ffe4e6',
    brandAccent: '#db2777',
  },
  {
    id: 'slate',
    label: 'Slate',
    swatch: '#64748b',
    brand: '#64748b',
    brandSoft: '#94a3b8',
    brandHover: '#475569',
    brandPink: '#cbd5e1',
    brandNavy: '#0f172a',
    brandPeach: '#e2e8f0',
    brandAccent: '#6366f1',
  },
  {
    id: 'gold',
    label: 'Gold',
    swatch: '#d97706',
    brand: '#d97706',
    brandSoft: '#f59e0b',
    brandHover: '#b45309',
    brandPink: '#fcd34d',
    brandNavy: '#451a03',
    brandPeach: '#fef3c7',
    brandAccent: '#ea580c',
  },
]

export const DEFAULT_COLOR_THEME_ID: ColorThemeId = 'ember'
export const DEFAULT_COLOR_THEME = DEFAULT_COLOR_THEME_ID

export const COLOR_THEME_STORAGE_KEY = 'satwik-color-theme'

export function getColorTheme(id: string | null | undefined): ColorTheme {
  return COLOR_THEMES.find((t) => t.id === id) ?? COLOR_THEMES[0]
}

export function applyColorThemeToDocument(
  theme: ColorTheme,
  root: HTMLElement = document.documentElement
) {
  root.style.setProperty('--brand', theme.brand)
  root.style.setProperty('--brand-soft', theme.brandSoft)
  root.style.setProperty('--brand-hover', theme.brandHover)
  root.style.setProperty('--brand-pink', theme.brandPink)
  root.style.setProperty('--brand-navy', theme.brandNavy)
  root.style.setProperty('--brand-peach', theme.brandPeach)
  root.style.setProperty('--brand-accent', theme.brandAccent)
  root.dataset.colorTheme = theme.id
}
