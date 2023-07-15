import Layout from '../components/layout';
import SocialsHorizontal from '../components/socials-horizontal';
import styles from '../styles/about.module.css';

function About() {
    return (
        <Layout home footerDisplay={false}>
            <div className={styles.mainContent}>
                <p>
                    I love programming and tinkering with computers, and I&apos;m currently working as an
                    AppSec Engineer. I&apos;ve been employed in the tech industry since 2013, and have held 
                    multiple software engineering positions interacting with various technology spanning 
                    across COBOL, .NET/C#, JavaScript, and even a little Python sprinkled in.
                </p>

                <p>
                    I blog about code and some of the ideas I run across in work and projects. I also
                    post tutorials and tech videos to YouTube, and try to share as much of everything 
                    on GitHub as I can.
                </p>
                <p>
                    <SocialsHorizontal />
                </p>
            </div>
        </Layout>
    );
};

export async function getStaticProps(context) {
    return {
        props:  {} // will be passed to the page component as props
    }
}

export default About;