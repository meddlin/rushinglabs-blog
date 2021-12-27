import { getAllDocsSections } from "../lib/docs";


/**
 * getAllDocsSections
 */
describe("Docs - Retrieve sections", () => {
    test("it should return an array of strings", () => {

        // read all files under /docs
        const input = [];

        // Array of strings representing the names of each
        // subdir under /docs
        const expectedOutput = ['owasp', 'general', 'nextjs-testing'];

        debugger;
        expect(
            getAllDocsSections()
        ).toEqual(expect.arrayContaining(expectedOutput));
    })
});
