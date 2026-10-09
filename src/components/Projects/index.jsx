import { FiCode } from 'react-icons/fi';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { projects } from '../../data/portfolioData';

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Featured work.">
      {projects.map((p) => (
        <Reveal as="article" key={p.name} className="card glass project">
          <div className="project-body">
            <h3>{p.name}</h3>
            <p>{p.description}</p>

            <ul className="stat-row" aria-label="Highlights">
              {p.stats.map((s) => (
                <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
              ))}
            </ul>

            <h4 className="mini-title">Key contributions</h4>
            <ul className="feature-list">
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>

            <ul className="badge-row" aria-label="Technologies">
              {p.tech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}
            </ul>

            <div className="project-actions">
             
              {p.codeUrl && <Button href={p.codeUrl} variant="ghost" icon={FiCode}>View Code</Button>}
            </div>
            {!p.liveUrl && <p className="hint mono">Live URL not provided yet - add it in portfolioData.js.</p>}
          </div>
        </Reveal>
      ))}
    </Section>
  );
}