import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../../components/layout';
import { siteTitle } from '../components/layout-head-loader';
import Date from '../../../components/date';
import CategoryListing from '../../../components/category-listing';
import { getCategoryPosts, getAllCategories } from '../../../lib/posts';
import { capitalizeFirstLetter } from '../../../lib/text-utils';
import utilStyles from '../../../styles/utils.module.css';
import config from '../../../blogConfig';

const _section_ = 'software';

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

export default function SoftwareSection({ posts, prevPosts, nextPosts, categoriesList }) {
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
                        {(posts && posts.length > 0) ? (
                            posts.map( ({ id, year, date, title, preview, section }) => (
                                <li className={utilStyles.listItem} key={id}>
                                    <Link href={`/blog/${year}/${id}`}>
                                        <a>{title}</a>
                                    </Link>
                                    <br />
                                    <small className={utilStyles.subpreview}>
                                    {section ? (<text><a href={`/categories/${section}`}>{section}</a>&nbsp;&mdash;&nbsp;</text>) 
                                            : ''}
                                        <Date dateString={date} />
                                    </small>
                                    <p>{preview}</p>

                                    <Link href={`/blog/${id}`}>
                                        <a className={utilStyles.readMoreLink}>Read More &mdash;&gt;</a>	
                                    </Link>
                                </li>
                            ))
                        ) : ''}
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
