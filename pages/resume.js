import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import linkPageStyles from '../styles/link-page.module.css';

function Resume() {
    return (
        <div>
            <h1>Darrien Rushing</h1>
            <h2>AppSec Eng. | drushing.dev@gmail.com</h2>

            <ul>
                <li>
                    <h3>Farm Credit Bank of Texas | App Sec Eng.</h3>
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
                    <h3>PoolCorp | Software Engineer</h3>
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
                    <h3>Immense Networks | Software Developer</h3>
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
                    <h3>PHI, Helipass | Software Engineer</h3>
                    <p>
                    Supported an MVC application that automated the passenger check-in 
                    processes at heliports. Required
                    to have a full stack knowledge of the code base across C#, SQL, 
                    JavaScript, and Knockout.js. Active in a Kanban-style Agile work 
                    environment with bi-weekly release cycles.
                    </p>
                </li>
                <li>
                    <h3>Performance Contractors | Application Developer</h3>
                    <p>
                    Managed invoice processing applications built with xCP, Documentum, 
                    and Captiva. Also built a
                    Windows service for digital invoice conversion, and provided web 
                    development support for a pipe material data coordination project.
                    </p>
                </li>
                <li>
                    <h3>Louisiana Farm Bureau Insurance | Programmer I</h3>
                    <p>
                    Implemented responsive design using Bootstrap 3 across Farm Bureau’s 
                    public website. Maintained
                    back-end data processes in COBOL on z/OS, and wrote Python plugins 
                    for Sublime Text 3 for more efficient COBOL development workflow.
                    </p>
                </li>
            </ul>

            <h3>Education</h3>
            <p>Southeastern Louisiana University</p>
            <p>Bachelor of Science, Computer Science, Dec. 2014 | GPA: 3.1, Minor: Mathematics</p>

            <h3>Projects</h3>
            <p>Website: <a href="https://rushinglabs.com">rushinglabs.com</a></p>
            <p>GitHub: <a href="https://github.com/meddlin">github.com/meddlin</a></p>
            <p>
            CPAT – Automated data collection from OSINT tools in a real-time web 
            application. Built with React/Redux, C#/.NET Core, MongoDB, and 
            ElasticSearch. (Active development)
            </p>
        </div>
    );
}

export default Resume;