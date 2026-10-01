import Link from 'next/link'

/** Mark: three offset strokes — a stack of layers. */
export function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      width='22'
      height='26'
      viewBox='0 0 22 26'
      fill='none'
      aria-hidden
      className={className}>
      <path d='M4 24 C 6 16, 3 8, 7 1' stroke='currentColor' strokeWidth='1.1' strokeLinecap='round' />
      <path d='M10 25 C 12 15, 9 9, 13 2' stroke='currentColor' strokeWidth='1.1' strokeLinecap='round' />
      <path d='M16 22 C 18 15, 15 10, 19 4' stroke='currentColor' strokeWidth='1.1' strokeLinecap='round' />
      <path d='M1 13.5 H 21' stroke='currentColor' strokeWidth='1.1' strokeLinecap='round' />
    </svg>
  )
}

const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link
    href='/'
    onClick={onClick}
    aria-label='Satwik Kanhere — home'
    className='inline-flex items-center gap-[18px] text-[15px] font-medium tracking-[-0.01em] leading-none'>
    <Mark />
    <span>Satwik Kanhere</span>
  </Link>
)

export default Logo
