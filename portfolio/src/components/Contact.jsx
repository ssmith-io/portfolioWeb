import { siteConfig } from '../data/content'

export default function Contact() {
  return (
    <section
      className="px-12 py-32 text-center"
      style={{ background: 'var(--accent)' }}
      id="contact"
    >
      <p
        className="mb-4 uppercase"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.6)',
        }}
      >
        // Get In Touch
      </p>

      <h2
        className="mb-6"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.03em',
          color: 'white',
        }}
      >
        Got a project in mind?
      </h2>

      <p
        className="mb-12"
        style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}
      >
        {siteConfig.availability}. Let's build something great.
      </p>

      <a
        href={`mailto:${siteConfig.email}`}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13,
          letterSpacing: '0.1em',
          color: 'var(--accent)',
          background: 'white',
          border: '2px solid white',
          display: 'inline-block',
        }}
        className="no-underline font-medium uppercase px-10 py-4 transition-all duration-200 hover:[background:var(--ink)] hover:[border-color:var(--ink)] hover:[color:white]"
      >
        Send a Message
      </a>
    </section>
  )
}
