'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { HeaderItem } from '@/constants/data'

type Props = {
  item: HeaderItem
  isOpen: boolean
  onHover: () => void
  onClick: () => void
}

const HeaderLink: React.FC<Props> = ({ item, isOpen, onHover, onClick }) => {
  const pathname = usePathname()
  const hasChildren = !!item.children?.length
  const isActive = pathname === item.href

  return (
    <li className='relative' onMouseEnter={onHover}>
      <Link
        href={item.href}
        onClick={e => {
          if (hasChildren) {
            e.preventDefault()
            onClick()
          } else {
            onClick()
          }
        }}
        style={{ letterSpacing: '0.005em' }}
        className={`group relative inline-flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium
          ${
            isOpen || isActive
              ? 'text-wiz_ink dark:text-white'
              : 'text-wiz_ink/75 dark:text-white/70 hover:text-wiz_ink dark:hover:text-white'
          }`}>
        <span className='relative'>
          {item.label}
          <span
            aria-hidden
            className={`absolute -bottom-1 left-0 h-px bg-current transition-all duration-200 ease-out ${
              isOpen ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
            }`}
          />
        </span>
        {hasChildren && (
          <svg
            width='10'
            height='10'
            viewBox='0 0 24 24'
            fill='none'
            className={`transition-transform duration-200 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}>
            <path
              d='M6 9l6 6 6-6'
              stroke='currentColor'
              strokeWidth='2.4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </Link>
    </li>
  )
}

export default HeaderLink
