import { render } from '@testing-library/react';
import PostPreviewImage from '../../components/post-preview-image';

it('renders PostPreviewImage unchanged', () => {
    const { container } = render(<PostPreviewImage />);

    expect(container).toMatchSnapshot()
})