import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { education } from '../../data/portfolioData';

export default function Education() {
  return (
    <Section id="education" title="Education">
      {education.map(({ degree, institution, graduation, icon: Icon }) => (
        <Reveal as="article" key={degree} className="card glass edu-card">
          <span className="edu-icon"><Icon aria-hidden="true" /></span>
          <div>
            <h3>{degree}</h3>
            <p className="company">{institution}</p>
            <p className="mono muted">Graduation: {graduation}</p>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}
