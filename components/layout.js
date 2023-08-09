import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Footer from './footer';
import MenuIcon from './menu-icon';
import NavbarLinks from './navbar-links';
import LayoutHeadLoader, { siteTitle } from './layout-head-loader';

export default function Layout({ children, home, footerDisplay }) {
    return (
      <div>
        <LayoutHeadLoader />

        <header className={styles.header}>
          <MenuIcon />

          <h1 className={utilStyles.heading2Xl}>
            <Link href="/">
              <span className={utilStyles.colorInherit}>{siteTitle}</span>
            </Link>
          </h1>

          <NavbarLinks />
        </header>

        <div className={styles.mainContent}>
          <div className={styles.container}>
            {children}
          </div>
        </div>

        <Footer />
      </div>
    )
  }