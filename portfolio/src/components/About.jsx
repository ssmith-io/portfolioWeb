import { Link } from 'react-router-dom'
import { personalData } from '../data/content'

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
      <p
        className="uppercase mb-3"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        // Who I Am
      </p>

      <h2
        className="mb-10"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.03em', color: 'var(--ink)',
        }}
      >
        About Me
      </h2>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      <p
        style={{
          fontSize: 17, lineHeight: 1.8,
          color: 'var(--mid)', maxWidth: 640,
          marginBottom: '2.5rem',
        }}
      >
        {personalData.description}
      </p>

      <Link
        to="/about"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12, letterSpacing: '0.08em',
          color: 'var(--accent)',
          border: '1px solid var(--accent)',
          padding: '0.75rem 1.5rem',
          textDecoration: 'none',
          textTransform: 'uppercase',
          display: 'inline-block',
        }}
        className="hover:[background:var(--accent)] hover:[color:var(--paper)] transition-all duration-200"
      >
        More About Me →
      </Link>
    </section>
  )
}