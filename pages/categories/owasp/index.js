import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import { getPostsFromDocsSubdir } from '../../../lib/posts';
import config from '../../../blogConfig';

const _section_ = 'owasp';

export async function getStaticProps() {
    const posts = getPostsFromDocsSubdir(_section_);
    console.log(posts);

    return {
        props: {
            posts: posts
        }
    }
};

export default function OwaspSection ({ posts }) {
    return (
        <Layout>
            <Head>
                {/* {siteTitle} - */}
				<title>{_section_}</title>
			</Head>
            
            <div>
                <h1>OWASP Section</h1>

                <ul>
                    <li>A01</li>
                    <li>A02</li>
                    <li>A03</li>
                </ul>
                <ul>
                    {(posts && posts.length > 0) ? (
                        posts.map( ({id, year, date, title, preview}) => (
                            <li>
                                <Link href={`/docs/${_section_}/${id}`}>
                                    <a>{id}</a>
                                </Link>
                            </li>
                        ))
                    ) : ''}
                </ul>
            </div>
        </Layout>
    );
}