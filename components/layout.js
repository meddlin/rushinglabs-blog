import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import MenuIcon from './menu-icon';
import NavbarLinks from './navbar-links';
import LayoutHeadLoader from './layout-head-loader';

const name = 'Rushing Labs';

export default function Layout({ children, home }) {
    return (
      <div>
        <LayoutHeadLoader />

        <header className={styles.header}>
          <MenuIcon />

          <h1 className={utilStyles.heading2Xl}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h1>

          <NavbarLinks />
        </header>

        <div className={styles.mainContent}>

          <div className={styles.container}>
            {children}
          </div>

          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}

          <a href="https://plausible.io/rushinglabs.com">RushingLabs - Analytics</a>
        </div>
      </div>
    )
  }