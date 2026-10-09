import { FiCheck } from 'react-icons/fi';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { service } from '../../data/portfolioData';

export default function Services() {
  return (
    <Section id="services" title="Services">
      <Reveal className="card glass service-card">
        <div className="service-main">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul className="cap-list">
            {service.capabilities.map((c) => (
              <li key={c}><FiCheck aria-hidden="true" />{c}</li>
            ))}
          </ul>
        </div>

        <div className="stack-visual" role="img" aria-label="MERN stack: MongoDB, Express.js, React.js, Node.js">
          {service.stack.map(({ letter, name, icon: Icon }, i) => (
            <div key={name} className="stack-node">
              <Icon aria-hidden="true" />
              <strong className="mono">{letter}</strong>
              <span>{name}</span>
              {i < service.stack.length - 1 && <i className="stack-link" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
