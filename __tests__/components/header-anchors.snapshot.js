import { render } from '@testing-library/react';
import { H2, H3, H4 } from '../../components/content-helpers/header-anchors';

it('renders H2 unchanged', () => {
    const { container } = render(<H2>this is a test</H2>);

    expect(container).toMatchSnapshot()
});

it('renders H3 unchanged', () => {
    const { container } = render(<H3>this is a test</H3>);

    expect(container).toMatchSnapshot()
});

it('renders H4 unchanged', () => {
    const { container } = render(<H4>this is a test</H4>);

    expect(container).toMatchSnapshot()
});