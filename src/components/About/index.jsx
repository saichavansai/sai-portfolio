import { FiTerminal } from 'react-icons/fi';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { about } from '../../data/portfolioData';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-grid">
        <Reveal className="about-text">
          <p>{about.text}</p>
          <ul className="check-list">
            {about.highlights.map(({ label, icon: Icon }) => (
              <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="card glass dev-card">
          <div className="terminal-bar"><i /><i /><i /><span className="mono"><FiTerminal aria-hidden="true" /> about.sh</span></div>
          <ul className="role-list">
            {about.roles.map((r) => (
              <li key={r}>
                <span className="mono prompt">$</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
