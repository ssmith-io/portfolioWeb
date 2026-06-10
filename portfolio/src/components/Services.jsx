import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { services } from '../data/content'

function ServiceCard({ icon, title, description, items }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="p-10 transition-all duration-200"
      style={{
        background: 'var(--ink)',
        borderTop: `3px solid ${hovered ? 'var(--accent)' : 'transparent'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="block text-3xl mb-6" aria-hidden="true">{icon}</span>

      <div
        className="mb-4"
        style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--paper)' }}
      >
        {title}
      </div>

      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
        {description}
      </p>

      <ul className="mt-6 flex flex-col gap-2 list-none p-0 m-0">
        {items.map((item) => (
          <li
            key={item}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}
          >
            <span style={{ color: 'var(--accent)', marginRight: 4 }}>→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <section className="px-12 py-28" style={{ background: 'var(--ink)' }} id="services">
      <SectionHeader
        tag="// What I Do"
        title="Services"
        count={`0${services.length} offerings`}
        light
      />
      <div
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'rgba(255,255,255,0.08)',
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  )
}
