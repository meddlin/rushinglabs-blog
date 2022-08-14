import Layout, { siteTitle } from "../../components/layout";
import Head from 'next/head';
import Image from 'next/image';
import SocialsHorizontal from '../../components/socials-horizontal';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/projects.module.css';
import { getAllProjects } from "../../lib/projects";
import { projectsMeta } from '../../projectsConfig';


/**
 * 
 * /projects/index.js
 * The "view all" view for projects. Should be able to find
 * all projects from this view.
 * 
 */

export async function getStaticProps() {
    const projects = getAllProjects();

    const projectMetadata = projectsMeta;

    return {
        props: {
            projects: projects,
            metadata: projectMetadata
        }
    }
}

const Projects = ({ metadata, projects }) => {
    return (
        <Layout footerDisplay={true}>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <ul className={styles.listParent}>
                    {metadata && metadata.length > 0 ? 
                        (metadata.map( meta => (
                            (meta.published ? (
                                <li key={meta.title}>
                                    <div style={{ display: `flex`, flexDirection: `row` }}>
                                        <div style={{ maxWidth: `65%` }}>
                                            <p>
                                                <a href={`/projects/${meta.title}`}>
                                                    {meta.title}
                                                </a>
                                            </p>
                                            <p>{meta.summary}</p>
                                            <p className={styles.projectLinks}>
                                                {meta.links.map( link => (
                                                    <a href={link.url}>{link.text}</a>
                                                ))}
                                            </p>
                                        </div>
                                        {meta.images && (meta.images.length && meta.images[0].url !== '') > 0 ? (
                                            <Image 
                                                src={meta.images[0].url}
                                                alt={meta.images[0].alt}
                                                height={meta.images[0].height}
                                                width={meta.images[0].width}
                                            />
                                        ) : ''}
                                    </div>
                                </li>
                            ) : '')
                        )
                    )) : ''}
                </ul>

                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                    
                    {metadata && metadata.length > 0 ? (metadata.map( meta => (
                        <li key={meta.title}>
                            <p>
                                <a href={`/projects/${meta.title}`}>
                                    {meta.title}
                                </a>
                            </p>
                            <p>{meta.summary}</p>
                            <p>
                                {meta.links.map( link => (
                                    <a href={link.url}>{link.text}</a>
                                ))}
                            </p>
                            <p>

                            </p>
                        </li>
                    ))) : ''}
                </ul>

                {/* <div style={{ display: 'flex', flexDirection: 'column' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '60%' }}>
                            <h2>Rushing Labs (website)</h2>
                            (picture)
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div>
                                <p>
                                    Originally, I was just playing around with hosting a blog,
                                    and over time it has ballooned into a happy little place
                                    to share some of the <i>developery stuff</i> I do.
                                </p>
                                <p>
                                    Built with Next.js
                                    <br />
                                    <i>It's this site!</i> &#128521;
                                </p>    
                            </div>
                            <div>
                                <a href="https://github.com/meddlin/rushinglabs-blog-nextjs">Check the code on GitHub!</a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>
        </Layout>
    );
};

export default Projects;
