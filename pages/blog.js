import Head from 'next/head';
import Layout from '../components/layout';
import { siteTitle } from '../components/layout-head-loader';
import Link from 'next/link';
import PostPreview from '../components/post-preview'
import { getSortedPostsData, getAllCategories } from '../lib/posts';
import config from '../blogConfig';
import CategoryListing from '../components/category-listing';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const categoriesList = getAllCategories();

	// Paging information
	const startIndex = 0;
	const endIndex = config.postsPerPage;
	const prevPosts = null;
	const nextPosts = (endIndex >= allPostsData.length) ? null : 2;

	return {
		props: {
			allPostsData: allPostsData.slice(startIndex, endIndex),
			categoriesList,
			prevPosts,
			nextPosts
		}
	}

};


export default function BlogHome({ allPostsData, categoriesList, prevPosts, nextPosts }) {
    return (
        <Layout home footerDisplay={true}>
            <Head>
				<title>{siteTitle}</title>
			</Head>

			<div className="flex justify-between">
				<section className="text-sm">
					<b>Categories</b>
					<CategoryListing categories={categoriesList} />
				</section>

				<section className="text-md">
					<ul className="list-none p-0 m-0">
						{allPostsData.filter(post => post.published).map(
							post => <PostPreview key={post.id} {...post} />
						)}
					</ul>

					<section className="flex justify-between">
						{prevPosts !== null && (
							<Link href={"/blog/pages/" + prevPosts} passHref>« newer</Link>
						)}
						{nextPosts !== null && (
							<Link href={"/blog/pages/" + nextPosts} passHref>older »</Link>
						)}
					</section>
				</section>
			</div>
        </Layout>
    );
}