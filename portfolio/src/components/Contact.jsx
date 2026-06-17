import { Link } from 'react-router-dom'
import { personalData } from '../data/content'

export default function Contact() {
  return (
    <section
      className="px-12 py-28 text-center"
      style={{ background: 'var(--accent)' }}
      id="contact"
    >
      <p
        className="uppercase mb-4"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.12em',
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
          fontWeight: 800, lineHeight: 1,
          letterSpacing: '-0.03em', color: 'white',
        }}
      >
        Got a project in mind?
      </h2>

      <p
        className="mb-12"
        style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }}
      >
        {personalData.availability}. Let's build something great.
      </p>

      <div className="flex gap-4 justify-center">
        <a
          href={`mailto:${personalData.email}`}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13, letterSpacing: '0.1em',
            color: 'var(--accent)', background: 'white',
            border: '2px solid white',
            padding: '1rem 2.5rem',
            textDecoration: 'none', textTransform: 'uppercase',
            display: 'inline-block',
          }}
          className="transition-all duration-200 hover:[background:var(--ink)] hover:[border-color:var(--ink)] hover:[color:white]"
        >
          Email Me
        </a>
        <Link
          to="/contact"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 13, letterSpacing: '0.1em',
            color: 'white',
            border: '2px solid white',
            padding: '1rem 2.5rem',
            textDecoration: 'none', textTransform: 'uppercase',
            display: 'inline-block',
          }}
          className="transition-all duration-200 hover:[background:white] hover:[color:var(--accent)]"
        >
          Contact Form →
        </Link>
      </div>
    </section>
  )
}