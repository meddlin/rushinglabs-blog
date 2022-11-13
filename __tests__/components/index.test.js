import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
    it('renders a heading', () => {
        const samplePreviewPosts = [];

        render(<Home previewPosts={samplePreviewPosts} />)
    
        // const heading = screen.getByRole('heading', {
        //   name: /welcome to next\.js!/i,
        // })
        const text = screen.getByText("Hi! I'm Darrien, a software engineer and content creator based in Austin, TX.")
    
        expect(text).toBeInTheDocument()
      })
});