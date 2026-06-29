import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/content'

function ProjectCard({ project, index, total, mousePos, containerRef }) {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const offset = index - Math.floor(total / 2)
  const baseRotate = offset * 8
  const baseY = Math.abs(offset) * 10
  const baseX = offset * 60

  // Cursor influence
  const cursorInfluenceX = mousePos.x * 6 * (index / total - 0.5)
  const cursorInfluenceY = mousePos.y * 4
  const cursorRotate = mousePos.x * 5 * (offset / total)

  const rotate = hovered ? 0 : baseRotate + cursorRotate
  const translateX = hovered ? 0 : baseX + cursorInfluenceX
  const translateY = hovered ? -30 : baseY + cursorInfluenceY
  const scale = hovered ? 1.05 : index === Math.floor(total / 2) ? 1 : 0.92
  const zIndex = hovered ? 100 : total - Math.abs(offset)

  return (
    <div
      onClick={() => navigate(`/projects/${project.id}`)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'absolute',
        width: 280,
        cursor: 'pointer',
        transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
        transition: hovered
          ? 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
          : 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex,
        transformOrigin: 'bottom center',
      }}
    >
      {/* Card */}
      <div
        style={{
          background: hovered ? 'var(--card)' : '#1e1c24',
          border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: hovered
            ? `0 20px 60px rgba(0,0,0,0.6), 0 0 20px ${hovered ? 'var(--accent)' : 'transparent'}44`
            : '0 8px 32px rgba(0,0,0,0.4)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        {/* Image area */}
        <div
          style={{
            height: 160,
            background: 'var(--paper)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '3rem',
                fontWeight: 800,
                color: 'var(--border)',
                userSelect: 'none',
              }}
            >
              {project.num}
            </div>
          )}

          {/* Hover overlay */}
          {hovered && (
            <div
              style={{
                position: 'absolute', inset: 0,
                background: 'rgba(242,167,216,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11, letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  background: 'var(--paper)',
                  padding: '0.4rem 0.75rem',
                  border: '1px solid var(--accent)',
                }}
              >
                View Project ↗
              </span>
            </div>
          )}
        </div>

        {/* Card content */}
        <div style={{ padding: '1.25rem' }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10, letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            {project.type}
          </p>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.1rem', fontWeight: 700,
              color: 'var(--ink)', lineHeight: 1.2,
              marginBottom: '0.75rem',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: 13, lineHeight: 1.6,
              color: 'var(--mid)',
              marginBottom: '1rem',
            }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9, letterSpacing: '0.06em',
                  padding: '0.2rem 0.5rem',
                  border: '1px solid var(--border)',
                  color: 'var(--mid)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectDeck() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        height: 420,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
          mousePos={mousePos}
          containerRef={containerRef}
        />
      ))}
    </div>
  )
}