import { render } from '@testing-library/react';
import MyHighlighter from '../../components/content-helpers/my-highlighter';

it('renders MyHighlighter unchanged', () => {
    const { container } = render(
        <MyHighlighter
            language="js"
            showLineNumbers={true}
            showInlineLineNumbers={true}
            >
                this is a test
        </MyHighlighter>
    );

    expect(container).toMatchSnapshot()
});