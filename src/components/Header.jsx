import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const nav = [
  { path: '/', label: 'Home', icon: '🏠' },
  {
    label: 'Company Tests',
    icon: '🏢',
    children: [
      { path: '/tcs-nqt', label: 'TCS NQT', icon: '🏢' },
    ]
  },
  {
    label: 'Interview Prep',
    icon: '🚀',
    children: [
      { path: '/aiml', label: 'AI & ML', icon: '🤖' },
      { path: '/react', label: 'React', icon: '⚛️' },
      { path: '/sap', label: 'SAP', icon: '💼' },
      { path: '/devops', label: 'DevOps', icon: '🔧' },
    ]
  },
  { path: '/quiz', label: 'Practice', icon: '📝' },
  { path: '/notebook', label: 'Notebook', icon: '📓' },
  { path: '/results', label: 'Results', icon: '📊' },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src="/logo.png" alt="PrepMaster" className={styles.brandLogoImg} />
          <div>
            <div className={styles.brandName}>PrepMaster</div>
            <div className={styles.brandSub}>TCS NQT · AI/ML</div>
          </div>
        </Link>

        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`${styles.navWrapper} ${mobileMenuOpen ? styles.navWrapperOpen : ''}`}>
          {/* Mobile-only Header */}
          <div className={styles.mobileHeader}>
            <div className={styles.mobileTitle}>Navigation</div>
            <button className={styles.closeBtn} onClick={() => setMobileMenuOpen(false)}>✕</button>
          </div>

          <nav className={styles.nav}>
            {nav.map(n => (
              <div key={n.label} className={styles.navGroup}>
                {n.children ? (
                  <>
                    {/* Desktop Style Link (visible on desktop) */}
                    <button className={`${styles.link} ${styles.desktopOnly} ${n.children.some(c => pathname.startsWith(c.path)) ? styles.active : ''}`}>
                      <span className={styles.linkIcon}>{n.icon}</span>
                      <span className={styles.linkLabel}>{n.label}</span>
                      <span className={styles.chevron}>▾</span>
                    </button>

                    {/* Desktop Dropdown (visible on desktop hover) */}
                    <div className={`${styles.dropdown} ${styles.desktopOnly}`}>
                      {n.children.map(c => (
                        <Link key={c.path} to={c.path} className={`${styles.dropLink} ${pathname === c.path ? styles.activeDrop : ''}`}>
                          <span className={styles.linkIcon}>{c.icon}</span>
                          <span>{c.label}</span>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Style Labels (visible only in mobile drawer) */}
                    <div className={styles.mobileGroupLabel}>
                      <span className={styles.linkIcon}>{n.icon}</span>
                      <span>{n.label}</span>
                    </div>
                    <div className={styles.mobileSublinks}>
                      {n.children.map(c => (
                        <Link key={c.path} to={c.path} className={`${styles.dropLink} ${pathname === c.path ? styles.activeDrop : ''}`}>
                          <span className={styles.linkIcon}>{c.icon}</span>
                          <span>{c.label}</span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link to={n.path}
                    className={`${styles.link} ${pathname.startsWith(n.path) && n.path !== '/' || pathname === n.path ? styles.active : ''}`}>
                    <span className={styles.linkIcon}>{n.icon}</span>
                    <span className={styles.linkLabel}>{n.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <Link to="/tcs-nqt" className={styles.ctaBtn}>
              Start Prep →
            </Link>
          </div>
        </div>

        {mobileMenuOpen && <div className={styles.overlay} onClick={() => setMobileMenuOpen(false)} />}
      </div>
    </header>
  );
}
