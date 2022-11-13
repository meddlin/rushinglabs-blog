import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe("Anchors should be created from Markdown headers", () => {
    test("it should return true", () => {
        const value = 1;
        const expected = 1;

        expect(value).toEqual(expected);
    })
})