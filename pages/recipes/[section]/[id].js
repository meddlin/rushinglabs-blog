import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Date from '../../../components/date';
import { getAllRecipesIds, getRecipesData } from '../../../lib/recipes';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';

/**
 * Importing the components which will be used in our MDX posts
 */
import Link from 'next/link';
import Image from 'next/image';
import { CenteredImage, LeftImage, RightImage } from '../../../components/content-helpers/images';
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

/**
 * getStaticPaths is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
 export async function getStaticPaths() {
    const paths = getAllRecipesIds();

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
    
    const postId = params.id;
    const section = params.section;
    const postData = await getRecipesData(section, postId);

    return {
        props: {
            postData
        }
    }
}

const Recipe = (props) => {
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
                <MDXRemote {...mdx} components={{ 
                    Button, 
                    Image, 
                    Link, 
                    CenteredImage, 
                    LeftImage,
                    RightImage,
                    SyntaxHighlighter, 
                    MyDocHighlighter,
                    TikTok
                }} />
            </article>
        </Layout>
    );
}

export default Recipe;
