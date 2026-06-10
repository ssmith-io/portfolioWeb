import SectionHeader from './SectionHeader'
import { siteConfig} from '../data/content'

export default function About() {
  return (
    <section
      className="px-12 py-28"
      style={{
        background: 'var(--card)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
      id="about"
    >
      <SectionHeader tag="// Who I Am" title="About" />

      <div className="grid gap-24" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}>
        {/* Bio */}
        <div className="flex flex-col gap-6">
          {[
            <>I'm <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{siteConfig.name}</strong>, a freelance software developer {siteConfig.location}. I specialize in building the parts that users see — and the infrastructure that keeps it all running.</>,
            <>After 6 years working inside product teams at startups and scale-ups, I went independent to work with a wider range of companies on the problems I find most interesting: fast frontends, resilient cloud systems, and the bridge between design and engineering.</>,
            <>I care about <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>outcomes, not just outputs</strong>. That means understanding your business context, communicating clearly throughout, and delivering code that your team can own after I'm gone.</>,
            <>{siteConfig.availability}. If your timeline is tight, reach out early.</>,
          ].map((para, i) => (
            <p key={i} style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
