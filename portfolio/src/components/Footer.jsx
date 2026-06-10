import { siteConfig } from '../data/content'

export default function Footer() {
  const { logo, socials } = siteConfig
  const year = new Date().getFullYear()

  return (
    <footer
      className="flex items-center justify-between px-12 py-12"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <span
        style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'var(--accent)' }}
      >
        {logo}
      </span>

      <span style={{ fontSize: 13, color: 'var(--mid)' }}>
        © {year} {siteConfig.name}
      </span>

      <div className="flex gap-8">
        {Object.entries(socials).map(([label, href]) => (
          <a
            key={label}
            href={href}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.06em',
              color: 'var(--mid)',
              textDecoration: 'none',
              textTransform: 'capitalize',
            }}
            className="transition-colors duration-200 hover:[color:var(--ink)]"
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </a>
        ))}
      </div>
    </footer>
  )
}
