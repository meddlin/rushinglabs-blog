import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const recipesDirectory = path.join(process.cwd(), 'recipes');


/**
 * Recursively walks the directory to find all files. Returns 
 * an array files; full file path, not just file name.
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
 * Recursively walks the directory to return an array of all dirctory names.
 * @param {*} dirPath 
 * @param {*} arrayOfDirs 
 * @returns 
 */
 const getAllDirectories = function(dirPath, arrayOfDirs) {
    const items = fs.readdirSync(dirPath);
    arrayOfDirs = arrayOfDirs || [];

    items.forEach( item => {
        if (fs.statSync(`${dirPath}/${item}`).isDirectory()) {
            arrayOfDirs.push(item)
            arrayOfDirs = getAllDirectories(`${dirPath}/${item}`, arrayOfDirs);
        }
    });
    return arrayOfDirs;
}

/**
 * Fetch a specific doc's data
 * @param {*} section 
 * @param {*} id 
 * @returns 
 */
 export async function getRecipesData(section, id) {
    // TODO: Support .md files
    const fullPath = path.join(recipesDirectory, `${section}/${id}.mdx`);
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

/**
 * Get a list of all sections under the /recipes directory
 * @returns A string[] containing the name of each section
 */
 export function getAllRecipesSections() {
    // Read all sub-directories under the /recipes directory
    const sections = getAllDirectories(recipesDirectory);

    return sections;
}

/**
 * Return posts, including frontmatter, from a specified directory.
 * @param {*} directory 
 */
 export function getPostsFromRecipesSubdir(directory) {
    const postsArr = getAllFiles(`${recipesDirectory}/${directory}`);
    let recipesSubdirPosts = [];

    for(let i = 0; i < postsArr.length; i++) {
        let splits = postsArr[i].split(path.sep);

        const id = splits[splits.length - 1].replace(/\.mdx$/, '');

        const fileContents = fs.readFileSync(postsArr[i], 'utf8');
        const matterResult = matter(fileContents);

        recipesSubdirPosts.push({ id, directory, ...matterResult.data });
    }

    return recipesSubdirPosts;
}

/**
 * Retrieve a list of file names in the `/docs` directory 
 * (excluding '.md' extension from name) 
 * @returns 
 */
 export function getAllRecipesIds() {
    let fileNames = getAllFiles(recipesDirectory);
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
        let section = splitPath[splitPath.length - 2];

        postInfo.push({
            params: {
                id: fileName,
                section: section
            }
        });
    }

    return postInfo;
};

/**
 * 
 * @returns 
 */
 export function getSortedRecipesPostsData() {
    const fileNames = getAllFiles(recipesDirectory); // Filenames contain the full path
    const allPostsData = fileNames.map(fileName => {
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

        // Combine the data with the id
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
}