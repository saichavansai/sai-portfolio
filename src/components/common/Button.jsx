/** Renders an <a> when href is given, otherwise a <button>. */
export default function Button({ href, variant = 'primary', children, icon: Icon, disabled, ...rest }) {
  const className = `btn btn-${variant}${disabled ? ' is-disabled' : ''}`;
  const content = (
    <>
      {Icon && <Icon aria-hidden="true" />}
      <span>{children}</span>
    </>
  );
  if (href && !disabled) {
    const external = /^https?:/.test(href);
    return (
      <a
        className={className}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={className} disabled={disabled} aria-disabled={disabled} {...rest}>
      {content}
    </button>
  );
}
