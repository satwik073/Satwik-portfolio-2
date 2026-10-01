import Words from '../ui/Words'

/** Two-column résumé section: sticky label + title left, content right.
    An optional full-bleed `banner` (dark/blue scene) sits on top. */
export default function Section({
  id,
  index,
  label,
  title,
  aside,
  banner,
  children,
}: {
  id: string
  index: number
  label: string
  title: string
  aside?: React.ReactNode
  banner?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <section id={id} data-section={index} aria-labelledby={`${id}-title`} className='scroll-mt-0'>
      {banner}
      <div
        data-tone='light'
        className={`tone px-[8vw] py-[clamp(64px,8vw,120px)] grid lg:grid-cols-[30fr_57fr] gap-x-[9vw] gap-y-10 ${banner ? '' : 'border-t'}`}>
        <div className='lg:sticky lg:top-28 self-start'>
          <p className='mono-label'>
            {String(index + 1).padStart(2, '0')} — {label}
          </p>
          <Words as='h2' id={`${id}-title`} text={title} className='claim mt-6 lg:mt-8 text-[clamp(34px,3.4vw,58px)]' />
          <span data-reveal aria-hidden className='mt-8 block h-px w-16 bg-blue origin-left' />
          {aside && <div className='mt-6 text-[13px] muted max-w-[34ch]'>{aside}</div>}
        </div>
        <div className='min-w-0'>{children}</div>
      </div>
    </section>
  )
}
