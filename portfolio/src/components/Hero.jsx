import { personalData, skills } from '../data/content'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center min-h-screen px-12"
      style={{ paddingTop: 80, background: 'var(--paper)' }}
    >
      {/* Avatar */}
      <img
      src="/Avatar Headshot.png"
      alt={personalData.name}
      className="animate-fade-up-1 rounded-full mb-8"
      style={{
        width: 96,
        height: 96,
        border: '2px solid var(--accent)',
        objectFit: 'cover',
      }}
      />

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
        {personalData.name}
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
        {personalData.title}
      </p>


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