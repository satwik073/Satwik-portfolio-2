/**
 * Native accessibility widget — preferences persisted locally and applied
 * before first paint. Multi-stage features cycle 0 → n on each press.
 */

export type A11yPrefs = {
  contrast: number // 0 off · 1 high contrast · 2 inverted
  links: boolean
  text: number // 0..3 → zoom
  spacing: number // 0..3 letter/word spacing
  lineHeight: number // 0..3
  motion: boolean // pause animations
  images: boolean // hide images
  font: boolean // readable font
  cursor: boolean // big cursor
  align: boolean // force left-aligned text
  saturation: number // 0 off · 1 low · 2 high · 3 grayscale
  guide: boolean // reading guide
}

export const A11Y_KEY = 'a11y'

export const A11Y_DEFAULTS: A11yPrefs = {
  contrast: 0,
  links: false,
  text: 0,
  spacing: 0,
  lineHeight: 0,
  motion: false,
  images: false,
  font: false,
  cursor: false,
  align: false,
  saturation: 0,
  guide: false,
}

export function readA11y(): A11yPrefs {
  try {
    const raw = JSON.parse(localStorage.getItem(A11Y_KEY) ?? '{}')
    return { ...A11Y_DEFAULTS, ...raw }
  } catch {
    return A11Y_DEFAULTS
  }
}

export const isA11yActive = (p: A11yPrefs) =>
  (Object.keys(A11Y_DEFAULTS) as (keyof A11yPrefs)[]).some((k) => p[k] !== A11Y_DEFAULTS[k])

/**
 * Applies preferences to <html>. Self-contained on purpose: its source is
 * also inlined into the pre-paint boot script, so it must not reference
 * anything outside its own body.
 */
export function applyA11y(p: Partial<A11yPrefs>) {
  const d = document.documentElement
  const c = d.classList
  const on = (name: string, v: unknown) => {
    if (v) c.add(name)
    else c.remove(name)
  }
  const zoom = [1, 1.12, 1.25, 1.4][p.text || 0] || 1
  on('a11y-contrast', p.contrast === 1)
  on('a11y-invert', p.contrast === 2)
  on('a11y-links', p.links)
  on('a11y-zoom', zoom !== 1)
  d.style.setProperty('--a11y-zoom', String(zoom))
  for (let i = 1; i <= 3; i++) {
    on('a11y-spacing-' + i, p.spacing === i)
    on('a11y-lh-' + i, p.lineHeight === i)
    on('a11y-sat-' + i, p.saturation === i)
  }
  on('a11y-filter', p.contrast === 2 || (p.saturation || 0) > 0)
  on('a11y-noimg', p.images)
  on('a11y-font', p.font)
  on('a11y-cursor', p.cursor)
  on('a11y-align', p.align)
  on('a11y-guide', p.guide)
  if (p.motion) d.dataset.motion = 'off'
  else delete d.dataset.motion
}

/** Inline, render-blocking: restores preferences before first paint. */
export const A11Y_BOOT_SCRIPT = `(function(){try{var p=JSON.parse(localStorage.getItem('${A11Y_KEY}')||'{}');(${applyA11y.toString()})(p);}catch(e){}})();`
