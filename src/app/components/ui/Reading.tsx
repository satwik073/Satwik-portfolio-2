import Link from 'next/link'
export type ArchiveItem = {
  year: string
  title: string
  href?: string
}

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href)

export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const ext = isExternal(href)
  if (href.endsWith('.pdf')) {
    return (
      <a href={href} target='_blank' rel='noopener' className={`group ${className}`}>
        {children}
      </a>
    )
  }
  return (
    <Link
      href={href}
      target={ext && !href.startsWith('mailto:') ? '_blank' : undefined}
      rel={ext ? 'noopener noreferrer' : undefined}
      className={`group ${className}`}>
      {children}
    </Link>
  )
}

/** "01 / 07   The engineer ........ 2021 — now" */
export function ChapterMeta({
  index,
  total,
  name,
  years,
  className = '',
}: {
  index: string
  total: string
  name: string
  years: string
  className?: string
}) {
  return (
    <div className={`flex items-center justify-between text-[12px] ${className}`}>
      <p className='flex gap-8'>
        <span>
          {index} / {total}
        </span>
        <span>{name}</span>
      </p>
      <p>{years}</p>
    </div>
  )
}

export function Archive({
  title,
  note,
  items,
}: {
  title: string
  note: string
  items: ArchiveItem[]
}) {
  return (
    <div className='mt-12'>
      <div className='flex items-baseline justify-between text-[13px]'>
        <p>{title}</p>
        <p className='text-[11px] muted'>{note}</p>
      </div>
      <ul className='mt-4 border-b'>
        {items.map((item) => {
          const row = (
            <>
              <span className='font-mono text-[11px] muted'>{item.year}</span>
              <span className='text-[14px] min-w-0 break-words'>{item.title}</span>
              <span className='arrow text-[17px] leading-none'>{item.href ? '↗' : ''}</span>
            </>
          )
          const cls = 'grid grid-cols-[84px_1fr_20px] sm:grid-cols-[98px_1fr_20px] items-center gap-3 py-[18px]'
          return (
            <li key={item.year + item.title} className='border-t'>
              {item.href ? (
                <ArrowLink href={item.href} className={`${cls} hover:text-blue transition-colors`}>
                  {row}
                </ArrowLink>
              ) : (
                <div className={cls}>{row}</div>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

/** Two-column reading block — claim on the left, text + archive on the right. */
export default function Reading({
  label,
  claim,
  readHref,
  readLabel = 'Read this chapter',
  note,
  children,
  archive,
  id,
  as: Heading = 'h3',
}: {
  label: string
  claim: string
  readHref?: string
  readLabel?: string
  note?: string
  children: React.ReactNode
  archive?: React.ReactNode
  id?: string
  as?: 'h2' | 'h3'
}) {
  return (
    <div
      id={id}
      data-tone='light'
      className='tone px-[8vw] py-[clamp(72px,10vw,150px)] grid lg:grid-cols-[33fr_54fr] gap-x-[11vw] gap-y-12 scroll-mt-24'>
      <div data-reveal className='lg:sticky lg:top-28 self-start'>
        <p className='mono-label'>{label}</p>
        <Heading className='claim mt-10'>{claim}</Heading>
        {readHref && (
          <ArrowLink
            href={readHref}
            className='mt-10 flex items-center justify-between border-b border-ink py-4 text-[14px]'>
            <span>{readLabel}</span>
            <span className='arrow'>↗</span>
          </ArrowLink>
        )}
        {note && (
          <div className='mt-5 pt-5 border-t'>
            <p className='text-[10px] leading-[1.6] muted max-w-[40ch]'>{note}</p>
          </div>
        )}
      </div>

      <div data-reveal className='min-w-0'>
        <div className='text-[17px] sm:text-[19px] leading-[1.6] max-w-[64ch] space-y-6'>{children}</div>
        {archive}
      </div>
    </div>
  )
}
