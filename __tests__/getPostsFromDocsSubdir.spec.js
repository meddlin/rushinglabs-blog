import { getPostsFromDocsSubdir } from "../lib/docs";


/**
 * getPostsFromDocsSubdir
 */
 describe("Docs - Retrieve docs from subdir", () => {
    test("it should return a data object for each post", () => {
        // const input = /** read from subdir */

        const expectedOutput = [{
            id: 'asdf',
            directory: '/docs/general',
        }];

        expect(getPostsFromDocsSubdir()).toEqual(expectedOutput);
    })
});