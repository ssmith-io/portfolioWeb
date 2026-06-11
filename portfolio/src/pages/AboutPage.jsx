import { Link } from 'react-router-dom'
import { personalData, skills } from '../data/content'

export default function AboutPage() {
  return (
    <section className="px-12 py-28" style={{ minHeight: '100vh', maxWidth: 800, margin: '0 auto' }}>

      <Link
        to="/"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12, letterSpacing: '0.08em',
          color: 'var(--mid)', textDecoration: 'none',
          textTransform: 'uppercase',
          display: 'inline-block', marginBottom: '3rem',
        }}
        className="hover:[color:var(--accent)]"
      >
        ← Back
      </Link>

      <p
        className="uppercase mb-3"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        // Who I Am
      </p>

      <h1
        className="mb-10"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.03em', color: 'var(--ink)',
        }}
      >
        About Me
      </h1>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Bio */}
      <div className="flex flex-col gap-6 mb-16">
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          I'm <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>{personalData.name}</strong>, a freelance software developer. I specialize in building the parts that users see — and the infrastructure that keeps it all running.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          After 6 years working inside product teams at startups and scale-ups, I went independent to work with a wider range of companies on the problems I find most interesting: fast frontends, resilient cloud systems, and the bridge between design and engineering.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          I care about <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>outcomes, not just outputs</strong>. That means understanding your business context, communicating clearly throughout, and delivering code that your team can own after I'm gone.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          Available for new projects. If your timeline is tight, reach out early.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Skills */}
      <p
        className="uppercase mb-6"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        // Skills & Tools
      </p>

      <div className="flex flex-wrap gap-2 mb-16">
        {skills.map((skill) => (
          <span
            key={skill}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12, letterSpacing: '0.06em',
              padding: '0.4rem 1rem',
              border: '1px solid var(--border)',
              background: 'var(--card)',
              color: 'var(--mid)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      {/* Currently */}
      <p
        className="uppercase mb-6"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
          color: 'var(--accent)',
        }}
      >
        // Currently
      </p>

      <div
        className="flex flex-col gap-4 mb-16 p-8"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        {[
          { label: 'Working on', value: 'This portfolio and my first freelance clients' },
          { label: 'Learning', value: 'Write what you are currently studying' },
          { label: 'Reading', value: 'Write what you are reading' },
          { label: 'Available for', value: personalData.availability },
        ].map(({ label, value }, i, arr) => (
          <div
            key={label}
            className="flex gap-6"
            style={{
              borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none',
              paddingBottom: i < arr.length - 1 ? '1rem' : 0,
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12, letterSpacing: '0.06em',
                color: 'var(--accent)', minWidth: 120,
              }}
            >
              {label}
            </span>
            <span style={{ fontSize: 15, color: 'var(--mid)' }}>{value}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem' }}>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)', marginBottom: '1.5rem' }}>
          Interested in working together?
        </p>
        <a
          href={`mailto:${personalData.email}`}
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
          Get In Touch →
        </a>
      </div>

    </section>
  )
}