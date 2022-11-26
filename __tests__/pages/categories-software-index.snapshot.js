import { render } from '@testing-library/react';
import SoftwareSection from '../../pages/categories/software/index';

it('renders SoftwareSection unchanged', () => {
    const posts = [];
    const prev = [];
    const next = [];
    const categories = [];

    const { container } = render(
        <SoftwareSection 
            posts={posts} 
            prevPosts={prev} 
            nextPosts={next} 
            categoriesList={categories} 
        />
    );

  expect(container).toMatchSnapshot()
})