import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function NavbarLinks({}) {
    return (
        <div className={styles.navbarLinks}>
            <h2>
              <Link href="/blog">
                <a className="text-xl font-bold underline text-inherit">Blog</a>
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                <a className="text-xl font-bold underline text-inherit">Projects</a>
              </Link>
            </h2>
            <h2>
              <Link href="/docs">
                <a className="text-xl font-bold underline text-inherit">Docs</a>
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                <a className="text-xl font-bold underline text-inherit">About</a>
              </Link>
            </h2>
          </div>
    );
}