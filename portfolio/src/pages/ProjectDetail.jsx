import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/content'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p style={{ color: 'var(--mid)', fontFamily: "'DM Mono', monospace" }}>
          Project not found.
        </p>
        <Link to="/projects" style={{ color: 'var(--accent)' }}>← Back to projects</Link>
      </div>
    )
  }

  const { title, tags, type, details } = project

  return (
    <section className="px-12 py-28" style={{ minHeight: '100vh', maxWidth: 800, margin: '0 auto' }}>

      {/* Back link */}
      <Link
        to="/projects"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12, letterSpacing: '0.08em',
          color: 'var(--mid)', textDecoration: 'none',
          textTransform: 'uppercase',
          display: 'inline-block', marginBottom: '3rem',
        }}
        className="hover:[color:var(--accent)]"
      >
        ← Back to Projects
      </Link>

      {/* Type */}
      <p
        className="uppercase mb-3"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        {type}
      </p>

      {/* Title */}
      <h1
        className="mb-6"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.03em', color: 'var(--ink)',
        }}
      >
        {title}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11, letterSpacing: '0.08em',
              padding: '0.3rem 0.75rem',
              border: '1px solid var(--border)',
              color: 'var(--mid)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Overview */}
      <p
        className="mb-10"
        style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}
      >
        {details.overview}
      </p>

      {/* Meta */}
      <div
        className="grid gap-6 mb-10 p-8"
        style={{
          gridTemplateColumns: '1fr 1fr',
          background: 'var(--card)',
          border: '1px solid var(--border)',
        }}
      >
        <div>
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: '0.12em',
              color: 'var(--accent)',
            }}
          >
            Role
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink)' }}>{details.role}</p>
        </div>
        <div>
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: '0.12em',
              color: 'var(--accent)',
            }}
          >
            Timeline
          </p>
          <p style={{ fontSize: 15, color: 'var(--ink)' }}>{details.timeline}</p>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {details.github && (
            <a
            href={details.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, letterSpacing: '0.08em',
              color: 'var(--paper)',
              background: 'var(--accent)',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none', textTransform: 'uppercase',
            }}
            className="hover:[background:var(--accent-hover)]"
          >
            GitHub ↗
          </a>
        )}
        {details.live && (
            <a
            href={details.live}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, letterSpacing: '0.08em',
              color: 'var(--ink)',
              border: '1px solid var(--border)',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none', textTransform: 'uppercase',
            }}
            className="hover:[border-color:var(--accent)] hover:[color:var(--accent)]"
          >
            Live Site ↗
          </a>
        )}
      </div>
    </section>
  )
}