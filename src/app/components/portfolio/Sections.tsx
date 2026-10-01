import Section from './Section'
import { ArrowLink } from '../ui/Reading'
import { RESUME } from '@/constants/resume'
import SceneWork from '../scenes/SceneWork'
import SceneProjects from '../scenes/SceneProjects'

const FIGURE = /(\d[\d,.]*(?:K\+|\+|%)|0-to-1|\d+-member|\d+ sprint milestones|\d+ enterprise products)/g

/** Emphasise the measurable parts of a résumé line. */
function withFigures(text: string) {
  return text.split(FIGURE).map((part, i) =>
    i % 2 ? (
      <span key={i} className='figure'>
        {part}
      </span>
    ) : (
      part
    )
  )
}

function Points({ items }: { items: readonly string[] }) {
  return (
    <ol className='mt-7 border-t'>
      {items.map((p, i) => (
        <li
          key={p.slice(0, 40)}
          className='group grid grid-cols-[36px_1fr] gap-x-2 border-b py-4 text-[16px] leading-[1.6] transition-colors hover:bg-[color-mix(in_srgb,var(--fg)_3%,transparent)]'>
          <span aria-hidden className='font-mono text-[11px] muted pt-[5px] transition-colors group-hover:text-blue'>
            {String(i + 1).padStart(2, '0')}
          </span>
          <span>{withFigures(p)}</span>
        </li>
      ))}
    </ol>
  )
}

function Stack({ items }: { items: readonly string[] }) {
  return <p className='mt-6 font-mono text-[11px] leading-[1.8] muted'>{items.join('  ·  ')}</p>
}

export function Experience() {
  return (
    <Section id='experience' index={0} label='Experience' title='Where I’ve *worked.*' banner={<SceneWork />}>
      <div className='border-b'>
        {RESUME.experience.map((job) => (
          <article key={job.company} className='border-t py-8 first:pt-0 first:border-t-0'>
            <header className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
              <h3 className='text-[clamp(22px,1.8vw,28px)] tracking-[-0.025em] leading-tight'>{job.role}</h3>
              <p className='font-mono text-[12px] muted'>{job.dates}</p>
            </header>
            <p className='mt-2 text-[15px]'>
              {job.company} <span className='muted'>· {job.location}</span>
            </p>
            {job.note && <p className='mt-1 text-[12px] muted'>{job.note}</p>}
            <Points items={job.points} />
            <Stack items={job.stack} />
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id='projects' index={1} label='Projects' title='Things I’ve *built.*' banner={<SceneProjects />}>
      <div className='border-b'>
        {RESUME.projects.map((p) => (
          <article key={p.name} className='border-t py-8 first:pt-0 first:border-t-0'>
            <header className='flex flex-wrap items-baseline justify-between gap-4'>
              <h3 className='text-[clamp(28px,2.6vw,42px)] tracking-[-0.035em] leading-tight'>{p.name}</h3>
              <ArrowLink href={p.href} className='inline-flex items-center gap-2 text-[13px]'>
                <span className='h-1.5 w-1.5 rounded-full bg-blue' />
                <span className='draw'>Live</span>
                <span className='arrow'>↗</span>
              </ArrowLink>
            </header>
            <Stack items={p.stack} />
            <Points items={p.points} />
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id='skills' index={2} label='Skills' title='Technical *skills.*'>
      <dl className='border-b'>
        {RESUME.skills.map((s) => (
          <div key={s.group} className='border-t first:border-t-0 grid sm:grid-cols-[160px_1fr] gap-x-6 gap-y-1 py-5 first:pt-0'>
            <dt className='font-mono text-[11px] muted pt-1'>{s.group}</dt>
            <dd className='text-[16px] leading-[1.6]'>{s.items.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}

export function Education() {
  const e = RESUME.education
  return (
    <Section id='education' index={3} label='Education' title='*Education.*'>
      <article className='border-b pb-8'>
        <header className='flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1'>
          <h3 className='text-[clamp(22px,1.8vw,28px)] tracking-[-0.025em] leading-tight'>{e.degree}</h3>
          <p className='font-mono text-[12px] muted'>{e.dates}</p>
        </header>
        <p className='mt-2 text-[15px]'>
          {e.school} <span className='muted'>· {e.location}</span>
        </p>
        <p className='mt-6 inline-flex items-baseline gap-3'>
          <span className='serif text-[clamp(48px,4vw,72px)] leading-none'>9.41</span>
          <span className='text-[12px] muted'>CGPA / 10</span>
        </p>
      </article>
    </Section>
  )
}
