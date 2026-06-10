import SectionHeader from './SectionHeader'
import { processSteps } from '../data/content'

export default function Process() {
  return (
    <section className="px-12 py-28">
      <SectionHeader
        tag="// How I Work"
        title="Process"
        count={`0${processSteps.length} steps`}
      />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${processSteps.length}, 1fr)`,
          border: '1px solid var(--border)',
        }}
      >
        {processSteps.map((step, i) => (
          <div
            key={step.num}
            className="p-10"
            style={{
              borderRight: i < processSteps.length - 1 ? '1px solid var(--border)' : 'none',
            }}
          >
            <div
              className="mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '4rem',
                fontWeight: 800,
                lineHeight: 1,
                color: 'var(--border)',
              }}
            >
              {step.num}
            </div>
            <div
              className="mb-3"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.1rem', fontWeight: 700 }}
            >
              {step.title}
            </div>
            <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.65 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
