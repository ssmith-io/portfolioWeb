import { projects } from '../data/content'
import SectionHeader from '../components/SectionHeader'
import ProjectDeck from '../components/ProjectDeck'

export default function ProjectsPage() {
  return (
    <section className="px-12 py-28" style={{ minHeight: '100vh' }}>
      <SectionHeader
        tag="// Selected Work"
        title="Projects"
        count={`0${projects.length} cases`}
      />
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 11, letterSpacing: '0.1em',
          color: 'var(--mid)', marginBottom: '6rem',
          textTransform: 'uppercase',
        }}
      >
        Hover to explore · Click to view
      </p>
      <ProjectDeck />
    </section>
  )
}