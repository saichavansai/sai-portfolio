import { motion } from 'framer-motion';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { skillGroups } from '../../data/portfolioData';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies and tools I work with.">
      <div className="skills-grid">
        {skillGroups.map(({ title, icon: GroupIcon, skills }, gi) => (
          <Reveal key={title} delay={gi * 0.06} className="skill-group">
            <h3 className="group-title"><GroupIcon aria-hidden="true" />{title}</h3>
            <ul className="skill-list">
              {skills.map(({ name, icon: Icon }) => (
                <motion.li key={name} className="skill-card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Icon aria-hidden="true" />
                  <span>{name}</span>
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
