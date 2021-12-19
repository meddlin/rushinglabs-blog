import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Date from '../../../components/date';
import { getAllDocsIds, getDocsData } from '../../../lib/posts'; //  '../../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';

/**
 * Importing the components which will be used in our MDX posts
 */
import Image from 'next/image';
import CenteredImage from '../../../components/CenteredImage';
import Button from '../../../components/button';
import { docco, a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter';
const MyDocHighlighter = ({ language, children }) => {
    return (
        <SyntaxHighlighter language={language} style={a11yDark}>
            {children}
        </SyntaxHighlighter>
    );
}

/**
 * getStaticPaths is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
 export async function getStaticPaths() {
    // const paths = getAllPostIds();
    const paths = getAllDocsIds();
    // console.log(`getStaticPaths - ${JSON.stringify(paths)}`)

    // The params building happens in /lib/posts.getAllPostIds()
    return {
        paths: paths,
        fallback: false
    }
}

/**
 * getStaticProps is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching
 */
export const getStaticProps = async ({ params }) => {
    // `params` contains the router parameters for pages using dynamic routes
    // For this route we have the directory structure /docs/[section]/[id].js
    // --> So, `section` and `id` are part of the params object <--

    console.log(`getStaticProps params - ${JSON.stringify(params)}`)
    
    const postId = params.id;
    const section = params.section;
    // const postData = await getPostData(year, postId);
    const postData = await getDocsData(section, postId);

    return {
        props: {
            postData
        }
    }
}


const Doc = (props) => {
    let mdx = props.postData.mdxSource;
    let title = props.postData.title;
    let date = props.postData.date;
    let section = props.postData.section;

    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            
            <article className={postStyles.content}>
                <h1 className={utilStyles.headingX1}>{title}</h1>
                <Date dateString={date} />
                <MDXRemote {...mdx} components={{ Button, Image, CenteredImage, SyntaxHighlighter, MyDocHighlighter }} />
            </article>
        </Layout>
    );
}

export default Doc;