import NavbarLinks from './navbar-links';
import Link from 'next/link';
import MenuIcon from './menu-icon';
import LayoutHeadLoader from './layout-head-loader';

import landingLayoutStyles from './landing-layout.module.css';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Rushing Labs';

export default function LandingLayout({ children }) {
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

            <div className={landingLayoutStyles.container}>
                {children}
            </div>
        </div>
    );
}