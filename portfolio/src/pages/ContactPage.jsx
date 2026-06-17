import { useState } from 'react'
import { Link } from 'react-router-dom'
import { personalData } from '../data/content'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Opens email client with form data pre-filled
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="px-12 py-28" style={{ minHeight: '100vh', maxWidth: 800, margin: '0 auto' }}>

      {/* Back link */}
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
        // Get In Touch
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
        Contact Me
      </h1>

      <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

      <div className="grid gap-16" style={{ gridTemplateColumns: '1fr 1fr' }}>

        {/* Left — form */}
        <div>
          {submitted ? (
            <div
              className="p-8"
              style={{ background: 'var(--card)', border: '1px solid var(--accent)' }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.25rem', fontWeight: 700,
                  color: 'var(--ink)', marginBottom: '0.75rem',
                }}
              >
                Message sent!
              </p>
              <p style={{ fontSize: 15, color: 'var(--mid)' }}>
                Thanks for reaching out. I'll get back to you as soon as I can.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--mid)',
                  }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--ink)',
                    padding: '0.75rem 1rem',
                    fontSize: 15,
                    outline: 'none',
                    fontFamily: "'Instrument Sans', sans-serif",
                  }}
                  className="focus:[border-color:var(--accent)] transition-colors duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--mid)',
                  }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--ink)',
                    padding: '0.75rem 1rem',
                    fontSize: 15,
                    outline: 'none',
                    fontFamily: "'Instrument Sans', sans-serif",
                  }}
                  className="focus:[border-color:var(--accent)] transition-colors duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 11, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--mid)',
                  }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    color: 'var(--ink)',
                    padding: '0.75rem 1rem',
                    fontSize: 15,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: "'Instrument Sans', sans-serif",
                  }}
                  className="focus:[border-color:var(--accent)] transition-colors duration-200"
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12, letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--paper)',
                  background: 'var(--accent)',
                  border: 'none',
                  padding: '1rem 2rem',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                }}
                className="hover:[background:var(--accent-hover)] transition-colors duration-200"
              >
                Send Message →
              </button>
            </div>
          )}
        </div>

        {/* Right — info */}
        <div className="flex flex-col gap-8">
          <div>
            <p
              className="uppercase mb-3"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, letterSpacing: '0.12em',
                color: 'var(--accent)',
              }}
            >
              // Email
            </p>
            <a
              href={`mailto:${personalData.email}`}
              style={{ fontSize: 16, color: 'var(--ink)', textDecoration: 'none' }}
              className="hover:[color:var(--accent)] transition-colors duration-200"
            >
              {personalData.email}
            </a>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <p
              className="uppercase mb-4"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, letterSpacing: '0.12em',
                color: 'var(--accent)',
              }}
            >
              // Elsewhere
            </p>
            <div className="flex flex-col gap-3">
              {Object.entries(personalData.socials).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 13, letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--mid)', textDecoration: 'none',
                  }}
                  className="hover:[color:var(--accent)] transition-colors duration-200"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
            <p
              className="uppercase mb-3"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11, letterSpacing: '0.12em',
                color: 'var(--accent)',
              }}
            >
              // Availability
            </p>
            <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7 }}>
              {personalData.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}