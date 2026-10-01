import { Fragment } from 'react'

/**
 * Splits a heading into masked words for the reveal animation.
 * Wrap words in *asterisks* to set them in the serif italic accent.
 * `mode="load"` animates on page load (hero); default reveals on scroll.
 */
export default function Words({
  text,
  as: Tag = 'span',
  className = '',
  mode = 'scroll',
  id,
}: {
  text: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  mode?: 'scroll' | 'load'
  id?: string
}) {
  let i = 0
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean)
  return (
    <Tag
      id={id}
      {...(mode === 'scroll' ? { 'data-reveal': '' } : {})}
      className={`${mode === 'scroll' ? 'words' : 'rise'} ${className}`}>
      <span className='sr-only'>{text.replace(/\*/g, '').replace(/\n/g, ' ')}</span>
      {parts.map((part, p) => {
        const accent = part.startsWith('*')
        const words = part.replace(/\*/g, '').split(/(\n| +)/)
        return (
          <Fragment key={p}>
            {words.map((w, k) =>
              w === '\n' ? (
                <br key={k} />
              ) : /^\s+$/.test(w) ? (
                ' '
              ) : (
                <span key={k} aria-hidden className='rw'>
                  <span className={accent ? 'serif pr-[0.06em]' : undefined} style={{ ['--i' as string]: i++ }}>
                    {w}
                  </span>
                </span>
              )
            )}
          </Fragment>
        )
      })}
    </Tag>
  )
}
