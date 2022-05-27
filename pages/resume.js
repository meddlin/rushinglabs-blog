import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/resume.module.css';

function Resume() {
    return (
        <div>
            <header className={styles.header}>
                <h1>Darrien Rushing</h1>
                <h2>Software Engineer</h2>
            </header>

            <section className={styles.contactInfo}>
                <div>
                    <a href="drushing.dev@gmail.com">drushing.dev@gmail.com</a>
                    <a href="https://github.com/meddlin/">github.com/meddlin</a>
                </div>
                <div>
                    <span>Austin, TX</span>
                    <a href="https://www.linkedin.com/in/darrien-rushing-69677447/">linkedin/darrien-rushing</a>
                </div>
            </section>

            <div className={styles.work}>
                <div className={styles.skills}>
                    <h3>Skills</h3>
                    <ul className={styles.list}>
                        <li>C#</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                        <li>React</li>
                        <li>MS-SQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>
                <div className={styles.experience}>
                    <h3>Work Experience</h3>
                    <ul className={styles.list}>
                        <li>
                            <b>Sectigo</b><span> | App Sec Eng.</span>
                            <p>
                                - Built dashboards with Jira, Python, PostgreSQL, and Grafana
                                <br />
                                - Authored Secure SDLC document to provide governance for secure development practices
                                <br />
                                - Researched open-source SAST tools to be implemented into software toolchains for 
                                security testing
                            </p>
                        </li>
                        <li>
                            <b>Farm Credit Bank of Texas</b><span> | App Sec Eng.</span>
                            <p>
                            Aided in design and research for creating a new AppSec program for the organization, using 
                            OWASP Top 10 as the benchmark. This required collaboration 
                            across Security, Software, and DevOps teams to deliver accurate details and 
                            reports analysis. Began leading and building a new application inventory system for 161 
                            applications, with C#, SQL, Azure DevOps, and Event Sentry. Also authored governance 
                            documentation covering goals and management for Veracode, and API and vulnerability 
                            management. Also managed scanning and reporting processes for Barracuda WAS and 
                            communication with connected bank branches.
                            </p>
                        </li>
                        <li>
                            <b>PoolCorp</b><span>| Software Engineer</span>
                            <p>
                            Built tools and REST APIs integrating existing product data from 
                            MS-SQL with ElasticSearch; this
                            allowed hundreds of users to search across thousands of our products. 
                            Created new tools with .NET Core, React, and Redux to ready the team 
                            for scalable 
                            deployments with Docker and Azure. Led a bi-weekly “share session” 
                            to share new tools 
                            and foster a stronger engineering culture on the team. Also supported 
                            features across 
                            the UniBasic ERP system, VB.NET and C# web services, and Vue.js 
                            front-end applications.
                            </p>
                        </li>
                        <li>
                            <b>Immense Networks</b><span> | Software Developer</span>
                            <p>
                            Built a WinForms application, making heavy use of C# asynchronous 
                            programming, to record crane arm
                            strain measurements. Supported various JavaScript and C# code bases, 
                            with some 
                            work in Ruby. Provided support for PowerShell scripts managing over 
                            500 client workstations.
                            </p>
                        </li>
                        <li>
                            <b>PHI, Helipass</b><span> | Software Engineer</span>
                            <p>
                            Supported an MVC application that automated the passenger check-in 
                            processes at heliports. Required
                            to have a full stack knowledge of the code base across C#, SQL, 
                            JavaScript, and Knockout.js. Active in a Kanban-style Agile work 
                            environment with bi-weekly release cycles.
                            </p>
                        </li>
                        <li>
                            <b>Performance Contractors</b><span> | Application Developer</span>
                            <p>
                            Managed invoice processing applications built with xCP, Documentum, 
                            and Captiva. Also built a
                            Windows service for digital invoice conversion, and provided web 
                            development support for a pipe material data coordination project.
                            </p>
                        </li>
                        <li>
                            <b>Louisiana Farm Bureau Insurance</b><span> | Programmer I</span>
                            <p>
                            Implemented responsive design using Bootstrap 3 across Farm Bureau’s 
                            public website. Maintained
                            back-end data processes in COBOL on z/OS, and wrote Python plugins 
                            for Sublime Text 3 for more efficient COBOL development workflow.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <h3>Education</h3>
            <p>Southeastern Louisiana University</p>
            <p>Bachelor of Science, Computer Science, Dec. 2014 | GPA: 3.1, Minor: Mathematics</p>

            <h3>Projects</h3>
            <p>Website: <a href="https://rushinglabs.com">rushinglabs.com</a></p>
            <p>GitHub: <a href="https://github.com/meddlin">github.com/meddlin</a></p>
        </div>
    );
}

export default Resume;