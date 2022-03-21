import LandingNavbarLinks from './landing-navbar-links';
import Link from 'next/link';
import MenuIcon from './menu-icon';
import utilStyles from '../styles/utils.module.css';
import landingHeaderStyles from './landing-header.module.css';

const name = 'Rushing Labs';

export default function LandingHeader({}) {
    return (
        <header className={landingHeaderStyles.header}>
            <MenuIcon />

            <h1 className={utilStyles.heading2Xl}>
                <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
            </h1>

            <LandingNavbarLinks />
        </header>
    );
}