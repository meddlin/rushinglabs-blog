import escapeHTML from 'escape-html';
import Layout from '../../../components/layout';
import { getPostsFromProjectsSubdir, getAllProjects } from '../../../lib/projects';

export async function getStaticProps({ params }) {
    const projectPosts = getPostsFromProjectsSubdir(params.project);

    return {
        props: {
            projectTitle: params.project,
            posts: projectPosts
        }
    }
}

export async function getStaticPaths() {
    const projects = getAllProjects();

    return {
        paths: projects.map(proj => {
            return {
                params: { project: proj }
            }
        }),
        fallback: false
    }
}

const ProjectsSection = ({ projectTitle, posts }) => {
    return (
        <Layout>
            <h1>Project: {projectTitle}</h1>

            {posts ? (
                <ul>
                {
                    posts.map( post => (
                        <li key={post.title}>
                            <a href={`/projects/${escapeHTML(projectTitle)}/${escapeHTML(post.id)}`}>
                                {post.title}
                            </a>
                        </li>
                    ))
                }
                </ul>
            ) : ''}
        </Layout>
    );
}

export default ProjectsSection;