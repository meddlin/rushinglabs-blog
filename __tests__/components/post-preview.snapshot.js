import { render } from '@testing-library/react';
import PostPreview from '../../components/post-preview';

it('renders PostPreview unchanged', () => {
    const { container } = render(<PostPreview />);

    expect(container).toMatchSnapshot()
})