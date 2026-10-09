import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import Section from '../common/Section';
import Reveal from '../common/Reveal';
import { contactDetails } from '../../data/portfolioData';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const iconMap = { email: FaEnvelope, phone: FaPhoneAlt, location: FaMapMarkerAlt, linkedin: FaLinkedinIn };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const empty = { name: '', email: '', subject: '', message: '' };

const fields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', type: 'textarea' },
];

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Enter your name.';
  if (!v.email.trim()) e.email = 'Enter your email address.';
  else if (!emailRe.test(v.email)) e.email = 'Enter a valid email, like name@example.com.';
  if (!v.subject.trim()) e.subject = 'Add a subject.';
  
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const update = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    if (status !== 'sending') setStatus('idle');
    if (touched[name]) setErrors(validate(next));
  };

  const onBlur = (name) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(found).length) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS keys missing. Check your .env file and restart the dev server.');
      setStatus('error');
      return;
    }

    // Keys must match the {{variables}} in your EmailJS template
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      subject: values.subject,
      message: values.message,
    };

    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, { publicKey: PUBLIC_KEY });
      setStatus('success');
      setValues(empty);
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const statusText = {
    sending: 'Sending your message...',
    success: 'Message sent. Thank you, I will get back to you soon.',
    error: 'Message could not be sent. Please try again, or email me directly.',
  }[status];

  return (
    <Section id="contact" title="Contact">
      <div className="contact-grid">
        <Reveal className="contact-info">
          <h3 className="contact-title">Let's Build Something Great Together.</h3>
          <p>Have an idea, project, or opportunity? I'd love to connect and discuss how we can turn it into something meaningful.</p>
          <ul className="contact-list">
            {contactDetails.map(({ label, value, href, icon }) => {
              const Icon = iconMap[icon];
              const external = href && /^https?:/.test(href);
              const inner = (
                <>
                  <span className="contact-icon"><Icon aria-hidden="true" /></span>
                  <span><small>{label}</small><strong>{value}</strong></span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{inner}</a>
                  ) : (
                    <div className="contact-static">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="card glass contact-form" onSubmit={onSubmit} noValidate>
            {fields.map(({ name, label, type, autoComplete }) => {
              const id = `field-${name}`;
              const error = touched[name] && errors[name];
              const common = {
                id,
                name,
                value: values[name],
                placeholder: ' ',
                autoComplete,
                disabled: status === 'sending',
                'aria-invalid': error ? 'true' : 'false',
                'aria-describedby': error ? `${id}-error` : undefined,
                onChange: (e) => update(name, e.target.value),
                onBlur: () => onBlur(name),
              };
              return (
                <div key={name} className={`field${error ? ' has-error' : ''}`}>
                  {type === 'textarea' ? <textarea rows="5" {...common} /> : <input type={type} {...common} />}
                  <label htmlFor={id}>{label}</label>
                  {error && <p id={`${id}-error`} className="error-text" role="alert">{error}</p>}
                </div>
              );
            })}
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              <FiSend aria-hidden="true" />
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            </button>
            <p className={`form-status${status === 'error' ? ' is-error' : ''}`} role="status">{statusText}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
