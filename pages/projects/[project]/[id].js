import Layout from '../../../components/layout';
import Date from '../../../components/date';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';
import { getAllProjectIds, getProjectPage } from '../../../lib/projects';

/**
 * Importing the components which will be used in our MDX posts
 */
 import Image from 'next/image';
 import Link from 'next/link';
 import CenteredImage from '../../../components/content-helpers/CenteredImage';
 import Button from '../../../components/button';
 import { docco, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
 import SyntaxHighlighter from 'react-syntax-highlighter';
 import TikTok from '../../../components/embeds/tiktok';
 const MyDocHighlighter = ({ language, children }) => {
     return (
         <SyntaxHighlighter language={language} style={a11yDark}>
             {children}
         </SyntaxHighlighter>
     );
 }

export async function getStaticPaths() {
    const paths = getAllProjectIds();

    return {
        paths: paths,
        fallback: false
    }
};

export const getStaticProps = async ({ params }) => {
    const postId = params.id;
    const project = params.project;
    const postData = await getProjectPage(project, postId);

    return {
        props: {
            postData
        }
    }
};

const ProjectPage = (props) => {
    let mdx = props.postData.mdxSource;
    let title = props.postData.title;
    let date = props.postData.date;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            
            <article className={postStyles.content}>
                <h1 className={utilStyles.headingX1}>{title}</h1>
                <Date dateString={date} />
                <MDXRemote {...mdx} components={{ 
                    Button, 
                    Image, 
                    Link, 
                    CenteredImage, 
                    SyntaxHighlighter, 
                    MyDocHighlighter,
                    TikTok
                }} />
            </article>
        </Layout>
    );
};

export default ProjectPage;
