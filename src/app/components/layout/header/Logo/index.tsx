import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-2.5 group'>
      <span
        className='text-[18px] font-semibold text-wiz_ink dark:text-white'
        style={{ letterSpacing: '-0.005em' }}>
        Satwik kanhere
      </span>
    </Link>
  )
}

export default Logo
