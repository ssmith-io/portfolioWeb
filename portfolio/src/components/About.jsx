import SectionHeader from './SectionHeader'
import { siteConfig, aboutMetrics } from '../data/content'

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

        {/* Metrics */}
        <div className="flex flex-col gap-10">
          {aboutMetrics.map((metric, i) => (
            <div
              key={metric.num}
              className="flex items-start gap-6"
              style={{
                paddingBottom: i < aboutMetrics.length - 1 ? '2.5rem' : 0,
                borderBottom: i < aboutMetrics.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '3rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'var(--accent)',
                  letterSpacing: '-0.04em',
                  minWidth: '4rem',
                }}
              >
                {metric.num}
              </div>
              <div>
                <strong className="block mb-1" style={{ fontSize: 15, fontWeight: 500 }}>
                  {metric.label}
                </strong>
                <span style={{ fontSize: 13, color: 'var(--mid)' }}>{metric.sublabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
