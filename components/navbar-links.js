import styles from './layout.module.css';
import Link from 'next/link';

export default function NavbarLinks({}) {
    return (
          <div className={`flex flex-row ${styles.navbarLinks}`}>
            <h2>
              <Link href="/blog">
                <a className="text-xl font-bold no-underline text-inherit">Blog</a>
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                <a className="text-xl font-bold no-underline text-inherit">Projects</a>
              </Link>
            </h2>
            <h2>
              <Link href="https://www.youtube.com/@rushinglabs">
                <a className="text-xl font-bold no-underline text-inherit">YouTube</a>
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                <a className="text-xl font-bold no-underline text-inherit">About</a>
              </Link>
            </h2>
          </div>
    );
}