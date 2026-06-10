import { siteConfig, skills } from '../data/content'

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen px-12"
      style={{ paddingTop: 80, background: 'var(--paper)' }}
    >
      {/* Avatar */}
      <div
        className="animate-fade-up-1 flex items-center justify-center mb-8 rounded-full"
        style={{
          width: 96,
          height: 96,
          background: 'var(--card)',
          border: '2px solid var(--accent)',
          fontFamily: "'Syne', sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--accent)',
        }}
      >
        {siteConfig.name.split(' ').map(n => n[0]).join('')}
      </div>

      {/* Name */}
      <h1
        className="animate-fade-up-2 mb-3"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'var(--ink)',
        }}
      >
        {siteConfig.name}
      </h1>

      {/* Title */}
      <p
        className="animate-fade-up-2 mb-6 uppercase"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          letterSpacing: '0.15em',
          color: 'var(--accent)',
        }}
      >
        {siteConfig.title}
      </p>

      {/* Bio */}
      <p
        className="animate-fade-up-3 mb-10"
        style={{
          maxWidth: 520,
          fontSize: 16,
          lineHeight: 1.8,
          color: 'var(--mid)',
        }}
      >
        {siteConfig.description}
      </p>

      {/* Social links */}
      <div className="animate-fade-up-4 flex gap-4 mb-12">
        {Object.entries(siteConfig.socials).map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.08em',
              color: 'var(--mid)',
              border: '1px solid var(--border)',
              background: 'var(--card)',
              padding: '0.5rem 1rem',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            className="hover:[color:var(--accent-hover)] hover:[border-color:var(--accent-hover)]"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Skill pills */}
      <div className="animate-fade-up-4 flex flex-wrap justify-center gap-2" style={{ maxWidth: 560 }}>
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.06em',
              padding: '0.35rem 0.85rem',
              border: '1px solid var(--border)',
              background: 'var(--card)',
              color: 'var(--mid)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}