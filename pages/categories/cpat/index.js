import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { siteTitle } from '../../../components/layout-head-loader';
import Post from '../../../components/post';
import CategoryListing from '../../../components/category-listing';
import { getCategoryPosts, getAllCategories } from '../../../lib/posts';
import { allCaps } from '../../../lib/text-utils';
import utilStyles from '../../../styles/utils.module.css';
import config from '../../../blogConfig';

const _section_ = 'cpat';

export async function getStaticProps() {
    const posts = getCategoryPosts(_section_);
    const categoriesList = getAllCategories();

    const startIdx = 0;
    const endIdx = config.postsPerPage;
    const prevPosts = null;
    const nextPosts = (endIdx >= posts.length) ? null : 2;

    return {
        props: {
            posts: posts.slice(startIdx, endIdx),
            prevPosts,
            nextPosts,
            categoriesList
        }
    }
};

export default function CpatSection({ posts, prevPosts, nextPosts, categoriesList }) {
    return (
        <Layout>
            <Head>
				<title>{siteTitle} - {_section_}</title>
			</Head>

            <div className={`${utilStyles.horizontal}`}>
                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.categoriesSection}`}>
                    <CategoryListing categories={categoriesList} active={_section_} />
                </section>

                <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                    <ul className={utilStyles.list}>
                    {posts && posts.length > 0 ? 
                                posts.filter(post => post.published)
                                    .map(post => <Post key={post.id} {...post} />) 
                                    : ''}
                    </ul>

                    <section>
                        {prevPosts !== null && (
                            <Link href={`/categories/${_section_}/pages/${prevPosts}`} passHref>
                                <a>« see newer posts</a>
                            </Link>
                        )}
                        {nextPosts !== null && (
                            <Link href={`/categories/${_section_}/pages/${nextPosts}`} passHref>
                            <a>see older posts »</a>
                            </Link>
                        )}
                    </section>
                </section>
            </div>
        </Layout>
    );
};
