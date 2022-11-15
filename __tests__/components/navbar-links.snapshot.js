import { render } from '@testing-library/react';
import NavbarLinks from '../../components/navbar-links';

it('renders homepage unchanged', () => {
    const { container } = render(<NavbarLinks />);

  expect(container).toMatchSnapshot()
})