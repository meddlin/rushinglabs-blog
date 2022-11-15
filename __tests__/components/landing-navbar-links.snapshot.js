import { render } from '@testing-library/react';
import LandingNavbarLinks from '../../components/landing/landing-navbar-links';

it('renders homepage unchanged', () => {
    const { container } = render(<LandingNavbarLinks />);

  expect(container).toMatchSnapshot()
})