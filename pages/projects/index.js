import Layout, { siteTitle } from "../../components/layout";
import Head from 'next/head';
import Image from 'next/image';
import SocialsHorizontal from '../../components/socials-horizontal';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../styles/about.module.css';
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
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.postsSection}`}>
                <ul>
                    {metadata && metadata.length > 0 ? 
                        (metadata.map( meta => (
                            (meta.published ? (
                                <li key={meta.title}>
                                    <div>
                                        {meta.images && (meta.images.length && meta.images[0].url !== '') > 0 ? (
                                            <Image 
                                                src={meta.images[0].url}
                                                alt={meta.images[0].alt}
                                                height={meta.images[0].height}
                                                width={meta.images[0].width}
                                            />
                                        ) : ''}
                                        <div>
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
                                        </div>
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

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ width: '80%' }}>
                            <h2>Amortization Calculator</h2>
                            <a href="https://amortize-client.herokuapp.com/">
                                <Image src="https://meddlin-web.s3.us-east-2.amazonaws.com/post_2021-09-24/amortize-demo-screenshot.png"
                                alt="Boring screenshot of an amortization table" height={300} width={450} />
                            </a>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <p>
                                While shopping for a house, I needed an amortization
                                calculator that was more helpful to my budget than
                                what I was finding online. So, I made one.
                            </p>
                            <p>
                                I also took the opportunity to test what kind of CI/CD
                                pipeline&mdash;with security tests&mdash;can be created (for free)
                                with the built-in tools available on GitHub. The demo 
                                is hosted on Heroku via Docker containers.
                            </p>
                            <div>
                                <a href="https://github.com/meddlin/amortize">Check the code on GitHub!</a> &nbsp; | &nbsp;
                                <a href="https://meddlin.github.io/amortize/">Project Site</a> &nbsp; | &nbsp;
                                <a href="https://amortize-client.herokuapp.com/">Demo</a>
                            </div>
                        </div>
                    </div>
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
