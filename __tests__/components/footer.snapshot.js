import { render } from '@testing-library/react';
import Footer from '../../components/footer';

it('renders Footer unchanged', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot()
})