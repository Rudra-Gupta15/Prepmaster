import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const nav = [
  { path:'/',           label:'Home',     icon:'🏠' },
  { path:'/tcs-nqt',   label:'TCS NQT',  icon:'🏢' },
  { path:'/aiml',      label:'AI & ML',   icon:'🤖' },
  { path:'/quiz',      label:'Practice',  icon:'📝' },
  { path:'/guide',     label:'NQT Guide', icon:'📚' },
  { path:'/results',   label:'Results',   icon:'📊' },
];

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.brandLogo}>P</div>
          <div>
            <div className={styles.brandName}>PrepMaster</div>
            <div className={styles.brandSub}>TCS NQT · AI/ML</div>
          </div>
        </Link>
        <nav className={styles.nav}>
          {nav.map(n => (
            <Link key={n.path} to={n.path}
              className={`${styles.link} ${pathname.startsWith(n.path) && n.path !== '/' || pathname === n.path ? styles.active : ''}`}>
              <span className={styles.linkIcon}>{n.icon}</span>
              <span className={styles.linkLabel}>{n.label}</span>
            </Link>
          ))}
        </nav>
        <Link to="/tcs-nqt" className={styles.ctaBtn}>
          Start Prep →
        </Link>
      </div>
    </header>
  );
}
