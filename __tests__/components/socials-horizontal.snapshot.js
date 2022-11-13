import { render } from '@testing-library/react';
import SocialsHorizontal from '../../components/socials-horizontal';

it('renders SocialsHorizontal unchanged', () => {
    const { container } = render(<SocialsHorizontal />);

    expect(container).toMatchSnapshot()
})