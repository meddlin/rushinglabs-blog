import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, getAllCategories } from '../lib/posts';
import config from '../blogConfig';
import CategoryListing from '../components/category-listing';

export async function getStaticProps() {
	const allPostsData = await getSortedPostsData();
	const categoriesList = getAllCategories();

	// Paging information
	const startIndex = 0;
	const endIndex = config.postsPerPage;
	const prevPosts = null;
	const nextPosts = (endIndex >= allPostsData.length) ? null : 2;
	
	debugger;

	return {
		props: {
			allPostsData: allPostsData.slice(startIndex, endIndex),
			categoriesList,
			prevPosts,
			nextPosts
		}
	}

};

export default function Home({ allPostsData, categoriesList, prevPosts, nextPosts }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<div className={`${utilStyles.horizontal}`}>
				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.categoriesSection}`}>
					<b>Categories</b>
					<CategoryListing categories={categoriesList} />
				</section>

				<section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
					<ul className={utilStyles.list}>
						{allPostsData.map( ({ id, date, title, preview, contentHtml }) => (
							<li className={utilStyles.listItem} key={id}>
								<Link href={`/blog/${id}`}>
									<a>{title}</a>
								</Link>
								<br />
								<small className={utilStyles.lightText}>
									<Date dateString={date} />
								</small>
								<p>{preview}</p>
								{/* <p dangerouslySetInnerHTML={{ __html: contentHtml.slice(0, 100) }}></p> */}
							</li>
						))}
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
}