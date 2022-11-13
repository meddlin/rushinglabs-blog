import { render } from '@testing-library/react'
import Home from '../pages/index'

it('renders homepage unchanged', () => {
    const samplePreviewPosts = [];
  const { container } = render(<Home previewPosts={samplePreviewPosts} />);

  expect(container).toMatchSnapshot()
})