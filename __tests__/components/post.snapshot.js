import { render } from '@testing-library/react';
import Post from '../../components/post';

it('renders SocialsHorizontal unchanged', () => {
    const { container } = render(<Post />);

    expect(container).toMatchSnapshot()
})