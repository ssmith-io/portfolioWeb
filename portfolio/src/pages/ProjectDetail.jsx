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

  const { title, tags, type, link, details } = project

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

      {/* Key Features */}
      <div className="mb-14">
      <p
        className="uppercase mb-5"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          letterSpacing: "0.12em",
          color: "var(--accent)",
        }}
      >
        Key Features
      </p>

        <div className="space-y-5">
          {details.features.map((feature) => (
            <div key={feature.description} className="flex items-start gap 3">
              <span
                className="shrink-0"
                style={{
                  color: "var(--accent)",
                  marginTop: "2px",
                  fontSize: "0.8rem",
                  marginRight: "0.75rem",
                }}
              >
                ♡
              </span>
              <p
                style={{
                  fontsize: 10,
                  color: "var(--mid)",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Highlights */}
      <div className="mb-14">
      <p
        className="uppercase mb-5"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.12em",
          color: "var(--accent)",
        }}
      >
        Technical Highlights
      </p>

      <div className="space-y-5">
        {details.highlights.map((highlight) => (
          <div key={highlight.description} className="flex items-start gap 3">
            <span
                className="shrink-0"
                style={{
                  color: "var(--accent)",
                  marginTop: "2px",
                  fontSize: "0.8rem",
                  marginRight: "0.75rem",
                }}
              >
                ♡
              </span>
            <p
              style={{
                color: "var(--mid)",
                lineHeight: 1.7,
              }}
            >
              {highlight.description}
            </p>
          </div>
        ))}
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
        {link && (
            <a
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, letterSpacing: '0.08em',
              color: 'var(--accent)',
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