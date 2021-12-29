import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

export const projectsDirectory = path.join(process.cwd(), 'projects');


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
}

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
 * Get a specific page within a project's subdirectory.
 * @param {string} project 
 * @param {string} id 
 */
export async function getProjectPage(project, id) {
    // TODO: Support .md files
    const fullPath = path.join(projectsDirectory, `${section}/${id}.mdx`);
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
 * Get a list of all projects under the /projects directory
 * @returns A string[] containing the name of each project
 */
export function getAllProjects() {
    const projects = getAllDirectories(projectsDirectory);
    return projects;
}

/**
 * Get a collection of "posts" from a specific /projects
 * subdirectory.
 * @param {string} directory 
 * @returns 
 */
export function getPostsFromProjectsSubdir(directory) {
    const postsArr = getAllFiles(`${projectsDirectory}/${directory}`);
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