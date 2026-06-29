import { Link } from 'react-router-dom'
import SectionHeader from './SectionHeader'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section className="px-12 py-28" id="projects">
      <SectionHeader
        tag="// Selected Work"
        title="Projects"
        count={`0${projects.length} cases`}
      />

      {/* Preview list */}
      <div
        className="flex flex-col mb-12"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="flex items-center justify-between py-6"
            style={{ borderBottom: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-6">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11, color: 'var(--border)',
                  letterSpacing: '0.1em',
                }}
              >
                {project.num}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--ink)', marginBottom: 4,
                  }}
                >
                  {project.title}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, color: 'var(--mid)',
                    letterSpacing: '0.06em',
                  }}
                >
                  {project.type}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10, letterSpacing: '0.06em',
                    padding: '0.25rem 0.6rem',
                    border: '1px solid var(--border)',
                    color: 'var(--mid)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link
        to="/projects"
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
        View All Projects →
      </Link>
    </section>
  )
}