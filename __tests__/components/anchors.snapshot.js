import { render } from '@testing-library/react';
import H2 from '../../components/content-helpers/anchors';

it('renders H2 unchanged', () => {
    const content = "<h2>This is a test</h2>";
    const { container } = render(<H2>This is a test</H2>);

    expect(container).toMatchSnapshot()
})