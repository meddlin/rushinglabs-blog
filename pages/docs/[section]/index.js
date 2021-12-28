import Link from 'next/link';
import Layout from '../../../components/layout';
import { getAllDocsSections, getPostsFromDocsSubdir } from '../../../lib/docs';

export async function getStaticProps({ params }) {
    /**
     * TODO : Check if 'section' contains a value
     * If NOT (section is empty) then return an error message, stating 
     * route is broken due to missing 'section'.
     */
    const docs = getPostsFromDocsSubdir(params.section);

    return {
        props: {
            docs: docs,
            section: params.section
        }
    }
}

export async function getStaticPaths() {
    /* const docs = getPostsFromDocsSubdir(section); */
    const docsSections = getAllDocsSections();

    return {
        paths: docsSections.map(section => {
            return {
                params: { section: section }
            }
        }),
        fallback: false
    }
}

function DocsSection({ docs, section }) {
    return (
        <Layout>
            <h1>Docs: {section}</h1>

            <ul>
                {docs && docs.length > 0 ? docs.map( doc => (
                    <li key={doc.id}>
                        <Link href={`/docs/${section}/${doc.id}`}>
                            <a>{doc.id}</a>
                        </Link>
                    </li>
                )) : 'No docs to show' }
            </ul>
        </Layout>
    );
}

export default DocsSection;