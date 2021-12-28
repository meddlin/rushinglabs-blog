import { test } from "gray-matter";
import { docsDirectory, getPostsFromDocsSubdir } from "../lib/docs";


/**
 * getPostsFromDocsSubdir
 */
 describe("Docs - Retrieve docs from subdir", () => {
    test("it should return a data object for each post", () => {
        const input = getPostsFromDocsSubdir(`${docsDirectory}/general`);

        const expectedOutput = [{
            id: 'asdf',
            directory: '/docs/general',
        }];

        // Need a general check, make sure an object for each post
        // is represented.
        expect(getPostsFromDocsSubdir()).toEqual(expectedOutput);
    });

    // Retrieving all posts from top-level /docs directory
    // should still work.
    test("it should include all sections' posts", () => {
        
    })

    // Metadata for each post should be standardized
    test("it should have a standard metadata structure", () => {

    });
});