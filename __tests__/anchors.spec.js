import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getAnchor } from '../components/content-helpers/anchors';

describe("Anchors should be created from Markdown headers", () => {
    test("it should contain dashes", () => {
        const testString = "## Test Title"
        const output = getAnchor(testString);

        expect(output).toContain("-");
    });

    test("it should contain the original words", () => {
        const testString = "## Test Title"
        const output = getAnchor(testString);

        expect(output).toContain("test");
    });

    test("convert title to dashed-title", () => {
        const testString = "## Test Title"
        const output = getAnchor(testString);

        expect(output).toEqual("-test-title");
    });

    /**
     * This is a good start for using backticks (`) in headers in 
     * Makdown/MDX. However, the backticks don't seem to be an issue
     * when used directly in this test.
     * 
     * TODO : Determine what order of operations is happening from 
     * MDX -> Markdown -> HTML...and where getAnchors() is called in 
     * the middle of this.
     */
    test("remove backticks from header", () => {
        const testString = "### Solving the `tty` issue"
        const output = getAnchor(testString);

        console.log(output);

        expect(output).toEqual("-solving-the-tty-issue");
    });
})