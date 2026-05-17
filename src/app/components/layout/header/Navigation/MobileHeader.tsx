'use client'
import Link from 'next/link'
import { useState } from 'react'
import type { HeaderItem } from '@/constants/data'

type Props = {
  item: HeaderItem
  onNavigate?: () => void
}

const MobileHeader: React.FC<Props> = ({ item, onNavigate }) => {
  const [expanded, setExpanded] = useState(false)
  const hasChildren = !!item.children?.length

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className='flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-medium text-wiz_ink dark:text-white hover:bg-wiz_chip dark:hover:bg-white/5 transition'>
          {item.label}
          <svg width='14' height='14' viewBox='0 0 24 24' fill='none' className='opacity-40'>
            <path
              d='M9 6l6 6-6 6'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
      </li>
    )
  }

  return (
    <li>
      <button
        type='button'
        onClick={() => setExpanded(e => !e)}
        className='w-full flex items-center justify-between px-3 py-3 rounded-xl text-[15px] font-medium text-wiz_ink dark:text-white hover:bg-wiz_chip dark:hover:bg-white/5 transition'>
        <span>{item.label}</span>
        <svg
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
          <path
            d='M6 9l6 6 6-6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {expanded && (
        <ul className='pl-2 pr-1 py-1 flex flex-col gap-0.5'>
          {item.children!.map((child, i) => {
            const external = child.href.startsWith('http')
            return (
              <li key={i}>
                <Link
                  href={child.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  onClick={onNavigate}
                  className='block px-3 py-2.5 rounded-lg hover:bg-wiz_chip dark:hover:bg-white/5 transition'>
                  <div className='text-[14px] font-semibold text-wiz_ink dark:text-white leading-snug'>
                    {child.label}
                  </div>
                  <div className='text-[12.5px] text-wiz_muted dark:text-white/55 leading-snug mt-0.5'>
                    {child.description}
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </li>
  )
}

export default MobileHeader
