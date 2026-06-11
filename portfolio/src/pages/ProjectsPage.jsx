import { Link } from 'react-router-dom'
import { projects } from '../data/content'
import SectionHeader from '../components/SectionHeader'

export default function ProjectsPage() {
  return (
    <section className="px-12 py-28" style={{ minHeight: '100vh' }}>
      <SectionHeader
        tag="// All Work"
        title="Projects"
        count={`0${projects.length} cases`}
      />
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="block relative overflow-hidden p-10 no-underline transition-all duration-300 group"
            style={{ background: 'var(--card)', color: 'var(--ink)' }}
          >
            <div
              className="mb-6"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, letterSpacing: '0.1em',
                color: 'var(--border)',
              }}
            >
              {project.num} —
            </div>
            <div
              className="mb-4"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.1,
              }}
            >
              {project.title}
            </div>
            <p
              className="mb-6"
              style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--mid)' }}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10, letterSpacing: '0.08em',
                    padding: '0.3rem 0.75rem',
                    border: '1px solid var(--border)',
                    color: 'var(--mid)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12, color: 'var(--mid)',
              }}
            >
              {project.type}
            </div>
            <span
              style={{
                position: 'absolute', bottom: '2.5rem', right: '2.5rem',
                fontSize: '1.5rem', color: 'var(--accent)',
              }}
            >
              ↗
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}