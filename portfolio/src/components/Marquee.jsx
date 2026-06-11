import { marqueeItems } from '../data/content'

export default function Marquee() {
  // Duplicate items so the loop is seamless
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden py-4"
      style={{
        background: 'var(--ink)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="animate-marquee flex gap-16" style={{ width: 'max-content' }}>
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 whitespace-nowrap uppercase after:content-['★'] after:text-sm"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: 'var(--paper)',
              '--tw-content': "'★'",
            }}
          >
            {item}
            <span style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
