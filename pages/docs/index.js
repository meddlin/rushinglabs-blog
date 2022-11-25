import escapeHTML from 'escape-html';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { siteTitle } from '../../components/layout-head-loader';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import docsStyles from '../../styles/docs.module.css';
import { getAllDocsSections, getPostsFromDocsSubdir, getSortedDocsPostsData } from '../../lib/docs';

export async function getStaticProps() {
    const docsData = getSortedDocsPostsData();
    const sections = getAllDocsSections();

    const data = [];
    sections.forEach(section => {
        data.push({
            section: section,
            docs: getPostsFromDocsSubdir(section)
        })
    });

    /**
     * [
     *   {
     *     section: 'owasp',
     *     docs: ['01.mdx', '02.mdx']
     *   },
     *   {
     *     section: 'general',
     *     docs: ['stuff', 'asdf', 'what']
     *   }
     * ]
     */

	return {
		props: {
			docs: docsData,
            chunks: data,
			sections
		}
	}
}

function Docs({ docs, chunks, sections }) {
    return (
        <Layout footerDisplay={true}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <ul className={docsStyles.listParent}>
                    {chunks.map( ({section, docs}) => (
                        <li key={section}>
                            <Link href={`/docs/${escapeHTML(section)}`}>
                                <a><h3>{section}</h3></a>
                            </Link>
                            {docs && docs.length > 0 ? (
                                <ul className={utilStyles.list}>
                                    {docs.map( doc => (
                                        <li className={utilStyles.listItem} key={doc.id}>
                                            <Link href={`/docs/${escapeHTML(section)}/${escapeHTML(doc.id)}`}>
                                                <a>{doc.title}</a>
                                            </Link>
                                            <small className={utilStyles.subpreview}>
                                                {doc.date ? (<Date dateString={doc.date} />) : ''}
                                            </small>
                                        </li>
                                    ))}
                                </ul>
                            ) : ''}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export default Docs;
