export default function SectionHeader({ tag, title, count, light = false }) {
  return (
    <div
      className="flex items-end justify-between mb-16 pb-6"
      style={{ borderBottom: `1px solid ${light ? 'rgba(255,255,255,0.1)' : 'var(--border)'}` }}
    >
      <div>
        <p
          className="mb-3 uppercase"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.12em',
            color: light ? 'rgba(255,255,255,0.4)' : 'var(--accent)',
          }}
        >
          {tag}
        </p>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: light ? 'var(--paper)' : 'var(--ink)',
          }}
        >
          {title}
        </h2>
      </div>
      {count && (
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: light ? 'rgba(255,255,255,0.3)' : 'var(--mid)',
            letterSpacing: '0.1em',
          }}
        >
          {count}
        </span>
      )}
    </div>
  )
}
