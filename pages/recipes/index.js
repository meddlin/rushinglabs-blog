import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { siteTitle } from '../../components/layout-head-loader';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import recipesStyles from '../../styles/recipes.module.css';
import { getAllRecipesSections, getPostsFromRecipesSubdir, getSortedRecipesPostsData } from '../../lib/recipes';

export async function getStaticProps() {
    const recipesData = getSortedRecipesPostsData();
    const sections = getAllRecipesSections();

    const data = [];
    sections.forEach(section => {
        data.push({
            section: section,
            docs: getPostsFromRecipesSubdir(section)
        })
    });

	return {
		props: {
			docs: recipesData,
            chunks: data,
			sections
		}
	}
}

function Recipes({ docs, chunks, sections }) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <ul className={recipesStyles.listParent}>
                    {chunks.map( ({section, docs}) => (
                        <li key={section}>
                            <Link href={`/recipes/${section}`}>
                                <a><h3>{section}</h3></a>
                            </Link>
                            {docs && docs.length > 0 ? (
                                <ul className={utilStyles.list}>
                                    {docs.map( doc => (
                                        <li className={utilStyles.listItem} key={doc.id}>
                                            <Link href={`/recipes/${section}/${doc.id}`}>
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

export default Recipes;
