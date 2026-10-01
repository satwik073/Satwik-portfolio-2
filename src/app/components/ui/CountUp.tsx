'use client'
import { useEffect, useRef, useState } from 'react'

/** Counts a figure like "100K+" or "65%" up from zero when it scrolls into view. */
export default function CountUp({ value, className = '' }: { value: string; className?: string }) {
  const m = value.match(/^(\D*)([\d.,]+)(.*)$/)
  const target = m ? parseFloat(m[2].replace(/,/g, '')) : 0
  const [n, setN] = useState(target)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    const still =
      document.documentElement.dataset.motion === 'off' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!el || !m || still) return
    setN(0)
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400)
        setN(target * (1 - Math.pow(1 - t, 4)))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  if (!m) return <span className={className}>{value}</span>
  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      <span aria-hidden>
        {m[1]}
        {Math.round(n).toLocaleString('en-US')}
        {m[3]}
      </span>
    </span>
  )
}
