import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SocialsHorizontal from '../../components/socials-horizontal';

describe('SocialsHorizontal', () => {
    it('renders alt text for YouTube', () => {
        render(<SocialsHorizontal />);
        const text = screen.getByAltText("YouTube icon");

        expect(text).toBeInTheDocument();
    });

    it('renders alt text for YouTube', () => {
        render(<SocialsHorizontal />);
        const text = screen.getByAltText("TikTok icon");

        expect(text).toBeInTheDocument();
    });

    it('renders alt text for YouTube', () => {
        render(<SocialsHorizontal />);
        const text = screen.getByAltText("GitHub icon");

        expect(text).toBeInTheDocument();
    });

    it('renders alt text for YouTube', () => {
        render(<SocialsHorizontal />);
        const text = screen.getByAltText("Twitter icon");

        expect(text).toBeInTheDocument();
    });

    it('renders alt text for YouTube', () => {
        render(<SocialsHorizontal />);
        const text = screen.getByAltText("Instagram icon");

        expect(text).toBeInTheDocument();
    });
});