import { render } from '@testing-library/react';
import About from '../../pages/about';

it('renders About page unchanged', () => {
    const { container } = render(<About />);
    expect(container).toMatchSnapshot();
});