import LandingNavbarLinks from './landing-navbar-links';
import LayoutHeadLoader from '../layout-head-loader';
import LandingHeader from './landing-header';

import landingLayoutStyles from './landing-layout.module.css';

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