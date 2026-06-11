import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { projects } from '../data/content'
import { Link } from 'react-router-dom'

function ProjectCard({ id, num, title, description, tags, type }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={`/projects/${id}`}
      className="project-card block relative overflow-hidden p-10 transition-all duration-300 no-underline"
      style={{
        background: hovered ? 'var(--ink)' : 'var(--card)',
        color: hovered ? 'var(--paper)' : 'var(--ink)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="mb-6"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.1em',
          color: hovered ? 'var(--accent)' : 'var(--border)',
        }}
      >
        {num} —
      </div>

      <div
        className="mb-4"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}
      >
        {title}
      </div>

      <p
        className="mb-6"
        style={{ fontSize: 14, lineHeight: 1.65, color: hovered ? 'rgba(255,255,255,0.55)' : 'var(--mid)' }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.08em',
              padding: '0.3rem 0.75rem',
              border: `1px solid ${hovered ? 'rgba(255,255,255,0.2)' : 'var(--border)'}`,
              color: hovered ? 'rgba(255,255,255,0.5)' : 'var(--mid)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          letterSpacing: '0.04em',
          color: hovered ? 'rgba(255,255,255,0.4)' : 'var(--mid)',
        }}
      >
        {type}
      </div>

      <span
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          fontSize: '1.5rem',
          color: 'var(--accent)',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(0,0)' : 'translate(-6px, 6px)',
          transition: 'opacity 0.25s, transform 0.25s',
        }}
      >
        ↗
      </span>
    </Link>
  )
}

export default function Projects() {
  return (
    <section className="px-12 py-28" id="work">
      <SectionHeader
        tag="// Selected Work"
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
          <ProjectCard key={project.num} {...project} />
        ))}
      </div>
    </section>
  )
}