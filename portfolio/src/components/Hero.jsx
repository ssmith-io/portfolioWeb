import { personalData, skills } from '../data/content'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
  className="flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12"
  style={{ paddingTop: 80, background: 'var(--paper)' }}
>
  {/* Logo Animation */}
  <img
    src="/portfolioLogoAnimation.gif"
    alt={personalData.name}
    className="animate-fade-up-1 mb-8 w-full max-w-[280px] md:max-w-[600px] h-auto"
  />

      {/* Social links */}
      <div className="animate-fade-up-4 flex gap-4 mb-12">
        {Object.entries(personalData.socials).map(([label, href]) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
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