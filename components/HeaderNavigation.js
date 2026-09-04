'use client';

export default function HeaderNavigation({ activePage = 'Home' }) {
  return (
    <nav className="framer-1jsrn4" data-framer-name="Navigation">
      <div className="framer-di44zm">
        <div className="framer-3yypn8-container" data-framer-name="Home" name="Home">
          <a
            name="Home"
            className="framer-GvCMP framer-gmy9I framer-15jtr framer-oqizzt framer-v-10ttbgv framer-1yiuczm"
            data-framer-name="Light - Without Hover"
            data-highlight="true"
            href="/"
            data-framer-page-link-current={activePage === 'Home' ? 'true' : undefined}
            tabIndex={0}
            style={{ width: '100%' }}
          >
            <div className="framer-17m9om0" data-framer-name="Label Wrap">
              <div className="framer-et4ajg" data-framer-component-type="RichTextContainer">
                <h4 className="framer-text framer-styles-preset-4ag0ja">Home</h4>
              </div>
            </div>
          </a>
        </div>
        <div className="framer-1k78b8d-container" data-framer-name="About" name="About">
          <a
            name="About"
            className="framer-GvCMP framer-gmy9I framer-15jtr framer-oqizzt framer-v-10ttbgv framer-1yiuczm"
            data-framer-name="Light - Without Hover"
            data-highlight="true"
            href="/about"
            data-framer-page-link-current={activePage === 'About' ? 'true' : undefined}
            tabIndex={0}
            style={{ width: '100%' }}
          >
            <div className="framer-17m9om0" data-framer-name="Label Wrap">
              <div className="framer-et4ajg" data-framer-component-type="RichTextContainer">
                <h4 className="framer-text framer-styles-preset-4ag0ja">About</h4>
              </div>
            </div>
          </a>
        </div>
        <div className="framer-7zzu60-container" data-framer-name="Projects" name="Projects">
          <a
            name="Projects"
            className="framer-GvCMP framer-gmy9I framer-15jtr framer-oqizzt framer-v-10ttbgv framer-1yiuczm"
            data-framer-name="Light - Without Hover"
            data-highlight="true"
            href="/projects"
            data-framer-page-link-current={activePage === 'Projects' ? 'true' : undefined}
            tabIndex={0}
            style={{ width: '100%' }}
          >
            <div className="framer-17m9om0" data-framer-name="Label Wrap">
              <div className="framer-et4ajg" data-framer-component-type="RichTextContainer">
                <h4 className="framer-text framer-styles-preset-4ag0ja">Projects</h4>
              </div>
            </div>
            <div className="framer-10dwp0c" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-6nz3az">(06)</p>
            </div>
          </a>
        </div>
        <div className="framer-bbb8sy-container" data-framer-name="Journal" name="Journal">
          <a
            name="Journal"
            className="framer-GvCMP framer-gmy9I framer-15jtr framer-oqizzt framer-v-10ttbgv framer-1yiuczm"
            data-framer-name="Light - Without Hover"
            data-highlight="true"
            href="/journal"
            data-framer-page-link-current={activePage === 'Journal' ? 'true' : undefined}
            tabIndex={0}
            style={{ width: '100%' }}
          >
            <div className="framer-17m9om0" data-framer-name="Label Wrap">
              <div className="framer-et4ajg" data-framer-component-type="RichTextContainer">
                <h4 className="framer-text framer-styles-preset-4ag0ja">Journal</h4>
              </div>
            </div>
            <div className="framer-10dwp0c" data-framer-component-type="RichTextContainer">
              <p className="framer-text framer-styles-preset-6nz3az">(05)</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}
