import styles from './layout.module.css';
import Link from 'next/link';

export default function NavbarLinks({}) {
    return (
          <div className={`flex flex-row ${styles.navbarLinks}`}>
            <h2>
              <Link href="/blog">
                <span className="text-xl font-bold no-underline text-inherit">Blog</span>
              </Link>
            </h2>
            <h2>
              <Link href="/projects">
                <span className="text-xl font-bold no-underline text-inherit">Projects</span>
              </Link>
            </h2>
            <h2>
              <Link href="https://www.youtube.com/@rushinglabs">
                <span className="text-xl font-bold no-underline text-inherit">YouTube</span>
              </Link>
            </h2>
            <h2>
              <Link href="/about">
                <span className="text-xl font-bold no-underline text-inherit">About</span>
              </Link>
            </h2>
          </div>
    );
}