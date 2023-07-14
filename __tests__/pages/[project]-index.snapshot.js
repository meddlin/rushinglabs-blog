import { render } from '@testing-library/react';
import ProjectsSection from '../../pages/projects/[project]/index';
import { getPostsFromProjectsSubdir, getAllProjects } from '../../lib/projects';

/**
 * Since projects are organized into their own directories, 
 * we want to generate a test for each directory instead of
 * hardcoding them for project names--and having to update code
 * any time there is a change.
 * 
 * Note: This is very similar to the idea behind what Next.js's
 * getStaticPaths() method does for generating static pages.
 */
it('renders each ProjectsSection page', () => {
    // Retrieve all project directories
    const projects = getAllProjects();

    // Iterate over each project directory
    projects.map(proj => {
        // Retrieve the posts/content for each project
        const projectPosts = getPostsFromProjectsSubdir(proj);

        // Render the component, providing props for the iteration
        const { container } = render(
            <ProjectsSection 
                projectTitle={proj} 
                posts={projectPosts} />
        );
        expect(container).toMatchSnapshot();
    })
})