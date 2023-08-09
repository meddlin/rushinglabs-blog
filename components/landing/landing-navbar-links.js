import styles from '../layout.module.css';
import Link from 'next/link';

export default function LandingNavbarLinks({}) {
    return (
          <div className={`flex flex-row ${styles.navbarLinks}`}>
            <h2>
              <Link href="/blog">
                Blog
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                Projects
              </Link>
            </h2>
            <h2>
              <Link href="https://www.youtube.com/@rushinglabs">
                YouTube
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                About
              </Link>
            </h2>
          </div>
    );
}