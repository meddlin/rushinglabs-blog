import Link from 'next/link';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getAllRecipesSections, getPostsFromRecipesSubdir } from '../../../lib/recipes';

export async function getStaticProps({ params }) {
    /**
     * TODO : Check if 'section' contains a value
     * If NOT (section is empty) then return an error message, stating 
     * route is broken due to missing 'section'.
     */
    const docs = getPostsFromRecipesSubdir(params.section);

    return {
        props: {
            docs: docs,
            section: params.section
        }
    }
}

export async function getStaticPaths() {
    const recipesSections = getAllRecipesSections();

    return {
        paths: recipesSections.map(section => {
            return {
                params: { section: section }
            }
        }),
        fallback: false
    }
}

function RecipesSection({ docs, section }) {
    return (
        <Layout>
            <h1>Docs: {section}</h1>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <ul>
                    {docs && docs.length > 0 ? docs.map( doc => (
                        <li key={doc.id}>
                            <Link href={`/recipes/${section}/${doc.id}`}>
                                <a>{doc.id}</a>
                            </Link>
                        </li>
                    )) : 'No recipes to show' }
                </ul>
            </section>
        </Layout>
    );
}

export default RecipesSection;
