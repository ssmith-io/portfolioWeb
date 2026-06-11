import { personalData } from '../data/content'

export default function Navbar() {
  return (
    <nav
      style={{ background: 'var(--paper)', borderBottom: '1px solid var(--border)' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5"
    >
      <a
        href="#"
        style={{ fontFamily: "'DM Mono', monospace", color: 'var(--accent)', fontSize: 13, letterSpacing: '0.06em' }}
        className="font-medium no-underline"
      >
        {personalData.logo}
      </a>

      <ul className="flex gap-10 list-none m-0 p-0">
        {['About', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              style={{ fontFamily: "'DM Mono', monospace", color: 'var(--mid)', fontSize: 13, letterSpacing: '0.08em' }}
              className="no-underline uppercase transition-colors duration-200 hover:[color:var(--accent-hover)]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          letterSpacing: '0.08em',
          color: 'var(--paper)',
          background: 'var(--accent)',
          border: '1.5px solid var(--accent)',
        }}
        className="no-underline font-medium uppercase px-5 py-2 transition-all duration-200 hover:[background:var(--accent-hover)] hover:[border-color:var(--accent-hover)]"
      >
        Hire Me
      </a>
    </nav>
  )
}