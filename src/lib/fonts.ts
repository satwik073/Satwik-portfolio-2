import { Inter_Tight, Instrument_Serif } from 'next/font/google'

// Primary font - Inter Tight
export const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap', // Use font-display: swap to prevent FOIT
  variable: '--font-inter-tight',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

// Decorative font - Instrument Serif
export const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif',
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['Georgia', 'serif'],
})

