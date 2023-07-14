import { render } from '@testing-library/react';
import CodeElement from '../../components/content-helpers/code-element';

it('renders CodeElement unchanged', () => {
    const { container } = render(
        <CodeElement>this is a test</CodeElement>
    );

    expect(container).toMatchSnapshot()
});