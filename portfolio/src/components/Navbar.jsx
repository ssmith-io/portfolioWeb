import { useState } from 'react'
import { Link } from 'react-router-dom'
import { personalData } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border)' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
    >
      <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
        <img src={personalData.logo} alt="Logo" className="h-8 w-auto" />
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-10 list-none m-0 p-0">
        <li>
          <Link to="/about" style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 13, letterSpacing: '0.08em' }} className="no-underline uppercase transition-colors duration-200 hover:[color:var(--accent-hover)]">About</Link>
        </li>
        <li>
          <Link to="/projects" style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 13, letterSpacing: '0.08em' }} className="no-underline uppercase transition-colors duration-200 hover:[color:var(--accent-hover)]">Projects</Link>
        </li>
        <li>
          <Link to="/contact" style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 13, letterSpacing: '0.08em' }} className="no-underline uppercase transition-colors duration-200 hover:[color:var(--accent-hover)]">Contact</Link>
        </li>
      </ul>

      <Link
        to="/contact"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12, letterSpacing: '0.08em',
          color: 'var(--paper)', background: 'var(--accent)',
          border: '1.5px solid var(--accent)',
        }}
        className="hidden md:inline-block no-underline font-medium uppercase px-5 py-2 transition-all duration-200 hover:[background:var(--accent-hover)] hover:[border-color:var(--accent-hover)]"
      >
        Hire Me
      </Link>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span style={{ width: 22, height: 2, background: 'var(--ink)', transition: 'transform 0.2s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
        <span style={{ width: 22, height: 2, background: 'var(--ink)', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
        <span style={{ width: 22, height: 2, background: 'var(--ink)', transition: 'transform 0.2s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden flex flex-col items-center gap-6 py-8 absolute top-full left-0 right-0"
          style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border)' }}
        >
          <Link to="/about" onClick={() => setOpen(false)} style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 14, letterSpacing: '0.08em' }} className="no-underline uppercase">About</Link>
          <Link to="/projects" onClick={() => setOpen(false)} style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 14, letterSpacing: '0.08em' }} className="no-underline uppercase">Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)} style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 14, letterSpacing: '0.08em' }} className="no-underline uppercase">Contact</Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: '0.08em', color: 'var(--paper)', background: 'var(--accent)' }}
            className="no-underline font-medium uppercase px-5 py-2"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}