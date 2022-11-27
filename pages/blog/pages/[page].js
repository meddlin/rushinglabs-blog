import Layout from '../../../components/layout';
import PostPreview from '../../../components/post-preview';
import CategoryListing from '../../../components/category-listing';
import Link from 'next/link';
import utilStyles from '../../../styles/utils.module.css';
import { getSortedPostsData, getAllCategories } from '../../../lib/posts';
import { calculateBlogPagingInfo } from '../../../lib/paging';
import config from '../../../blogConfig';

/**
 * Create the props data needed to display a list of posts for any particular page.
 * @param {*} param
 */
export async function getStaticProps({ params }) {
    const posts = getSortedPostsData();
    const categoriesList = getAllCategories();

    const pageIndex = parseInt(params.page) - 1;
    const startIndex = pageIndex * config.postsPerPage;
    const endIndex = (pageIndex + 1) * config.postsPerPage;

    const prevPosts = (pageIndex > 0) ? pageIndex : null;
    const nextPosts = (endIndex >= posts.length) ? null : (pageIndex + 2);
    const numPages  = (config.postsPerPage % getSortedPostsData().length) + 1;

    return {
        props: {
            categoriesList,
            posts: posts.slice(startIndex, endIndex),
            prevPosts,
            nextPosts,
            pageIndex,
            numPages
        }
    }
};

/**
 * Generate the static paths for pages based on how many posts we have
 */
export async function getStaticPaths() {
    const numPages = calculateBlogPagingInfo();

    return {
        paths: [...Array(numPages)].map( (v, i) => {
            return {
                params: { page: (i + 1).toString() }
            }
        }),
        fallback: false
    }
};



const PostsPage = ({ posts, categoriesList, prevPosts, nextPosts }) => {
    return (
        <Layout home footerDisplay={true}>
            <div className={`${utilStyles.horizontal}`}>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.categoriesSection}`}>
                    <b>Categories</b>
                    <CategoryListing categories={categoriesList} />
                </section>

                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                    <ul className={utilStyles.list}>
                        {posts.filter(post => post.published).map(post => <PostPreview key={post.id} {...post} />)}
                    </ul>

                    <section className={`${utilStyles.centeredButtons}`}>
                        {prevPosts !== null && (
                            <Link href={"/blog/pages/" + prevPosts} passHref>
                                <a>« newer</a>
                            </Link>
                        )}
                        {nextPosts !== null && (
                            <Link href={"/blog/pages/" + nextPosts} passHref>
                            <a>older »</a>
                            </Link>
                        )}
                    </section>
                </section>
            </div>
        </Layout>
    );
};

export default PostsPage;