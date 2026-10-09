import Section from '../common/Section';
import Reveal from '../common/Reveal';
import Badge from '../common/Badge';
import { experience } from '../../data/portfolioData';

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <Reveal as="li" key={`${job.company}-${job.role}`} className="timeline-item">
            <span className={`timeline-dot${job.current ? ' is-current' : ''}`} aria-hidden="true" />
            <article className="card glass">
              <header className="card-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="meta">
                  {job.current && <Badge variant="live">Current</Badge>}
                  <span className="mono muted">Since {job.start}</span>
                </div>
              </header>
              <p>{job.description}</p>
              <ul className="badge-row" aria-label="Technologies">
                {job.tech.map((t) => <li key={t}><Badge>{t}</Badge></li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
