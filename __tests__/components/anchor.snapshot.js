import { render } from '@testing-library/react';
import Anchor from '../../components/content-helpers/anchor';

it('renders Anchor unchanged', () => {
    const { container } = render(
        <Anchor href="https://rushinglabs.com">this is a test</Anchor>
    );

    expect(container).toMatchSnapshot()
});