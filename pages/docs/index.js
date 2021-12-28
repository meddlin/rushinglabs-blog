import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getAllDocsSections, getSortedDocsPostsData } from '../../lib/docs';
import config from '../../blogConfig';

export async function getStaticProps() {
    const docsData = getSortedDocsPostsData();
    const sections = getAllDocsSections();

    // Paging information
	const startIndex = 0;
	const endIndex = config.postsPerPage;
	const prevPosts = null;
	const nextPosts = (endIndex >= docsData.length) ? null : 2;

	return {
		props: {
			docs: docsData.slice(startIndex, endIndex),
			sections,
			prevPosts,
			nextPosts
		}
	}
}

function Docs({ docs, sections, prevPosts, nextPosts }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <sections>
                <ul className={utilStyles.list}>
                    {sections.map( section => (
                        <li className={utilStyles.listItem} key={section}>
                            <Link href={`/docs/${section}`}>
                                <a>{section}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </sections>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <h1>Docs is a space under active development.</h1>

                <ul className={utilStyles.list}>
                    {docs.map( ({ id, date, title, preview }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/docs/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <small className={utilStyles.subpreview}>
                                {date ? (<Date dateString={date} />) : ''}
                            </small>
                            <p>{preview}</p>
                        </li>
                    ))}
                </ul>
            </section>

            <section className={`${utilStyles.centeredButtons}`}>
                {prevPosts !== null && (
                    <Link href={"/docs/pages/" + prevPosts} passHref>
                        <a>« newer</a>
                    </Link>
                )}
                {nextPosts !== null && (
                    <Link href={"/docs/pages/" + nextPosts} passHref>
                    <a>older »</a>
                    </Link>
                )}
            </section>
        </Layout>
    );
}

export default Docs;