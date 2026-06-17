import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'TypeScript / JavaScript', level: 85, label: 'Advanced' },
  { name: 'React', level: 80, label: 'Advanced' },
  { name: 'Angular', level: 75, label: 'Proficient' },
  { name: 'Python', level: 70, label: 'Proficient' },
  { name: 'C++', level: 65, label: 'Proficient' },
  { name: 'SQL / PostgreSQL', level: 70, label: 'Proficient' },
  { name: 'Full-Stack Web Dev', level: 80, label: 'Advanced' },
  { name: 'UI / Graphic Design', level: 75, label: 'Proficient' },
  { name: 'Git / Azure DevOps', level: 75, label: 'Proficient' },
  { name: 'Mobile Development', level: 30, label: 'Learning' },
]

function getLevelColor(level) {
  if (level >= 80) return '#f2a7d8'      // accent — advanced
  if (level >= 60) return '#c97ab8'      // mid pink — proficient
  return '#7a5f8a'                        // muted purple — learning
}

function getLevelTitle(level) {
  if (level >= 80) return 'LVL 4 — ADVANCED'
  if (level >= 60) return 'LVL 3 — PROFICIENT'
  if (level >= 40) return 'LVL 2 — FAMILIAR'
  return 'LVL 1 — LEARNING'
}

function SkillBar({ name, level, label, animate }) {
  return (
    <div className="flex flex-col gap-1">
      {/* Top row */}
      <div className="flex justify-between items-center">
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12, letterSpacing: '0.06em',
            color: 'var(--ink)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10, letterSpacing: '0.1em',
            color: getLevelColor(level),
          }}
        >
          {getLevelTitle(level)}
        </span>
      </div>

      {/* XP bar track */}
      <div
        style={{
          height: 12,
          background: 'var(--paper)',
          border: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Segmented lines overlay */}
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', gap: 2, padding: 2,
            zIndex: 1, pointerEvents: 'none',
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: 'transparent',
                borderRight: i < 19 ? '1px solid rgba(0,0,0,0.3)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Fill */}
        <div
          style={{
            height: '100%',
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${getLevelColor(level)}99, ${getLevelColor(level)})`,
            boxShadow: `0 0 8px ${getLevelColor(level)}88`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative', zIndex: 0,
          }}
        />
      </div>

      {/* XP label */}
      <div
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10, letterSpacing: '0.08em',
          color: 'var(--mid)',
        }}
      >
        {level} / 100 XP
      </div>
    </div>
  )
}

export default function SkillBars() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  // Animate when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Header */}
      <div
        className="flex items-center gap-4 mb-8 p-3"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--accent)',
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>⚔️</span>
        <div>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'var(--accent)',
              marginBottom: 2,
            }}
          >
            // Skill Tree
          </p>
          <p style={{ fontSize: 13, color: 'var(--mid)' }}>
            Sarah Smith · Class: Full-Stack Developer · Specialization: Frontend
          </p>
        </div>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-5">
        {skills.map((skill) => (
          <SkillBar key={skill.name} {...skill} animate={animate} />
        ))}
      </div>

      {/* Legend */}
      <div
        className="flex gap-6 mt-8 p-4"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
        }}
      >
        {[
          { color: '#f2a7d8', label: 'LVL 4 — Advanced' },
          { color: '#c97ab8', label: 'LVL 3 — Proficient' },
          { color: '#7a5f8a', label: 'LVL 1 — Learning' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div style={{ width: 10, height: 10, background: color, boxShadow: `0 0 6px ${color}` }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10, letterSpacing: '0.08em',
                color: 'var(--mid)',
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}