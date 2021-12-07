import { MDXRemote } from 'next-mdx-remote';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts'; //  '../../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';

/**
 * Importing the components which will be used in our MDX posts
 */
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../../../components/button';

/**
 * getStaticPaths is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths() {
    const paths = getAllPostIds();

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
    // For this route we have the directory structure /blog/[year]/[id].js
    // --> So, `year` and `id` are part of the params object <--
    
    const postId = params.id;
    const year = params.year;
    console.log(`getStaticProps: ${year}`);
    console.log(`getStaticProps: ${postId}`)

    const postData = await getPostData(year, postId);

    return {
        props: {
            postData
        }
    }
}

const Post = (props) => {

    // console.log(`Post - props: ${JSON.stringify(props)}`);

    // console.log(`Post - id: ${props.postData.id}`);
    // console.log(`Post - postData: ${JSON.stringify(props.postData)}`);
    // console.log(`Post - mdxSource: ${JSON.stringify(props.postData.mdxSource)}`);

    let mdx = props.postData.mdxSource;
    let title = props.postData.title;
    let date = props.postData.date;
    let section = props.postData.section;

    return (
        <Layout>
            <Head>
                {/* <title>{metadata.title}</title> */}
            </Head>
            
            <article className={postStyles.content}>
                <h1 className={utilStyles.headingX1}>{title}</h1>
                <Date dateString={date} />
                {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
                <MDXRemote {...mdx} components={{ Button, SyntaxHighlighter }} />
            </article>
        </Layout>
    );
}

export default Post;