import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from './menu-icon';
import NavbarLinks from './navbar-links';
import LayoutHeadLoader from './layout-head-loader';

const name = 'Rushing Labs';

export default function Layout({ children, home, footerDisplay }) {
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

        {footerDisplay ? (
          <div className={styles.footer}>
					<div className={styles.socialsBar}>
						<div>
							<a href="https://www.youtube.com/c/RushingLabs">
								<Image src="/icons/YouTube_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://www.tiktok.com/@rushinglabs?lang=en">
								<Image src="/icons/tiktok_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://github.com/meddlin">
								<Image src="/icons/GitHub_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
						<div>
							<a href="https://twitter.com/meddlin_dev">
								<Image src="/icons/Twitter_SVG-icon.svg" width="30" height="30" />
							</a>
						</div>
					</div>
					<p>Built with <a href="https://nextjs.org/" 
						style={{ color: `black`, fontWeight: `bold`}}>Next.js</a>
					</p>
				</div>
        ) : ''}
      </div>
    )
  }