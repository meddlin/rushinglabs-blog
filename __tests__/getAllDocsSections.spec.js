import { getAllDocsSections } from "../lib/docs";


/**
 * getAllDocsSections
 */
describe("Docs - Retrieve sections", () => {
    test("it should return an array of strings", () => {
        const input = getAllDocsSections();

        // Array of strings representing the names of each
        // subdir under /docs
        const expectedOutput = ['owasp', 'general', 'nextjs-testing'];

        expect(input).toEqual(expect.arrayContaining(expectedOutput));
    })
});