/** Theme builder — accent palettes + light/dark mode. */

export type ThemeMode = 'light' | 'dark'

export const ACCENTS = [
  { id: 'cobalt', label: 'Cobalt', value: '#234ae8', hover: '#1b3cc4' },
  { id: 'ember', label: 'Ember', value: '#c2410c', hover: '#9a3412' },
  { id: 'forest', label: 'Forest', value: '#2f6b4f', hover: '#24543e' },
  { id: 'violet', label: 'Violet', value: '#5b3fd6', hover: '#4930b5' },
  { id: 'rose', label: 'Rose', value: '#c43d5f', hover: '#a3304e' },
  { id: 'graphite', label: 'Graphite', value: '#3a4148', hover: '#2a3036' },
] as const

export type AccentId = (typeof ACCENTS)[number]['id']

export const THEME_KEYS = { mode: 'theme-mode', accent: 'theme-accent' } as const

export function applyTheme(mode: ThemeMode, accentId: string) {
  const root = document.documentElement
  const accent = ACCENTS.find((a) => a.id === accentId) ?? ACCENTS[0]
  root.classList.toggle('dark', mode === 'dark')
  root.style.setProperty('--accent', accent.value)
  root.style.setProperty('--accent-hover', accent.hover)
  root.dataset.accent = accent.id
}

/** Inline, render-blocking: applies the saved theme before first paint. */
export const THEME_BOOT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add('js');try{var A=${JSON.stringify(
  Object.fromEntries(ACCENTS.map((a) => [a.id, [a.value, a.hover]]))
)};var m=localStorage.getItem('${THEME_KEYS.mode}');var a=A[localStorage.getItem('${THEME_KEYS.accent}')];if(m==='dark')d.classList.add('dark');if(a){d.style.setProperty('--accent',a[0]);d.style.setProperty('--accent-hover',a[1]);}}catch(e){}})();`
