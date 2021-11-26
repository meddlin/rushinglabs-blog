import dynamic from 'next/dynamic';
import Layout from '../../../components/layout';
import { MDX_fetchPostIds } from '../../../lib/posts';

export async function getStaticPaths() {
    const postIds = await MDX_fetchPostIds();
    let year = '2021';

    console.log(`getStaticPaths`);
    console.log(postIds);

    /* let posts = postIds.map(p => {
        return p.split('.mdx')[0]
    });
    console.log(posts); */

    return {
        paths: postIds.map((id) => ({
            params: { id, year }
        })),
        fallback: false, // in a static-only build, we don't need fallback rendering
    };
}

export const getStaticProps = (ctx) => {
    const postId = ctx.params.id;
    const year = ctx.params.year;
    console.log(`getStaticProps: ${year}`);

    return {
        props: {
            postId,
            metadata: require(`../../../posts/2021/${postId}`).metadata, // watch for .mdx extension
        },
    };
};

export default function Post({ postId, metadata }) {
    const Mdx = dynamic(() => import(`../../../posts/2021/${postId}`)); // watch for .mdx extension

    return (
        <Layout>
            <h1>Blog 2 - MDX testing</h1>

            <h2>{metadata.title}</h2>
            <Mdx />
        </Layout>
    );
}