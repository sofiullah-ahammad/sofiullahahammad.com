'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const validateEmail = (val) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(val.trim());
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (email && !validateEmail(email)) {
      setStatus({
        type: 'error',
        message: '⚠️ Invalid email format! Please enter a valid address (e.g. hello@sofiullahahammad.com).'
      });
    } else if (email && validateEmail(email)) {
      setStatus({
        type: 'success',
        message: '✓ Email address verified.'
      });
    } else {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailTouched(true);

    if (!email || !email.trim()) {
      setStatus({
        type: 'error',
        message: '⚠️ Email address is required for verification.'
      });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({
        type: 'error',
        message: '⚠️ Invalid email format! Please enter a valid email address (e.g. hello@sofiullahahammad.com).'
      });
      return;
    }

    setStatus({
      type: 'success',
      message: '✅ Mail verification successful! Your message has been sent.'
    });

    // Reset fields after successful submit
    setTimeout(() => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setEmailTouched(false);
    }, 3000);
  };

  const isEmailInvalid = emailTouched && email && !validateEmail(email);

  const inputStyle = {
    '--framer-input-border-bottom-width': '1px',
    '--framer-input-border-color': 'var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))',
    '--framer-input-border-left-width': '1px',
    '--framer-input-border-radius-bottom-left': '24px',
    '--framer-input-border-radius-bottom-right': '24px',
    '--framer-input-border-radius-top-left': '24px',
    '--framer-input-border-radius-top-right': '24px',
    '--framer-input-border-right-width': '1px',
    '--framer-input-border-style': 'solid',
    '--framer-input-border-top-width': '1px',
    '--framer-input-font-color': 'rgb(255, 255, 255)',
    '--framer-input-icon-color': 'rgb(153, 153, 153)',
    '--framer-input-placeholder-color': 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(5px)',
    WebkitBackdropFilter: 'blur(5px)',
    borderRadius: '24px'
  };

  const emailInputStyle = {
    ...inputStyle,
    '--framer-input-border-color': isEmailInvalid
      ? '#ff4d4f'
      : 'var(--token-d559605d-d2a3-4776-a2c1-0436ceda3b18, rgba(255, 255, 255, 0.15))',
    borderColor: isEmailInvalid ? '#ff4d4f' : undefined
  };

  return (
    <form className="framer-128ybiv" onSubmit={handleSubmit}>
      <div className="framer-zmoe9x">
        <div className="framer-1aoa52h" data-framer-name="First Name">
          <div
            className="framer-jpw4gc"
            data-framer-component-type="RichTextContainer"
            style={{
              '--extracted-r6o4lv': 'var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255))',
              transform: 'none'
            }}
          >
            <p
              className="framer-text framer-styles-preset-d8lgz7"
              data-styles-preset="R1K60oWJQ"
              style={{
                '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255)))'
              }}
            >
              First name
            </p>
          </div>
          <div
            className="framer-form-text-input framer-form-input-wrapper framer-mvnozm framer-form-text-input-type"
            style={inputStyle}
          >
            <input
              type="text"
              name="First name"
              placeholder="Jane"
              className="framer-form-input framer-form-input-empty"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className="framer-10p0xhp" data-framer-name="Last Name">
          <div
            className="framer-21np0l"
            data-framer-component-type="RichTextContainer"
            style={{
              '--extracted-r6o4lv': 'var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255))',
              transform: 'none'
            }}
          >
            <p
              className="framer-text framer-styles-preset-d8lgz7"
              data-styles-preset="R1K60oWJQ"
              style={{
                '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255)))'
              }}
            >
              Last name
            </p>
          </div>
          <div
            className="framer-form-text-input framer-form-input-wrapper framer-r6t0i4 framer-form-text-input-type"
            style={inputStyle}
          >
            <input
              type="text"
              name="Last name"
              placeholder="Smith"
              className="framer-form-input framer-form-input-empty"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="framer-ioqe1j" data-framer-name="Email">
        <div className="framer-11akexm">
          <div
            className="framer-11c6ahm"
            data-framer-component-type="RichTextContainer"
            style={{
              '--extracted-r6o4lv': 'var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255))',
              transform: 'none'
            }}
          >
            <p
              className="framer-text framer-styles-preset-d8lgz7"
              data-styles-preset="R1K60oWJQ"
              style={{
                '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255)))'
              }}
            >
              Email
            </p>
          </div>
          <div
            className="framer-form-text-input framer-form-input-wrapper framer-1en48rw"
            style={emailInputStyle}
          >
            <input
              type="email"
              name="Email"
              placeholder="hello@sofiullahahammad.com"
              className="framer-form-input framer-form-input-empty"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status.type) setStatus({ type: '', message: '' });
              }}
              onBlur={handleEmailBlur}
              required
            />
          </div>
        </div>
        <div className="framer-jpzepa">
          <div
            className="framer-1g2hu5d"
            data-framer-component-type="RichTextContainer"
            style={{
              '--extracted-r6o4lv': 'var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255))',
              transform: 'none'
            }}
          >
            <p
              className="framer-text framer-styles-preset-d8lgz7"
              data-styles-preset="R1K60oWJQ"
              style={{
                '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-b9a38ae6-6808-421e-8c6e-e2c5bc817a9d, rgb(255, 255, 255)))'
              }}
            >
              Phone no.
            </p>
          </div>
          <div
            className="framer-form-text-input framer-form-input-wrapper framer-crtitr"
            style={inputStyle}
          >
            <input
              type="tel"
              name="Phone No."
              placeholder="01410190019"
              className="framer-form-input framer-form-input-empty"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>

      {status.message && (
        <div style={{ marginTop: '12px', width: '100%' }}>
          <p
            style={{
              color: status.type === 'error' ? '#ff4d4f' : '#52c41a',
              fontSize: '13px',
              fontFamily: 'monospace',
              margin: 0
            }}
          >
            {status.message}
          </p>
        </div>
      )}

      <div className="framer-1yvahkq-container" style={{ marginTop: '16px' }}>
        <button
          type="submit"
          className="framer-2Q8zM framer-1juyh6d framer-v-1juyh6d"
          data-framer-name="Form Button"
          data-reset="button"
          style={{
            backgroundColor: 'var(--token-0760290c-0963-4afd-8b72-f7c94940d48f, rgb(255, 255, 255))',
            height: '100%',
            width: '100%',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            borderRadius: '24px',
            opacity: '1',
            cursor: 'pointer'
          }}
        >
          <div
            className="framer-13na5k5"
            data-framer-component-type="RichTextContainer"
            style={{
              '--framer-link-text-color': 'rgb(0, 153, 255)',
              '--framer-link-text-decoration': 'underline',
              opacity: '1',
              transform: 'none'
            }}
          >
            <p
              className="framer-text"
              style={{
                '--font-selector': 'Qkk7dW5kZWZpbmVkL21lZGl1bS92MA==',
                '--framer-font-family': '"undefined", monospace',
                '--framer-font-size': '14px',
                '--framer-font-weight': '500',
                '--framer-letter-spacing': '-0.02em',
                '--framer-line-height': '1.3em',
                '--framer-text-alignment': 'left',
                '--framer-text-transform': 'uppercase'
              }}
            >
              Submit & Verify Mail
            </p>
          </div>
        </button>
      </div>

      <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', width: '100%' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
          Connect with me:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[
            { name: 'Behance', url: 'https://www.behance.net/sofiullahammed' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sofiullah-ahammad/' },
            { name: 'Facebook', url: 'https://www.facebook.com/SofiullahAahmmad/' },
            { name: 'Instagram', url: 'https://www.instagram.com/sofiullahahammad/' },
            { name: 'YouTube', url: 'https://www.youtube.com/@sofiullahahammad' },
            { name: 'X (Twitter)', url: 'https://x.com/sofiullah69' },
          ].map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'none',
                fontSize: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '6px 14px',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              {link.name} ↗
            </a>
          ))}
        </div>
      </div>
    </form>
  );
}
