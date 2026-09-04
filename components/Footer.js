'use client';

export default function Footer() {
  return (
    <footer className="framer-qqKTu framer-mpn1O framer-3m93B framer-ZVwBr framer-Q2pjB framer-J845l framer-xqs0x1 framer-v-15u23cm" data-framer-name="Variant 3" style={{ backgroundColor: 'rgb(0, 0, 0)', width: '100%' }}>
      <header className="framer-wa7e73" data-framer-name="Header" style={{ backgroundColor: 'var(--token-a099af4a-6aec-40a3-976c-256397b32f03, rgb(22, 22, 22))', borderRadius: '64px' }}>
        <div className="framer-77c7do">
          <div className="framer-1qjraf">
            <div className="framer-w273z6">
              <div className="framer-eygf8k">
                <div className="framer-1wcodfi" data-framer-component-type="RichTextContainer">
                  <h5 className="framer-text framer-styles-preset-f15uo">Stay connected.</h5>
                </div>
                <div className="framer-1fea7qo" data-framer-component-type="RichTextContainer">
                  <h4 className="framer-text framer-styles-preset-1qtamek" dir="auto">
                    <a className="framer-text framer-styles-preset-8g17pg" href="mailto:hello@sofiullahahammad.com" target="_blank" rel="noopener noreferrer">
                      hello@sofiullahahammad.com
                    </a>
                  </h4>
                  <h4 className="framer-text framer-styles-preset-1qtamek" dir="auto" style={{ marginTop: '8px' }}>
                    <a className="framer-text framer-styles-preset-8g17pg" href="tel:01410190019">
                      📞 01410190019
                    </a>
                  </h4>
                </div>
                <div className="framer-knlita" data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-d8lgz7">
                    At Sofiullah, we break boundaries to craft designs that stand out and deliver results. We blend creativity with strategy, turning bold ideas into digital experiences that captivate and inspire.
                  </p>
                </div>
                
                <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
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
                        fontSize: '13px',
                        fontWeight: '500',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {link.name} ↗
                    </a>
                  ))}
                </div>
              </div>
              <div className="framer-1tpmwv">
                <div className="framer-1q3znil" data-framer-component-type="RichTextContainer">
                  <p className="framer-text framer-styles-preset-d8lgz7">Made with Love by</p>
                </div>
                <div className="framer-kz3nd3" data-framer-component-type="RichTextContainer">
                  <p dir="auto" className="framer-text">
                    <a className="framer-text framer-styles-preset-8g17pg" href="https://www.framer.com/@future-things/" target="_blank" rel="noopener noreferrer">
                      FTC Studio
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="framer-s3n7x7" data-framer-component-type="RichTextContainer">
          <p className="framer-text framer-styles-preset-d8lgz7" style={{ textAlign: 'center' }}>
            ©2025 Sofiullah Ahammad. All rights reserved.
          </p>
        </div>
      </header>
    </footer>
  );
}
