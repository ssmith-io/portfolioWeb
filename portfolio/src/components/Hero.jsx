import { siteConfig, stats, skills } from '../data/content'

export default function Hero() {
  const [build, deploy, scale] = siteConfig.tagline.split('. ')

  return (
    <section
      className="grid min-h-screen"
      style={{ gridTemplateColumns: '1fr 1fr', paddingTop: 80 }}
    >
      {/* Left */}
      <div
        className="flex flex-col justify-center px-12 py-28"
        style={{ borderRight: '1px solid var(--border)' }}
      >
        <p
          className="animate-fade-up-1 uppercase mb-8"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: '0.12em', color: 'var(--accent)' }}
        >
          // {siteConfig.availability}
        </p>

        <h1
          className="animate-fade-up-2 mb-8"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(3.5rem, 6vw, 6rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
          }}
        >
          <span style={{ color: 'var(--accent)' }}>{build}.</span>
          <br />
          <span className="text-outline">{deploy}.</span>
          <br />
          {scale}.
        </h1>

        <p
          className="animate-fade-up-3 mb-12"
          style={{ maxWidth: 380, fontSize: 16, lineHeight: 1.7, color: 'var(--mid)' }}
        >
          {siteConfig.description}
        </p>

        <div className="animate-fade-up-4 flex gap-4 items-center">
          <a
            href="#work"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
              color: 'var(--paper)',
              background: 'var(--accent)',
              border: '2px solid var(--accent)',
            }}
            className="no-underline font-medium uppercase px-8 py-4 transition-all duration-200 hover:[background:var(--ink)] hover:[border-color:var(--ink)]"
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.1em',
              color: 'var(--ink)',
              border: '2px solid var(--ink)',
            }}
            className="no-underline font-medium uppercase px-8 py-4 transition-all duration-200 hover:[background:var(--ink)] hover:[color:var(--paper)]"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Right */}
      <div
        className="flex flex-col justify-end px-12 py-28 gap-12 relative overflow-hidden"
      >
        {/* Background graphic */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '6rem',
            right: '2rem',
            fontFamily: "'Syne', sans-serif",
            fontSize: '22vw',
            fontWeight: 800,
            color: 'var(--border)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          {'</>'}
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-8 relative z-10">
          {stats.map(({ num, label }) => (
            <div key={num} style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1.5rem' }}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '3rem',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                }}
              >
                {num}
              </div>
              <div style={{ fontSize: 13, color: 'var(--mid)', marginTop: '0.25rem', fontStyle: 'italic' }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 relative z-10">
          {skills.map((skill) => (
            <span
              key={skill}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.06em',
                padding: '0.4rem 0.9rem',
                border: '1px solid var(--border)',
                background: 'var(--card)',
                color: 'var(--mid)',
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
