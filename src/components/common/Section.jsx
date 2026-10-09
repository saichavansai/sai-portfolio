import Reveal from './Reveal';

/** Shared section wrapper with a consistent heading. */
export default function Section({ id, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`} aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <h2 id={`${id}-title`} className="section-title">
            <span className="bracket" aria-hidden="true">{'{ '}</span>
            {title}
            <span className="bracket" aria-hidden="true">{' }'}</span>
          </h2>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
