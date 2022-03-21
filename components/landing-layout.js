import LandingNavbarLinks from './landing-navbar-links';
import Link from 'next/link';
import MenuIcon from './menu-icon';
import LayoutHeadLoader from './layout-head-loader';
import LandingHeader from './landing-header';

import landingLayoutStyles from './landing-layout.module.css';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Rushing Labs';

export default function LandingLayout({ children }) {
    return (
        <div>
            <LayoutHeadLoader />
            <LandingHeader />

            <div className={landingLayoutStyles.container}>
                {children}
            </div>
        </div>
    );
}