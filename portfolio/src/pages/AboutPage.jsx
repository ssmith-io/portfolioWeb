import { Link } from 'react-router-dom'
import { personalData, skills } from '../data/content'
import SkillBars from '../components/SkillBars'

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
          I'm <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Sarah Smith</strong>, a Computer Science graduate from the University of Arkansas who got into coding because I loved the idea of turning creativity into something real. To me, software is just another canvas.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          I gravitate toward frontend, full-stack web development, and anything with a strong visual component — I care just as much about how something looks as how it works. I've got a background in graphic design that bleeds into everything I build, and I'm currently expanding into mobile development.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          My internship at J.B. Hunt gave me a taste of what it means to ship real software in a fast-moving environment — consolidating APIs, cutting user flows in half, collaborating across Agile teams. I work independently, communicate clearly, and I don't need hand-holding to get things done.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          Outside of tech you'll find me at the gym, deep in a good book, or curating the perfect playlist. I spent a year DJing for 500+ people weekly — which taught me more about reading a room and performing under pressure than any classroom did.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: 'var(--mid)' }}>
          I'm open to freelance projects and collaboration. If you've got something you want to build, I'd love to hear about it.
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

      <SkillBars />

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem', marginTop: '3rem' }} />

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
          { label: 'Working on', value: 'This portfolio and personal projects.' },
          { label: 'Learning', value: 'Recent Univerity of Arkansas Graduate' },
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