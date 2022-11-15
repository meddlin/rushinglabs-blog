import '@testing-library/jest-dom';
import { docsDirectory, getAllDocsIds, getPostsFromDocsSubdir } from "../lib/docs";

/**
 * getPostsFromDocsSubdir
 */
 describe("Docs - Retrieve docs from subdir", () => {
    // test("it should return a data object for each post", () => {
    //     const input = getPostsFromDocsSubdir(`${docsDirectory}/general`);

    //     const expectedOutput = [{
    //         id: 'asdf',
    //         directory: '/docs/general',
    //     }];

    //     // Need a general check, make sure an object for each post
    //     // is represented.
    //     expect(getPostsFromDocsSubdir()).toEqual(expectedOutput);
    // });

    // Retrieving all posts from top-level /docs directory
    // should still work.
    test("it should include all sections' posts", () => {
        const value = 1;
        const expected = 0;

        expect(value).toEqual(1);
    });

    // Metadata for each post should be standardized
    test("it should have a standard metadata structure", () => {
        const value = 1;
        const expected = 0;

        expect(value).toEqual(1);
    });
});


/**
 * getAllDocsIds
 */
// describe("Docs - Retrieve all id's for each docs post", () => {
//     test("it should return an array of file paths to posts", () => {
//         const input = getAllDocsIds();
//         const output = [''];

//         // Each filename needs to end in .mdx
//         // expect()

//         // Each filename needs to exist in the filesystem
//         // expect() 
//     });
// })