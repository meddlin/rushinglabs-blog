import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'


const postsDirectory = path.join(process.cwd(), 'posts');
const docsDirectory = path.join(process.cwd(), 'docs');


/**
 * Recursively walks the /posts directory to find all posts. Returns an array files; full file path, not just file name.
 * @param {*} dirPath 
 * @param {*} arrayOfFiles 
 */
const getAllFiles = function(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    // NOTE: The '/' character technically works on Windows, but likely because of how loose Windows can be with
    // file paths, for easier use. HOWEVER, switching to '\\' to use a backslash...for a true system path the way it
    // should be...ALSO works on Windows. The '\' char needs an escape, so '\\' is what we're left with.
    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory())
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        else
            arrayOfFiles.push(path.join(dirPath, "/", file));
    });

    return arrayOfFiles;
};


/**
 * Returns a list of file path objects (all blog posts)
 * -- { file: 'path', year: 'year-subdirectory' }
 * 
 * Recursively walks the /posts directory to find all posts--like `getAllFiles()`, but returns full file & year info.
 * @param {*} dirPath 
 * @param {*} arrayOfFiles 
 */
const getAllFilesWithYearInfo = function(dirPath) {
    const filePaths = getAllFiles(dirPath);
    let fileInfo = [];

    // Full file paths were returned in `filePaths`
    // Iterate over each one to pull the last 2 pieces of info off of the path
    filePaths.map(file => {
        // ***
        // NOTE: Does splitting on the file path delimiter work across multiple operating systems? (i.e. file systems)
        // ***
        let splits = file.split(path.sep);

        fileInfo.push({
            file: splits[splits.length - 1],
            year: splits[splits.length - 2],
        })
    });

    return fileInfo;
}


/**
 * Produce a unique array of all categories mentioned across all posts.
 * 
 * Locations used
 * - pages/index.js: used to list all categories on the landing page
 */
export function getAllCategories() {
    const postInfo = getAllFilesWithYearInfo(postsDirectory);

    const allCategories = postInfo.map(post => {
        // Rejoin the `postsDirectory`, `post year`, and `post filename` to build the file path
        const fullPath = path.join(postsDirectory, `/${post.year}/${post.file}`);
        // Use file path to read the file
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use `matter()` to pull the "matter info" from the top of the markdown file
        const matterResult = matter(fileContents);

        // Pull the `section` descriptor out of the markdown info at the top of the blog post
        return (matterResult && matterResult.data && matterResult.data.section) ? matterResult.data.section : '';
    });

    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories;
};

/**
 * 
 * @param {*} directory 
 * @returns 
 */
export function getPostsFromDocsSubdir(directory) {
    const postsArr = getAllFiles(`${docsDirectory}/${directory}`);
    let docsSubdirPosts = [];

    for(let i = 0; i < postsArr.length; i++) {
        let splits = postsArr[i].split(path.sep);

        const id = splits[splits.length - 1].replace(/\.mdx$/, '');

        const fileContents = fs.readFileSync(postsArr[i], 'utf8');
        const matterResult = matter(fileContents);

        docsSubdirPosts.push({ id, directory, ...matterResult.data });
    }

    return docsSubdirPosts;
}


/**
 * Return a list of posts containing a specific category tag
 * @param {*} category 
 */
export function getCategoryPosts(category) {
    const postsInfo = getAllFilesWithYearInfo(postsDirectory);
    let allCategoryPosts = [];

    for(let i = 0; i < postsInfo.length; i++) {
        const id = postsInfo[i].file.replace(/\.mdx$/, '');
        const year = postsInfo[i].year;
        const fullPath = path.join(postsDirectory, `/${postsInfo[i].year}/${postsInfo[i].file}`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        if ((matterResult && matterResult.data) && matterResult.data.section === category) {
            allCategoryPosts.push({ id, year, ...matterResult.data });
        }
    }

    // Sort posts by date
    return allCategoryPosts.sort((a, b) => {
        if (a.date < b.date) return 1;
        else return -1;
    });
}



///
// Fetch a specific post's data
///
export async function getPostData(year, id) {
    // TODO: Support .md files
    const fullPath = path.join(postsDirectory, `${year}/${id}.mdx`);
    const markdownWithMeta = fs.readFileSync(fullPath, 'utf8');

    // use gray-matter to parse the post metadata section
    const frontMatter = matter(markdownWithMeta);

    // frontMatter.content is the MD post
    const mdxSource = await serialize(frontMatter.content);

    // Combine the data with the id
    return {
        id,
        mdxSource,
        ...frontMatter.data
    };
}



///
// Retrieve a list of file names in the `/posts` directory (excluding '.md' extension from name) 
///
export function getAllPostIds() {
    let fileNames = getAllFiles(postsDirectory);
    var postInfo = [];

    for(var i = 0; i < fileNames.length; i++) {
        let noExt;
        /**
         * Support for Markdown (.md) and MDX (.mdx) files
         */
        
        // TODO : Support .md files
        if (fileNames[i].endsWith('.mdx')) noExt = fileNames[i].replace(/\.mdx$/, '');

        let splitPath = noExt.split(path.sep);
        let fileName = splitPath[splitPath.length - 1];
        let year = splitPath[splitPath.length - 2];

        postInfo.push({
            params: {
                id: fileName,
                year: year
            }
        });
    }

    return postInfo;    
};


/**
 * Returns a sorted list of all posts
 * This is the main logic used 
 * 
 * Locations used
 * - pages/index.js: Grabs all of the posts
 */
export function getSortedPostsData() {
    const fileNames = getAllFiles(postsDirectory); // Filenames contain the full path

    /**
     * TODO : Move the filename replacement, year extraction, and frontmatter metadata parsing
     * to another function. This would allow the .filter().map() functionality, to direct the 
     * decision for what gets passed along, be MUCH easier to read.
     * 
     * Also, likely makes this logic a bit more testable. This is some core functionality to 
     * the site.
     */
    const allPostsData = fileNames.filter(fileName => {
        // Remove the '.md' file extension, and grab the last section of the file path to...
        // Create an id from the filename
        var id = fileName.replace(/\.mdx$/, '');
        id = id.split(path.sep)[id.split(path.sep).length - 1];

        const year = fileName.split(path.sep)[fileName.split(path.sep).length - 2];
        id = `${year}/${id}`;

        // Read whole markdown file as string
        const fileContents = fs.readFileSync(fileName, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return matterResult.data.published == true ? true : false; // Wanting to be explicit here.
    }).map(fileName => {
        var id = fileName.replace(/\.mdx$/, '');
        id = id.split(path.sep)[id.split(path.sep).length - 1];
        const year = fileName.split(path.sep)[fileName.split(path.sep).length - 2];
        id = `${year}/${id}`;
        const fileContents = fs.readFileSync(fileName, 'utf8');
        const matterResult = matter(fileContents);
        // console.log('matterResult ---');
        // console.log(matterResult);

        return {
            id,
            ...matterResult.data
        }
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
};
