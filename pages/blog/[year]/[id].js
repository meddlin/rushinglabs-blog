import dynamic from 'next/dynamic';
import Layout from '../../../components/layout';
import Head from 'next/head';
import Date from '../../../components/date';
import { getAllPostIds, getPostData } from '../../../lib/posts'; //  '../../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import postStyles from '../../../styles/post.module.css';

/**
 * getStaticPaths is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths() {
    const paths = getAllPostIds();

    // The params building happens in /lib/posts.getAllPostIds()
    return {
        paths: paths.map( (path) => ({
            params: { id: path.params.id, year: path.params.year }
        })),
        fallback: false
    }
}

/**
 * getStaticProps is required by Next.js
 * 
 * See: https://nextjs.org/docs/basic-features/data-fetching
 */
export async function getStaticProps({ params }) {
    // `params` contains the router parameters for pages using dynamic routes
    // For this route we have the directory structure /blog/[year]/[id].js
    // --> So, `year` and `id` are part of the params object <--
    
    const postId = params.id;
    const year = params.year;
    console.log(`getStaticProps: ${year}`);
    console.log(`getStaticProps: ${postId}`)

    /* const postData = await getPostData(params.year, params.id); */
    /* return {
        props: {
            postData
        }
    } */
    const postData = require(`../../../posts/${year}/${postId}.mdx`);
    console.log(postData);

    return {
        props: {
            postId,
            year,
            metadata: require(`../../../posts/${year}/${postId}.mdx`).metadata, // watch for .mdx extension
        },
    };
}

export default function Post({ postId, year, metadata }) {
    let mdx;
    const Mdx = dynamic(() => import(`../../../posts/${year}/${postId}.mdx`)); // watch for .mdx extension
    mdx = <Mdx />

    return (
        <Layout>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            
            <article className={postStyles.content}>
                <h1 className={utilStyles.headingX1}>{metadata.title}</h1>
                <Date dateString={metadata.date} />
                {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
                {mdx}
            </article>
        </Layout>
    );
}