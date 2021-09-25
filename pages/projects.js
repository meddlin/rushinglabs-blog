import Layout from '../components/layout';
import Image from 'next/image';
import SocialsHorizontal from '../components/socials-horizontal';
import styles from '../styles/about.module.css';

function Projects() {
    return (
        <Layout home>
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
            </div>
        </Layout>
    );
};

export default Projects;