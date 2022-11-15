import { render } from '@testing-library/react';
import Post from '../../components/post';

it('renders Post unchanged', () => {
    const { container } = render(<Post />);

    expect(container).toMatchSnapshot()
})