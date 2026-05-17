import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-2.5 group'>
      <svg
        width='22'
        height='22'
        viewBox='0 0 24 24'
        fill='none'
        className='text-wiz_ink dark:text-white'
        aria-hidden>
        {/* 3D cube mark in the spirit of WizCommerce */}
        <path
          d='M12 2.5l8.5 4.75v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5z'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinejoin='round'
        />
        <path
          d='M3.5 7.25L12 12l8.5-4.75M12 12v9.5'
          stroke='currentColor'
          strokeWidth='1.6'
          strokeLinejoin='round'
        />
        <path
          d='M7.5 9.5l9 5M16.5 9.5l-9 5'
          stroke='#ff7a1a'
          strokeWidth='1.4'
          strokeLinecap='round'
          opacity='0.8'
        />
      </svg>
      <span
        className='text-[18px] font-semibold text-wiz_ink dark:text-white'
        style={{ letterSpacing: '-0.005em' }}>
        Satwikkanhere
      </span>
    </Link>
  )
}

export default Logo
