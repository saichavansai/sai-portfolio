import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { profile, heroBadges } from '../../data/portfolioData';
 
// Auto-detect src/assets/images/profile.(jpg|jpeg|png|webp). Empty object if none exists.
const found = import.meta.glob('../../assets/images/profile.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
});
const profileImage = Object.values(found)[0] || null;
 
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
 
export default function Hero() {
  const socials = Object.values(profile.socials).filter((s) => s.url);
 
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-bg" />
        <div className="orb orb-blue" />
        <div className="orb orb-violet" />
      </div>
 
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={item} className="hero-tag mono">{'< > /_ Code • Build • Solve'}</motion.p>
          <motion.h1 variants={item} className="hero-title">{profile.headline}</motion.h1>
          <motion.p variants={item} className="hero-name">
            <strong>{profile.name}</strong>
            <span>{profile.title}</span>
          </motion.p>
          <motion.p variants={item} className="hero-intro">{profile.intro}</motion.p>
          <motion.div variants={item} className="hero-cta">
            <Button href="#projects" icon={FiArrowDown}>View My Work</Button>
            <Button href="#contact" variant="ghost" icon={FiMail}>Let's Connect</Button>
          </motion.div>
          <motion.ul variants={item} className="badge-row" aria-label="Core technologies">
            {heroBadges.map((b) => <li key={b}><Badge>{b}</Badge></li>)}
          </motion.ul>
          {socials.length > 0 && (
            <motion.ul variants={item} className="social-row" aria-label="Social links">
              {socials.map(({ label, url, icon: Icon }) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </motion.div>
 
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="avatar-wrap">
            <div className="avatar-glow" aria-hidden="true" />
            <div className="avatar">
              {profileImage ? (
                <img src={profileImage} alt={`Portrait of ${profile.name}`} width="320" height="320" />
              ) : (
                <div className="avatar-placeholder" role="img" aria-label="Profile picture placeholder">
                  <span className="avatar-initials">{profile.initials}</span>
                  <span className="avatar-note mono">PROFILE PHOTO PLACEHOLDER</span>
                </div>
              )}
            </div>
          </div>
 
          <div className="terminal" aria-hidden="true">
            <div className="terminal-bar"><i /><i /><i /><span className="mono">developer.js</span></div>
            <pre className="mono">
{`const sai = {
  role: "MERN Developer",
  loves: ["coding", "problem solving"],
  status: "building"
};`}<span className="cursor">▍</span>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 



