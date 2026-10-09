import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../../data/portfolioData';

export default function Footer() {
  const socials = Object.values(profile.socials).filter((s) => s.url);
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">MERN Stack Developer</p>
        </div>
        <ul className="social-row" aria-label="Social links">
          {socials.map(({ label, url, icon: Icon }) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon aria-hidden="true" /></a>
            </li>
          ))}
        </ul>
        <a href="#home" className="to-top"><FiArrowUp aria-hidden="true" /> Back to Top</a>
      </div>
      <p className="container copyright muted">© 2026 {profile.name}. All rights reserved.</p>
    </footer>
  );
}
