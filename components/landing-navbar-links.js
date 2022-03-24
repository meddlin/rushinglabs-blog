import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function LandingNavbarLinks({}) {
    return (
        <div className={styles.navbarLinks} style={{ display: 'flex', flexDirection: 'row' }}>
            <h2>
              <Link href="/blog">
                <a className={utilStyles.colorInherit}>Blog</a>
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                <a className={utilStyles.colorInherit}>Projects</a>
              </Link>
            </h2>
            <h2>
              <Link href="/docs">
                <a className={utilStyles.colorInherit}>Docs</a>
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                <a className={utilStyles.colorInherit}>About</a>
              </Link>
            </h2>
          </div>
    );
}