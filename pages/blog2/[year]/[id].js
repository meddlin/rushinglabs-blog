import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from '../../../components/layout';
import { MDX_fetchPostIds, getAllPostIds } from '../../../lib/posts';

export async function getStaticPaths() {
    const postIds =  MDX_fetchPostIds();
    const paths = getAllPostIds();
    /* let year = '2021'; */

    console.log(`getStaticPaths -- getAllPostIds()`)
    console.log(paths);


    /* console.log(`getStaticPaths -- MDX_fetchPostIds()`);
    console.log(postIds); */

    /* paths: postIds.map((id) => ({
            params: { id, year }
        })), */
    return {
        paths: paths.map( (path) => ({
            params: { id: path.params.id, year: path.params.year }
        })),
        fallback: false, // in a static-only build, we don't need fallback rendering
    };
}

export async function getStaticProps(ctx) { // did making this async fix it?
    const postId = ctx.params.id;
    const year = ctx.params.year;
    console.log(`getStaticProps: ${year}`);

    return {
        props: {
            postId,
            year,
            metadata: require(`../../../posts/${year}/${postId}.mdx`).metadata, // watch for .mdx extension
        },
    };
};

export default function Post({ postId, year, metadata }) {
    let mdx;

    const Mdx = dynamic(() => import(`../../../posts/${year}/${postId}.mdx`)); // watch for .mdx extension
    mdx = <Mdx />

    /* if (process.browser) {
        const Mdx = dynamic(() => import(`../../../posts/2021/${postId}`)); // watch for .mdx extension
        mdx = <Mdx />
    } else {
        const Component = require(`../../../posts/2021/${postId}`).default;
        const ReactDOMServer = require("react-dom/server");
        const ssr = ReactDOMServer.renderToString(<Component />);
        mdx = <div dangerouslySetInnerHTML={{ __html: ssr }} />;
    } */

    return (
        <Layout>
            <Head>
                <title>Blog 2 - {metadata.title}</title>
            </Head>

            <article>
                <h2>{metadata.title}</h2>
                {mdx}
            </article>
        </Layout>
    );
}